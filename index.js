module.exports.getLinksFromMd = function getLinksFromMd(text){
  if ( text === null || text === "" ){
    throw new TypeError("missingParameter");
  }
  if ( !isNaN(text)) {
    throw new TypeError("numberIsInvalidInput");
  }
  const regexLinkMd = new RegExp(/[-a-zA-Z:_\+.~//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z:_\+.~//=]*)?/gi);
  const linksMd = text.match(regexLinkMd);
  const regexTextMd = new RegExp(/(?!\[)+[a-z]+(?=\])/gm);
  const textMd = text.match(regexTextMd);
  let arrLink = [];
  for ( let i in linksMd ) {
    let linkCollection = {};
    linkCollection["href"] = linksMd[i];
    linkCollection["text"] = textMd[i];
    arrLink.push(linkCollection);
  }
  return arrLink;
};
