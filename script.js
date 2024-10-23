const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inword = document.getElementById("inp-word").value;
    fetch(`${url}${inword}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
                <div class="word">
                    <h3>${inword}</h3>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>${data[0].phonetics[0] ? data[0].phonetics[0].text : ''}</p>
                </div>
                <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
                <p class="word-example">${data[0].meanings[0].definitions[0].example || 'No example available.'}</p>
            `;
        })
        .catch((error) => {
            result.innerHTML = `<p>Word not found. Please try again.</p>`;
            console.error('Error:', error);
        });
});
