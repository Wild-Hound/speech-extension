export function highlightText(textToHighlight: string, source: HTMLElement) {
  const modString = escapeRegExp(textToHighlight);
  const pattern = new RegExp(modString, "gi");

  const temp = source.innerHTML.toString();
  source.innerHTML = temp.replace(pattern, (match) => `<mark>${match}</mark>`);
}

function escapeRegExp(str: string) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
