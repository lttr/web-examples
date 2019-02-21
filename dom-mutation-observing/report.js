// Callback function to execute when mutations are observed
export const report = (logNode, mutationList) => {
  mutationList.forEach(mutation => {
    switch (mutation.type) {
      case 'childList':
        reportChildList(logNode, mutation)
        break
      case 'attributes':
        reportAttributes(logNode, mutation)
        break
    }
  })
}

const reportChildList = (logNode, mutation) => {
  const messageNode = document.createElement('div')
  messageNode.innerHTML = `
    <p>
        ${mutation.addedNodes.length} nodes have been added
        ${
          mutation.addedNodes.length > 0
            ? `: <b>${[...mutation.addedNodes]
                  .map(x => x.nodeName.toLowerCase())
                  .join(', ')}</b> | `
            : ''
        }
        ${mutation.removedNodes.length} nodes have been removed
        ${
          mutation.removedNodes.length > 0
            ? `: <b>${[...mutation.removedNodes]
                  .map(x => x.nodeName.toLowerCase())
                  .join(', ')}</b>`
            : ''
        }
    </p>
  `
  logNode.appendChild(messageNode)
}

const reportAttributes = (logNode, mutation) => {
  const messageNode = document.createElement('div')
  messageNode.innerHTML = `
    <p>
        Attribute 
        <b>${mutation.attributeName}</b> of element
        <b>${mutation.target.nodeName}</b> has been changed to 
        <b>${mutation.target.getAttribute(mutation.attributeName)}</b>
    </p>
  `
  logNode.appendChild(messageNode)
}
