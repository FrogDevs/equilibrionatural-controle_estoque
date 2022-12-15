
# Equilíbrio Natural - Controle de Estoque

[![Languages](https://img.shields.io/github/languages/count/FrogDevs/Equilibrio-Natural)](https://github.com/FrogDevs/Equilibrio-Natural-ControleEstoque)
[![TopLanguage](https://img.shields.io/github/languages/top/FrogDevs/Equilibrio-Natural)](https://github.com/FrogDevs/Equilibrio-Natural-ControleEstoque)
[![Files](https://img.shields.io/github/directory-file-count/FrogDevs/Equilibrio-Natural)](https://github.com/FrogDevs/Equilibrio-Natural-ControleEstoque)
[![RepoSize](https://img.shields.io/github/repo-size/FrogDevs/Equilibrio-Natural)](https://github.com/FrogDevs/Equilibrio-Natural-ControleEstoque)
[![LinesCode](https://img.shields.io/tokei/lines/github/FrogDevs/Equilibrio-Natural)](https://github.com/FrogDevs/Equilibrio-Natural-ControleEstoque)
[![MIT License](https://img.shields.io/github/license/FrogDevs/Equilibrio-Natural)](https://choosealicense.com/licenses/mit/)
![Logos](https://i.imgur.com/E5pg9Hj.png)

Sistema de gerenciamento de estoque para a empresa Equilíbrio Natural. Aplicação multiplataforma para o controle de 2 unidades físicas com opções importantes, como, cadastro de produtos, registro de histórico e prazo de validade automático.

## Capturas de tela

![App Screenshot](https://i.imgur.com/w1L39s0.png)
![App Screenshot](https://i.imgur.com/5Pyzp8X.png)

## Apêndice

Projeto feito pela equipe [FrogDev's](https://github.com/FrogDevs) para o Trabalho de Conclusão de Curso da Etec Jardim Ângela.

## Agradecimentos

Deixamos essa dedicatória a empresa Equilíbrio Natural a qual confiou em nossas habilidades para divulgação, gestão e automação de seu empreendimento. E a ETEC Jardim Ângela por nos proporcionar a busca pelo conhecimento necessário na realização desse trabalho.

Reconhecimentos:

- [Material Desing 3](https://m3.material.io/)
- [Material Desing 3 - Figma](https://www.figma.com/community/file/1035203688168086460)
- [Fonte: Roboto](https://www.npmjs.com/package/@fontsource/roboto)
- [Icones: Material Symbols](https://www.npmjs.com/package/material-symbols)
- [Vue Datepicker](https://vue3datepicker.com)
- [CompressorJs](https://github.com/fengyuanchen/compressorjs)
- [SimpleCrypto](https://simplecrypto.js.org)
- [Unsplash: 1° Categoria](https://unsplash.com/photos/CY-OkOICA9o)
- [Unsplash: 2° Categoria](https://unsplash.com/photos/3bdSGpKVAmk)
- [Unsplash: 3° Categoria](https://unsplash.com/photos/DEuob2v77wI)
- [Unsplash: 4° Categoria](https://unsplash.com/photos/wbw5RjQXxyg)
- [Unsplash: 5° Categoria](https://unsplash.com/photos/wbw5RjQXxyg)

## Tech Stack

**Client:** [Vite](https://vitejs.dev), [VueJs](https://vuejs.org), [TailwindCSS](https://tailwindcss.com), [Vue Router](https://router.vuejs.org), [Pinia](https://pinia.vuejs.org), [Capacitor](https://capacitorjs.com) e [Electron](https://capacitor-community.github.io/electron)

**Server:** NodeJs e [Firebase](https://firebase.google.com)

## Recursos

- ✨ Cards interativos
- 🔒 Acesso de ADMIN e Visitante
- 🏪 Escolha de unidade
- 🔠 Categorias
- 📦 Cadastrar, editar e excluir produtos
- 🔎 Pesquisar produtos
- 📖 Registro no histórico de mudanças
- 🕔 Prazo de validade automático
- 😎 Multiplataforma: Windows, Linux e Android

## Lições aprendidas

**Quais desafios foram enfrentados e como foram sobresaídos?**

Com foco em garantir uma melhor experiência ao usuário optamos por usar **sistema de design unificado** e coeso. Com base em pesquisas, escolhemos o Material Desing da Google em sua terceira e nova versão denominada *Material You*. Com esse sistema de desing é possível criar produtos elegantes e utilizáveis. O Material Desing oferece uma rica biblíoteca de estilos e componentes, possuindo versões de desenvolvimento para Android, Flutter e Web. Porém até esse momento o suporte ao Material Web 3 é apenas planejado e como não existem biblíotecas que também ofereçam suporte, decidimos criar a nossa. Com o auxílio da [documentação oficial](https://m3.material.io/get-started), do [kit de desing no Figma](https://www.figma.com/community/file/1035203688168086460) e do framework [TailwindCSS](tailwindcss.com/) construímos toda a interface do sistema que possui 13 componentes e 9 páginas com base nesse sistema de desing.

De forma geral, sistemas precisam ser consistentes e ao mesmo tempo dinâmicos. Isso significa exibir as informações em lugares certos e permitir que essas informações se modifiquem continuamente. Em um controle de estoque onde novas informações são gravadas constantemente, não é diferente. Porém, não é viável criar páginas diferentes para cada loja, categoria e produto toda vez que um produto novo é cadastrado. A melhor escolha é usar páginas já definidas e permitir que as informações nessas páginas sejam dinâmicas para cada loja, categoria e produto. Para isso utilizamos **rotas**, cada rota navega para uma página, mas por estarmos usando páginas fixas, usamos rotas dinâmicas. Em uma rota dinâmica você especifica as informações usando parâmetros. Usamos o [Vue Router](https://router.vuejs.org) nesse processo.

Salvar as imagens dos produtos era um desafio. A solução foi usar a Web API ```FileReader()```. Com essa API nativa de navegadores é possível extrair a URL da imagem. Usando essa URL conseguimos renderizar a imagem para o cliente. O empecilho é que imagens pesadas significam URL's maiores e URL' maiores significam maiores tempos de espera para renderizar as imagens, levando a um travamento no sistema até que a imagem seja finalizada. Há ainda outro problema, imagens maiores consomem mais espaço no banco de dados. Como resolvemos esses problemas? Simples, **comprimindo** as imagens! Comprimir imagens é o processo de diminuir a qualidade da foto sem que a mesma seja indistinguível. [CompressorJs](https://github.com/fengyuanchen/compressorjs) é uma biblíoteca que fornece uma solução fácil e leve para esse problema.

O **prazo de validade** dos produtos é calculado de forma **automática**. Para isso usamos uma lógica que consulta o dia atual e subtrai do dia de vencimento, resultando em quantos dias faltam para o produto vencer. O dia de vencimento é obtido através da data selecionada no calendário [Vue datepicker](https://vue3datepicker.com/). Com esses valores, o sistema **notifica** o usuário com os produtos que estão próximos de seus vencimentos.

Para uma maior **segurança** sobre o que ocorre, o sistema possui um **histórico de mudanças**. Cada mudança é registrada o que também permite ao usuário ter conhecimento sobre os valores dos produtos no estoque. O histórico exibe a última ação feita no produto, tais como: Registrado, editado ou excluído, a data e o horário que essa ação foi realizada e outras informações. O preço total do produto é calculado com base na quantidade x preço. E o preço total em estoque é a soma do preço total de todos os produtos.

Para que o usuário acesse o estoque com privilégios de administrador ele precisa inserir uma chave de acesso. A chave de acesso está no banco dados online e é carregada no sistema para a confirmação de entrada quando o usuário está conectado a internet. Contudo há um impasse, carregar a chave de maneira explicita possibilita que qualquer um tenha acesso ao sistema. Por isso essa chave é carregada de maneira criptografada, ou seja, de maneira cifrada e só é decifrada para a confirmação da senha. Dessa forma garantimos que o acesso ao **sistema seja seguro**. Usamos a [SimpleCrypto](https://simplecrypto.js.org/) que simplifica esse processo.

## Otimizações

**Que otimizações foram feitas no código?**

O gerenciador de pacótes **Pnpm** foi escolhido para o projeto por oferecer *cold e hot cache*. Pnpm é 3x mais rápido e eficiente do que o Npm e mais rápido do que o Yarn. Lidar com inúmeras biblíotecas e módulos foi uma tarefa mais fácil e segura com essa ferramenta.

**Vite** é uma ferramenta com a utilidade de cuidar do bundle da aplicação. Fornece melhores técnicas de otmizações, resultando em uma maior performance na aplicação tanto em forma de desenvolvimento quanto de produção para o usuário final.

O sistema foi construido usando o conceito de *Mobile First*. Esse conceito se refere a criação qualquer projeto que prioriza a experiência em dispositivos móveis, enquanto são feitas adaptações para resoluções maiores. Isso permite que o sitema seja completamente responsivo e adaptável a outras resoluções de telas, permitindo que o cliente tenha opção de usar a versão mobile e/ou a versão desktop.

Além de mudanças na resolução, cada categoria no App mobile possui uma imagem que a identifica. Para acelerar o tempo que essas imagens são renderizadas na tela sem que o App fique congestionado o formato moderno de imagem *.AVIF* foi usado. AVIF permite que o tamanho da imagem seja reduzido sem que a mesma perca qualidade, o que por sua vez acelera o tempo de carregamento para milésimos de segundos.

Carregar dados não é uma tarefa fácil pois exige processamento, ainda mais se tratando de muitos dados a serem carregados. Ficar esperando em uma tela vazia até que todos os dados sejam carregados pode acabar frustrando o usuário. É importante que um sistema seja *user friendly* ou que possua *usabilidade*, nesse caso, informando que os dados necessários estão sendo carregados. **Suspense API** está disponível de forma nativa no [Vue.js](https://vuejs.org/guide/built-ins/suspense.html) e é uma das formas de retornar essa informação ao usuário.

## Demo

Versões para

- [Windows](https://github.com/FrogDevs/Equilibrio-Natural-ControleEstoque/releases/tag/inventory-control-desktop-v1.0)
- [Linux](https://github.com/FrogDevs/Equilibrio-Natural-ControleEstoque/releases/tag/inventory-control-desktop-v1.0)
- [Android](https://github.com/FrogDevs/Equilibrio-Natural-ControleEstoque/releases/tag/inventory-control-mobile-v1.0)

***Obs**: Para abrir o programa em uma distribuição Linux é necessário:*

1. Clicar com o botão direito no arquivo *equilibrio_natural-1.0.0.AppImage*
2. Ir em propriedades
3. Marcar executar como programa

### Requisitos de sistema

**Windows:**
  > SO: Windows 7 ou mais novo
  > </br>Processador: 2.5Ghz ou superior
  > </br>Memória: 512 MB de RAM
  > </br>Armazenamento: 71.7 MB de espaço disponível
  
**Distribuição Linux:**
  > Processador: 2.5Ghz ou superior
  > </br>Memória: 512 MB de RAM
  > </br>Armazenamento: 92.1 MB de espaço disponível

**Mobile Android:**
  > SO: Android 5.1 ou mais novo
  > </br>Memória: 2 MB de RAM
  > </br>Armazenamento: 25 MB de espaço disponível

## Rodar localmente

***Nota**: É necessário pussuir o gerenciador de pacotes Pnpm. [Veja como instalar.](https://pnpm.io/installation)*

Clone o projeto

```bash
  git clone https://github.com/FrogDevs/Equilibrio-Natural-ControleEstoque.git
```

Vá ao diretório do projeto

```bash
  cd Equilibrio-Natural-ControleEstoque
```

Instale as depêndencias

```bash
  pnpm i
```

Inicie o servidor

```bash
  pnpm dev
```

Inicie a aplicação em electron

```bash
  pnpm cap open @capacitor-community/electron
```

## Usado por

Este projeto é usado pela seguinte companhia

- [Equilíbrio Natural](https://equilibrionatural.netlify.app)

## Relacionados

Veja outro projeto relacionado

- [Equilíbrio Natural - Website](https://github.com/FrogDevs/Equilibrio-Natural-Website)

## Membro responsável

- [@viniciuscosta](https://vinicius-costa-links.vercel.app)

## Licença

[MIT](LICENSE)

<p align="right">“Você deve ter paixão por uma ideia ou problema que quer resolver. Se você não tem paixão suficiente desde o começo, não vai aguentar a pressão.”</p>
<p align="right">Steve Jobs</p>
