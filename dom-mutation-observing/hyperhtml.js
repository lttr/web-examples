import { printDom, sleep } from './helpers.js'

const { bind } = hyperHTML

export const hyperHTMLBindMutations = async (node, printNode) => {
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
  await sleep()

  render(node, 'foo', 'bar', 'baz', { text: 'texttexttext' })

  printDom(node, printNode)
  await sleep()

  render(node, 'foo', 'bar', 'baz', { text: 'heyyy' })

  printDom(node, printNode)
}

const render = (node, text1, text2, text3, model) => {
  bind(node)`
    ${text1}
    <p data-somedata="${text3}">
      ${text2}
      <span>${model ? model.text : ''}</span>
      <span>${model ? model.text : ''}</span>
    </p>
  `
}
