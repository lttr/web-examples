// init
const divElementString = 'div'
const insideParagraphJquery = '<p id="inside-jquery">inside</p>'
const insideParagraphVanilla = '<p id="inside-vanilla">inside</p>'
const afterBeginParagraphJquery = '<p id="first-jquery">after begin</p>'
const afterBeginParagraphVanilla = '<p id="first-vanilla">after begin</p>'
const beforeBeginParagraph = '<p>before begin</p>'
const beforeEndParagraph = '<p>before end</p>'
const afterEndParagraphElement = document.createElement('p')
afterEndParagraphElement.textContent = 'after end'

//
// jQuery
//

// get node
const jq = $('main.jquery')

// inject element
const divJqueryElement = $(`<${divElementString}>`)
jq.append(divJqueryElement)

// inject html
divJqueryElement.append(insideParagraphJquery)
divJqueryElement.before(beforeBeginParagraph)
divJqueryElement.prepend(afterBeginParagraphJquery)
divJqueryElement.append(beforeEndParagraph)
divJqueryElement.after($(afterEndParagraphElement).clone())

// move node
divJqueryElement.prepend($('#inside-jquery'))

// remove node
divJqueryElement.prev().remove()

//
// Vanilla
//

// get node
const va = document.querySelector('main.vanilla')

// inject html
const divVanillaElement = document.createElement(divElementString)
va.appendChild(divVanillaElement)

// inject html
divVanillaElement.insertAdjacentHTML('beforeend', insideParagraphVanilla)
divVanillaElement.insertAdjacentHTML('beforebegin', beforeBeginParagraph)
divVanillaElement.insertAdjacentHTML('afterbegin', afterBeginParagraphVanilla)
divVanillaElement.insertAdjacentHTML('beforeend', beforeEndParagraph)
divVanillaElement.insertAdjacentElement(
  'afterend',
  afterEndParagraphElement.cloneNode(true)
)

// move node
divVanillaElement.insertBefore(
  document.querySelector('#inside-vanilla'),
  document.querySelector('#first-vanilla')
)

// remove node
divVanillaElement.parentNode.removeChild(divVanillaElement.previousSibling)

//
// Show html
//

function prettifyNode (xmlDoc) {
  const xsltDoc = new window.DOMParser().parseFromString([
      // describes how we want to modify the XML - indent everything
    '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">',
    '  <xsl:output omit-xml-declaration="yes" indent="yes"/>',
    '    <xsl:template match="node()|@*">',
    '      <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>',
    '    </xsl:template>',
    '</xsl:stylesheet>'
  ].join('\n'), 'application/xml')

  const xsltProcessor = new window.XSLTProcessor()
  xsltProcessor.importStylesheet(xsltDoc)
  const resultDoc = xsltProcessor.transformToDocument(xmlDoc)
  const resultXml = new window.XMLSerializer().serializeToString(resultDoc)
  return resultXml
}

const htmlNodeJquery = document.querySelector('main.jquery')
const prettyHtmlJquery = prettifyNode(htmlNodeJquery)
document.querySelector('code.jquery').textContent = prettyHtmlJquery

const htmlNodeVanilla = document.querySelector('main.vanilla')
const prettyHtmlVanilla = prettifyNode(htmlNodeVanilla)
document.querySelector('code.vanilla').textContent = prettyHtmlVanilla

/* global $ */
