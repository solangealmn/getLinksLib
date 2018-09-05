const chai = require("chai");
const links = require("../index");
const expect = chai.expect;

// Quando nao houver parametro deve lancar um erro.
// Quando o texto for um numero deve lancar um erro.
// Quando o texto for uma string e nao houver url deve retornar um array vazio.
// Quando o texto for uma string e houver uma url deve retornar um array com o objeto com a url e o link do markdown.
// Quando o texto for uma string e houver tres urls diferentes deve retornar o objeto dentro do array.

describe("getLinksFromMd", function() {
  //"describe.only" roda apenas este teste "describe.skip" ou "x" para pular um teste
  describe("Quando nao houver parametro.", function() {
    it("Deve lancar um erro.", function() {
      var badFn = function () { links.getLinksFromMd("") };
      expect(badFn).to.throw('missingParameter');
    });
  });
  describe("Quando o texto for um numero.", function() {
    it("Deve lancar um erro.", function() {
      var badFn = function () { links.getLinksFromMd(25) };
      expect(badFn).to.throw('numberIsInvalidInput');
    });
  });
  describe("Quando o texto for uma string e nao houver url.", function() {
    it("Deve retornar um array vazio.", function() {
      expect(links.getLinksFromMd("str")).to.deep.equal([]);
    });
  });
  describe("Quando o texto for uma string e houver tres urls diferentes.", function() {
    it("Deve retornar o objeto dentro do array", function() {
      expect(links.getLinksFromMd(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, [labore](https://en.wiktionary.org/wiki/labore) et
      [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat [foo](http://foo.com)`
      )).to.deep.equal([{ href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
      { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
      { href: 'http://foo.com', text: 'foo' } ]);
    });
  });
  describe("Quando o texto for uma string e houver uma url.", function() {
    it("Deve retornar um array com o objeto com a url e o link do markdown.", function() {
      expect(links.getLinksFromMd("Oi você quer entrar no site [google](www.google.com) ?")).to.deep.equal([{href: "www.google.com", text: "google"}]);
    });
  });
});
