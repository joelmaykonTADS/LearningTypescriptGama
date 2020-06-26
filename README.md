
<h1 id="logo" align="center">
  <a name="logo" href="#"><img src="https://www.guiacodigo.com/img/cursos/iniciando_com_typescript/pequena-iniciando_com_typescript_img_63767.png" alt="Bear Stone Smart Home" width="200"></a>
  <br>
  Learning Typescript Gama
</h1>
<h4 align="center">Aprendendo Typescript com aulas do bootcamp da Gama Academy!</h4>
<p align="center"><a align="center" target="_blank" href="https://gama.academy/"><img height="50" width="50" src="https://i.picasion.com/pic90/75a6b894f6d4b9edcc121e3abdf8cbb4.gif" alt="Recent Commits to Bear Stone Smart Home" style="border:0"></a></p>
<div align="center">
  <h4>
    <a href="https://travis-ci.org/CCOSTAN/Home-AssistantConfig"><img src="https://travis-ci.org/CCOSTAN/Home-AssistantConfig.svg?branch=master"/></a>
    <a href="https://github.com/CCOSTAN/Home-AssistantConfig/stargazers"><img src="https://img.shields.io/github/stars/CCOSTAN/Home-AssistantConfig.svg?style=plasticr"/></a>    
    
  </h4>
</div>
<div align="center"><a name="menu"></a>
  <h4>
    <a href="#instalacao">Instalação</a>
    <span> | </span>
    <a href="#tipos">
      Tipos em Typescript
    </a>      
    <span> | </span>
    <a href="#interfaces">
      Interfaces
    </a>  
     <span> | </span>
    <a href="#classes">
      Classes, modificadores de acesso e Herança
    </a>    
    <span> | </span>
    <a href="https://amzn.to/2HXSx2M">
      Target do Typescript
    </a>   
    <span> | </span>
    <a href="https://amzn.to/2HXSx2M">
      Herança
    </a>
  </h4>
</div>
<p><font size="3">
 O que é o <strong>Typescript</strong>, surgiu a partir do <strong>Javascript</strong> que é uma liguagem robusta que possui funções construtoras, tipagem dinâmica, prototypes e possui várias especificações com ES6 e o ES7. Quando usamos as novas implementações providas pelas novas especificações do Javascript, elas não são suportadas nos navegadores mais antigos. O Typescript é um superset do Javascript que é o agrupamento de adicionais que dar a possibilidade de trabalhar com  tipagem estática, interfaces, enums, decorators, generics, dando maior controle sobre o código, escrevemos o código em Typescript que é transpilado para Javascript.
</p>
<span>
<img height="250" width="350" src="https://miro.medium.com/max/606/1*UIioHehyD5o_6ydf3w2fuw.png" />
<img height="250" width="250" src="https://qph.fs.quoracdn.net/main-qimg-1bb226be271cbb969e55513384f2401d.webp">
</span>


![Screenshot of Home Assistant Header](assets/image/2020-06-24-13-43-www.typescriptlang.org.png)

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
Site : [typescriptlang.org](https://www.typescriptlang.org/)
<hr>

### <span id="instalacao">Instalação</span>
  Requisitos:
- Ter o node e npm instalado para dar o comando abaixo
    ```bash
    npm install -g typescript
    ```
- Para criar o arquivo de configuração do Typescript: **tsconfig.json**
  ```bash
    tsc --init
  ```
  >o arquivo criado define regras para o Typescript
- Exemplo do uso do Typescript
    
    Typescript - [index.ts](./typescript/index.ts)
    
    Javascript compilado - [index.js](./typescript/index.js)
    > o arquivo foi gerando com o comando `tsc` que compila o arquivo TS se ele estiver escrito corretamente.


### <span id="tipos">Tipos</span>
- Exemplos de tipos do Typescript:
[tipos.ts](./typescript/tipos.ts)

### <span id="interfaces">Interfaces</span>
- Exemplo de interface do Typescript:
[tipos.ts](./typescript/interfaces.ts)

### <span id="classes">Classes</span>
- Exemplos de classes, modificadores de acesso e herança do Typescript:
[tipos.ts](./typescript/interfaces.ts)

>Target do Typscript: Quando compilamos criamos um javascript que pode ser em diversas versões e para configurar a versão desejada devemos alterar no arquivo tsconfig.json, isso serve para termos o javascript que funciona ou não em determinados browsers, a versão es5 normalmente funciona nos browsers mais antigos ja o do es6 para frente nos mais novos.