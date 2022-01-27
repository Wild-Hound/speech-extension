// function getContent() {
//   const x = document.body.childNodes;
//   const contentText = [];

//   x.forEach((node) => {
//     //   @ts-ignore
//     if (!node.tagName || node.tagName === "SCRIPT") {
//       return;
//     }
//     traverseNode(node);
//   });

//   function traverseNode(node) {
//     const childs = node.childNodes;
//     if (childs.length > 0) {
//       childs.forEach((childNode) => traverseNode(childNode));
//     }

//     if (node.nodeType == Node.TEXT_NODE) {
//       const nodeText = `${node.innerText}`;
//       if (nodeText.length > 1) {
//         contentText.push(nodeText);
//       }
//     }
//   }
//   console.log(contentText.join("\n"));
// }

export function getContent() {
  const blackListedNodes = ["SCRIPT", "NOSCRIPT"];
  const borderStyle = "1px solid #000";
  const elementArr = document.querySelector("article");

  const textArr: string[] = [];

  function traverseNode(node) {
    if (blackListedNodes.includes(node.tagName)) {
      return;
    }

    if (node?.style) {
      (node as HTMLDivElement).style.border = borderStyle;
    }

    const childs = node.childNodes;
    if (childs.length > 0) {
      childs.forEach((childNode) => traverseNode(childNode));
    }

    if (node.nodeType == Node.TEXT_NODE) {
      // console.log(node);
      const nodeText = `${node.textContent}`;
      if (nodeText.length > 1) {
        textArr.push(`${nodeText}`);
      }
    }
  }

  traverseNode(elementArr);
  return textArr.join("\n");
}
