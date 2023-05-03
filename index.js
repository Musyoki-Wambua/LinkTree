const shareButtons =  document.querySelectorAll(".tile-share-button")
console.log(shareButtons)

async function copyText (event) {
    event.preventDefault ()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link )

    }catch (error) {
        console.log(error)
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))