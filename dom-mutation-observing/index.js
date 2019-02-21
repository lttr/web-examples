import { report } from './report.js'
import { vanillaMutations } from './vanilla.js'
import { innerHTMLMutations } from './innerhtml.js'
import { hyperHTMLBindMutations } from './hyperhtml.js'
import { hyperHTMLWireMutations } from './wired.js'
import { hyperHTMLComponentMutations } from './hypercomponent.js'

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true }

const renderingTypes = [
  'vanilla',
  'innerHTML',
  'hyperHTML-bind',
  'hyperHTML-wire',
  'hyperHTML-component',
]

const renderingFunctions = {
  'vanilla': vanillaMutations,
  'innerHTML': innerHTMLMutations,
  'hyperHTML-bind': hyperHTMLBindMutations,
  'hyperHTML-wire': hyperHTMLWireMutations,
  'hyperHTML-component': hyperHTMLComponentMutations,
}

const main = document.querySelector('main')
main.innerHTML = renderingTypes
  .map(
    type => `
      <h2 id="${type}-heading">${type}</h2>
      <div id="${type}-node"></div>
      <pre id="${type}-print"></pre>
      <h3>mutations</h3>
      <div id="${type}-log"></div>
    `
  )
  .join('\n')

renderingTypes.forEach(type => {
  // Node whare logs will take place
  const logNode = document.getElementById(`${type}-log`)

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(mutationList => {
    report(logNode, mutationList)
  })

  // Select the node that will be observed for mutations
  const node = document.getElementById(`${type}-node`)

  // Select the node that will be used to print DOM structure
  const printNode = document.getElementById(`${type}-print`)

  // Start observing the target node for configured mutations
  observer.observe(node, config)
  renderingFunctions[type](node, printNode)
})
