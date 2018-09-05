const chai = require("chai");
const card = require("../index");
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
      expect(badFn).to.throw('emptyInput');
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
      expect(links.getLinksFromMd()).to.equal();
    });
  });
  describe("Quando o texto for uma string e houver tres urls diferentes.", function() {
    it("Deve retornar o objeto dentro do array", function() {
      expect(links.getLinksFromMd()).to.equal();
    });
  });
  describe("Quando o texto for uma string e houver uma url.", function() {
    it("Deve retornar um array com o objeto com a url e o link do markdown.", function() {
      expect(links.getLinksFromMd()).to.equal();
    });
  });
});
