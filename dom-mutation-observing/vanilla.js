import { printDom, sleep } from './helpers.js'

export const vanillaMutations = async (node, printNode) => {
  // Alter text node
  node.textContent = 'foo'

  printDom(node, printNode)
  await sleep()

  // Add node
  const paragraph = document.createElement('p')
  paragraph.textContent = 'bar'
  node.appendChild(paragraph)

  printDom(node, printNode)
  await sleep()

  // Add attribute
  paragraph.dataset.somedata = 'quax'

  printDom(node, printNode)
  await sleep()

  // Change attribute
  paragraph.dataset.somedata = 'baz'

  printDom(node, printNode)
}