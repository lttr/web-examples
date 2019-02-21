import { printDom, sleep } from './helpers.js'

export const innerHTMLMutations = async (node, printNode) => {
  render(node, 'foo')

  printDom(node, printNode)
  await sleep()

  render(node, 'foo', 'bar')

  printDom(node, printNode)
  await sleep()

  render(node, 'foo', 'bar', 'quax')

  printDom(node, printNode)
  await sleep()

  render(node, 'foo', 'bar', 'baz')

  printDom(node, printNode)
}

const render = (node, text1, text2, text3) => {
  let html = `${text1}`
  if (text2 || text3) {
    html += `<p${text3 ? ` data-somedata="${text3}"` : ''}>${text2}</p>`
  }
  node.innerHTML = html
}
