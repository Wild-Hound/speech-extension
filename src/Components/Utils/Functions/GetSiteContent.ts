export function getContent() {
  const hostName = window.location.hostname;
  const elements: HTMLElement[] = [];
  const contents: string[] = [];

  if (hostName.includes("medium.com")) {
    elements.push(document.querySelector("article"));
  } else if (hostName.includes("wikipedia.org")) {
    elements.push(document.querySelector("#bodyContent"));
  }
  elements.forEach((element) => {
    const result = extractContent(
      element,
      ["toc"],
      [
        "infobox biota",
        "thumb tright",
        "mod-gallery mod-gallery-default mod-gallery-center",
        "reflist reflist-columns references-column-width",
        "navbox",
      ]
    );

    contents.push(result);
  });
  return contents;
}

function extractContent(
  element: HTMLElement,
  blacklistedIds?: string[],
  blackListedClasses?: string[]
) {
  const masterRecord = element.innerHTML;
  let curatedRecord: string = masterRecord;
  const trashArray = [];
  const children = element.childNodes;

  if (children.length > 0) {
    children.forEach((childNode: HTMLElement) => traverseNode(childNode));
  }

  function traverseNode(childNode) {
    const blackListedNodes = ["SCRIPT", "NOSCRIPT", "STYLE"];

    if (blackListedNodes.includes(childNode.tagName)) {
      trashArray.push(childNode.outerHTML);
    }
    if (blacklistedIds.includes(childNode.id)) {
      trashArray.push(childNode.outerHTML);
    }
    if (blackListedClasses.includes(childNode.className)) {
      trashArray.push(childNode.outerHTML);
    }

    const children = childNode.childNodes;
    if (children.length > 0) {
      children.forEach((childNode) => traverseNode(childNode));
    }
  }

  trashArray.forEach((string) => {
    curatedRecord = curatedRecord.replace(string, "");
  });

  const regex = /(<([^>]+)>)/gi;

  curatedRecord = curatedRecord.replace(regex, " ");
  curatedRecord = curatedRecord.replace(/\t|\n/g, "");
  curatedRecord = curatedRecord.replace(/  +/g, " ");
  return curatedRecord;
}

// /(<([^>]+)>)/ig

// /\t|\n/g
