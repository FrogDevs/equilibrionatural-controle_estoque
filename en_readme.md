# Equilíbrio Natural - Stock Control

[![Languages](https://img.shields.io/github/languages/count/FrogDevs/equilibrionatural-controle_estoque)](https://github.com/FrogDevs/equilibrionatural-controle_estoque)
[![TopLanguage](https://img.shields.io/github/languages/top/FrogDevs/equilibrionatural-controle_estoque)](https://github.com/FrogDevs/equilibrionatural-controle_estoque)
[![Files](https://img.shields.io/github/directory-file-count/FrogDevs/equilibrionatural-controle_estoque)](https://github.com/FrogDevs/equilibrionatural-controle_estoque)
[![RepoSize](https://img.shields.io/github/repo-size/FrogDevs/equilibrionatural-controle_estoque)](https://github.com/FrogDevs/equilibrionatural-controle_estoque)
[![LinesCode](https://img.shields.io/tokei/lines/github/FrogDevs/equilibrionatural-controle_estoque)](https://github.com/FrogDevs/equilibrionatural-controle_estoque)
[![MIT License](https://img.shields.io/github/license/FrogDevs/Equilibrio-Natural-ControleEstoque)](https://choosealicense.com/licenses/mit/)
![Logos](https://i.imgur.com/E5pg9Hj.png)

Stock management system for the company Equilíbrio Natural. Multi-platform application for the control of 2 physical units with important options such as product registration, history record and automatic expiration date.

## Screenshots

![App Screenshot](https://i.imgur.com/w1L39s0.png)
![App Screenshot](https://i.imgur.com/5Pyzp8X.png)

## Appendix

* [Thanks to](#thanks-to)
* [Assignments](#assignments)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Lessons Learned](#lessons-learned)
* [Optimizations](#optimizations)
* [Demo](#demo)
  * [System Requirements](#system-requirements)
* [Run locally](#run-locally)
* [Used by](#used-by)
* [Related](#related)
* [Responsible Members](#responsible-members)
* [License](#license)

## Thanks to

We leave this dedication to the company Equilíbrio Natural (Natural Balance), which trusted in our skills for dissemination, management, and automation of their enterprise. And to ETEC Jardim Ângela for providing us the search for the knowledge necessary for the realization of this work.

## Assignments:

- [Material Desing 3](https://m3.material.io/)
- [Material Desing 3 - Figma](https://www.figma.com/community/file/1035203688168086460)
- [Font: Roboto](https://www.npmjs.com/package/@fontsource/roboto)
- [Icons: Material Symbols](https://www.npmjs.com/package/material-symbols)
- [Vue Datepicker](https://vue3datepicker.com)
- [CompressorJs](https://github.com/fengyuanchen/compressorjs)
- [SimpleCrypto](https://simplecrypto.js.org)
- [Unsplash: 1° Categoria](https://unsplash.com/photos/CY-OkOICA9o)
- [Unsplash: 2° Categoria](https://unsplash.com/photos/3bdSGpKVAmk)
- [Unsplash: 3° Categoria](https://unsplash.com/photos/DEuob2v77wI)
- [Unsplash: 4° Categoria](https://unsplash.com/photos/wbw5RjQXxyg)
- [Unsplash: 5° Categoria](https://unsplash.com/photos/wbw5RjQXxyg)

## Features

- ✨ Interactive cards
- 🔒 ADMIN and Guest access
- 🏪 Choice of unit
- 🔠 Categories
- 📦 Register, edit and delete products
- 🔎 Search for products
- 📖 Log in change history
- 🕔 Automatic expiration date
- 😎 Multiplatform: Windows, Linux and Android

## Tech Stack

**Front-end:** [Vite](https://vitejs.dev), [VueJs](https://vuejs.org), [TailwindCSS](https://tailwindcss.com), [Capacitor](https://capacitorjs.com) e [Electron](https://capacitor-community.github.io/electron)

**Back-end:** [Vue Router](https://router.vuejs.org), [Pinia](https://pinia.vuejs.org) e [Firebase](https://firebase.google.com)

## Lessons Learned

**What challenges were faced and how were they overcome?**

With a focus on ensuring a better user experience we chose to use a unified and cohesive **design system**. Based on research we chose Google's Material Design in its third and new version called *Material You*. With this design system it is possible to create elegant and usable products. Material Design offers a rich library of styles and components and has development versions for Android, Flutter and Web. But at this point Material Web 3 support is only planned and since there are no libraries that also support it we decided to create our own. With the help of the [official documentation](https://m3.material.io/get-started), the [Figma design kit](https://www.figma.com/community/file/1035203688168086460) and the [TailwindCSS](tailwindcss.com/) framework we built the entire interface of the system that has 13 components and 9 pages based on this design system.

In general, systems need to be consistent and dynamic at the same time. This means displaying information in the right places and allowing this information to change continuously. In an inventory control where new information is constantly being recorded, it is no different. However, it is not feasible to create different pages for each store, category, and product every time a new product is entered. The best choice is to use already defined pages and allow the information on these pages to be dynamic for each store, category and product. To do this we use **routes**, each route navigates to a page, but because we are using fixed pages we use dynamic routes. In a dynamic route you specify the information using parameters. We use [Vue Router](https://router.vuejs.org) in this process.

Saving the product images was a challenge. The solution was to use the Web API ``FileReader()``. With this native browser API we can extract the URL of the image. Using this URL we were able to render the image to the client. The drawback is that heavy images mean larger URL's and larger URL's mean longer waiting times for rendering images, leading to a crash in the system until the image is finished. There is yet another problem, larger images consume more database space. How do we solve these problems? Simple, **compress** the images! Compressing images is the process of decreasing the quality of the photo without making it indistinguishable. [CompressorJs](https://github.com/fengyuanchen/compressorjs) is a library that provides an easy and lightweight solution to this problem.

The **shelf life** of products is calculated in an **automatic** way. For this we use a logic that looks up the current day and subtracts it from the expiration day, resulting in how many days are left until the product expires. The expiration day is obtained from the date selected in the calendar [Vue datepicker](https://vue3datepicker.com/). With these values, the system **notifies** the user with the products that are close to their expiration date.

For greater **insurance** of what is happening, the system has a **change history**. Each change is logged, which also allows the user to have knowledge about the values of the products in stock. The history displays the last action done on the product, such as: Registered, edited or deleted, the date and time this action was done and other information. The total price of the product is calculated based on quantity x price. And the total price in stock is the sum of the total price of all products.

For the user to access the stock with administrator privileges he needs to enter an access key. The access key is in the online database and is loaded into the system for the confirmation entry when the user is connected to the Internet. However, there is a catch, loading the key explicitly makes it possible for anyone to gain access to the system. That is why this key is loaded in an encrypted way, and is only deciphered when the password is confirmed. This way we ensure that access to the **system is secure**. We use [SimpleCrypto](https://simplecrypto.js.org/) which simplifies this process.

## Optimizations

**What optimizations have been made to the code?**

The **Pnpm** package manager was chosen for the project because it offers *cold and hot caching*. Pnpm is 3x faster and more efficient than Npm and faster than Yarn. Dealing with numerous libraries and modules was an easier and safer task with this tool.

**Vite** is a tool with the utility to take care of the application bundle. It provides better optimization techniques, resulting in higher application performance both in development and production form for the end user.

The system was built using the concept of *Mobile First*. This concept refers to creating any project that prioritizes the experience on mobile devices, while making adaptations for larger resolutions. This allows the system to be completely responsive and adaptable to other screen resolutions, allowing the client the option to use the mobile version and/or the desktop version.

In addition to changes in resolution, each category in the mobile app has an image that identifies it. To speed up the time that these images are rendered on the screen without clogging up the App the modern image format *.AVIF* has been used. AVIF allows the image size to be reduced without losing quality, which in turn speeds up the loading time to milliseconds.

Loading data is not an easy task because it requires processing, especially when there is a lot of data to be loaded. Waiting on an empty screen until all the data is loaded can frustrate the user. It is important that a system is *user friendly* or has *usability*, in this case telling you that the necessary data is being loaded. The **Suspense API** is available natively in [Vue.js](https://vuejs.org/guide/built-ins/suspense.html) and is one way to return this information to the user.

## Demo

Versões para

- [Windows](https://github.com/FrogDevs/Equilibrio-Natural-ControleEstoque/releases/tag/inventory-control-desktop-v1.0)
- [Linux](https://github.com/FrogDevs/Equilibrio-Natural-ControleEstoque/releases/tag/inventory-control-desktop-v1.0)
- [Android](https://github.com/FrogDevs/Equilibrio-Natural-ControleEstoque/releases/tag/inventory-control-mobile-v1.0)

***Note**: To open the program on a Linux distribution it is necessary:*

1. Right-click on the file *natural_balance-1.0.0.AppImage*.
2. Go to Properties
3. Select run as program

### System Requirements

**Windows:**
  > OS: Windows 7 or newer
  > </br>Processor: 2.5Ghz or higher
  > </br>Memory: 512 MB de RAM
  > </br>Storage: 71.7 MB of available space
  
**Linux distro:**
  > Processor: 2.5Ghz or newer
  > </br>Memory: 512 MB de RAM
  > </br>Storage: 92.1 MB of available space

**Mobile Android:**
  > SO: Android 5.1 or newer
  > </br>Memory: 2 MB de RAM
  > </br>Storage: 25 MB de of available space

## Run locally

***Note**: You need the Pnpm package manager. [See how to install.](https://pnpm.io/installation)*

Clone the project

```bash
  git clone https://github.com/FrogDevs/Equilibrio-Natural-ControleEstoque.git
```

Go to the project directory

```bash
  cd Equilibrio-Natural-ControleEstoque
```

Install the dependencies

```bash
  pnpm i
```

Start the server

```bash
  pnpm dev
```

Start the electron application

```bash
  pnpm cap open @capacitor-community/electron
```

## Used by

This project is used by the following company

- [Equilíbrio Natural](https://equilibrionatural.netlify.app)

## Related

See another related project

- [Equilíbrio Natural - Website](https://github.com/FrogDevs/Equilibrio-Natural-Website)

## Responsible Members

- **UX**: [@helenacosta](https://github.com/ahaiiro) and [@joaooliveira](https://github.com/Jokxis)
- **UI and Stack**: [@viniciuscosta](https://vinicius-costa-links.vercel.app)

## License

- [MIT](LICENSE)<br><br>

<p align="right">“You have to be burning with an idea, or a problem, or a wrong that you want to right. If you’re not passionate enough from the start, you’ll never stick it out.”</p>
<p align="right">Steve Jobs</p>
