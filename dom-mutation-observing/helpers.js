export const printDom = (fromNode, toNode) => {
  // poor man's pretty print
  toNode.textContent = fromNode.outerHTML
    .replace(/</g, '\n<')
    .replace(/>/g, '>\n')
    .replace(/^\s*[\n\r]/gm, '')
}

export const sleep = () => {
  return new Promise(resolve => setTimeout(resolve, 1000))
}
