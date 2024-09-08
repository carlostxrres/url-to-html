const contentDiv = document.querySelector("body")

const EXAMPLE_KEYS = {
    html: "<h1>My title</h1><p>Hello world!</p>",
    favicon: "https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png",
    title: "Example site",
}
const urlParams = Object
    .entries(EXAMPLE_KEYS)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&")

const EXAMPLE_URL = `${location.origin}?${urlParams}`
const FALLBACK_HTML = ""
    + `<p>No HTML content provided in the query string.</p>`
    + `<p>You can use these parameters in the URL:</p>`
    + `<ul>`
    + /**/`<li><code>html</code>: The HTML to be rendered.</li>`
    + /**/`<li><code>title</code>: The title of the page, shown in the tab on your browser.</li>`
    + /**/`<li><code>favicon</code>: A link to an image for the favicon.</li>`
    + /**/`<li><code>emoji</code>: An emoji as a favicon.</li>`
    + `</ul>`
    + `<p>For instance:</p>`
    + `<pre>?${urlParams}</pre>`
    + `<p>You may also just navigate to <a href="${EXAMPLE_URL}">this example</a>.</p>`


const params = new URLSearchParams(window.location.search)

// Add HTML
const html = params.get('html');
contentDiv.innerHTML = getFinalHtml(html)

// Add title
const title = params.get('title');
if (title) {
    document.title = title
}

// Add favicon by URL
const favicon = params.get('favicon')
if (favicon) {
    const url = decodeURIComponent(favicon)
    addFavicon(url)
}

// Add favicon by emoji
const emoji = params.get('emoji')
if (emoji) {
    const svg = emojiToSvg(emoji)
    const encodedSvg = encodeURIComponent(svg)
    const url = "data:image/svg+xml," + encodedSvg
    addFavicon(url)
}

// Utils
function addFavicon(url) {
    const linkElement = document.createElement("link")
    linkElement.rel = "icon"
    linkElement.href = url
    document.head.appendChild(linkElement)
}

function emojiToSvg(emoji) {
    return ""
        + `<svg`
        + ` xmlns="http://www.w3.org/2000/svg"`
        + ` viewBox="0 0 100 100"`
        + `>`
        + /**/`<text`
        + /**/` y=".9em"`
        + /**/` font-size="90"`
        + /**/`>${emoji}</text>`
        + `</svg>`
}

function getFinalHtml(html) {
    if (!html) {
        return FALLBACK_HTML
    }

    const decodedHtml = decodeURIComponent(html)
    return DOMPurify.sanitize(decodedHtml)
}