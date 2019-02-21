import { printDom, sleep } from './helpers.js'

const { bind, Component } = hyperHTML

export const hyperHTMLComponentMutations = async (node, printNode) => {
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
      ${MyComponent.for(node, ':1').update(model)}
      ${MyComponent.for(node, ':2').update(model)}
    </p>
  `
}

class MyComponent extends Component {
  constructor() {
    super()
  }

  update(model) {
    this.model = model
    return this.render()
  }

  render() {
    return this.html`
      <span>${this.model ? this.model.text : ''}</span>
    `
  }
}
