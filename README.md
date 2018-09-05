# Coletor de links para arquivos markdown v.1.0.0

**Esta biblioteca se destina à buscar em um arquivo markdown e coletar os links e suas respectivas descrições em um array de objetos, para uso em aplicações web.**
A versão atual é capaz de varrer um arquivo markdown e coletar os links e suas respectivas descrições em um array de objetos.


## Os métodos utilizados na biblioteca são:

#### **getLinksFromMd(text);**

Exemplo de uso:

```
$node
> let collection = require("getLinksLib")
> getLinksFromMd(text); //[{href: "www.google.com", text: "google"}]
```


## versão 1.0.0

- funcionalidades: buscar em um arquivo markdown e coletar os links e suas respectivas descrições em um array de objetos.


## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install getLinksLib`


## roadmap oficial do projeto

#### versão 2.0.0 (previsão outubro/2018)
- implementação da opção de inserir as informações do array dinâmicamente em um html.

#### versão 1.0.1 (released)
- funcionalidades: buscar em um arquivo markdown e coletar os links e suas respectivas descrições em um array de objetos.
