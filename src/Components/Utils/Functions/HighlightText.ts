export function highlightText(textToHighlight: string, source: HTMLElement) {
  const modString = escapeRegExp(textToHighlight);
  const pattern = new RegExp(modString, "gi");

  const temp = source.innerHTML.toString();
  const cleanedHtml = cleanSource(temp);
  source.innerHTML = cleanedHtml.replace(
    pattern,
    (match) => `<mark>${match}</mark>`
  );
}

function escapeRegExp(str: string) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function cleanSource(str: string) {
  const pattern1 = new RegExp(/<\/?mark>/g, "gi");
  // const pattern2 = new RegExp(/</>/g, "gi");
  // let cleanedString = str.replace("<mark>", "");
  // cleanedString = cleanedString.replace("</mark>", "");

  let cleanedString = str.replace(pattern1, (match) => "");
  // cleanedString = str.replace(pattern1, (match) => ``);
  return cleanedString;
}
