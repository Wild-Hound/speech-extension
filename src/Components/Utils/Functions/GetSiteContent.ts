export function getContent() {
  console.log("clicked");

  const blackListedNodes = ["SCRIPT", "NOSCRIPT"];
  const borderStyle = "1px solid #000";
  const element = document.querySelector("article");

  const textArr: string[] = [];

  function traverseNode(node) {
    if (blackListedNodes.includes(node.tagName)) {
      return;
    }

    const childs = node.childNodes;
    if (childs.length > 0) {
      childs.forEach((childNode) => traverseNode(childNode));
    }

    if (node?.style) {
    }

    if (node.nodeType == Node.TEXT_NODE) {
      const nodeText = `${node.textContent}`;

      if (nodeText.length > 1) {
        textArr.push(`${nodeText}`);

        // @ts-ignore
        (node as HTMLElement).parentNode.style.border = borderStyle;
      }
    }
  }

  traverseNode(element);
  return textArr.join("");
}
