document.addEventListener("DOMContentLoaded", function () {
    let quoteText = document.getElementById("quote");
    let authorText = document.getElementById("author");
    let newquotebtn = document.getElementById("newquote");

async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json()

        quoteText.textContent = `"${data.content}"`;
        authorText.textContent = `~${data.author}`
    }
    catch (error){
        console.log(error);
        quoteText.textContent= "Failed to Load text Content";
        authorText.textContent= "4141"
    }
}
newquotebtn.addEventListener("click", fetchQuote)
fetchQuote();
})