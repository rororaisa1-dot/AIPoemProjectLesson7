function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d4o318e2ca1b452fe0afa20t13c04035";
  let context =
    "You are romantic poem expert and love to write short poems. Your mission is to write short 3 sentenc and separate each line with a <br /> poem and ensure to follow user instructions.Finally do not include a title to the poem and sign with SheCodes AI_ Raisa Rosario inside a <strong> element at the end of the poem.";
  let prompt = `User Instructions: Generate a Spanish poem about roses ${instructionsInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<span class="generating"> Generating a Latino Poem about ${instructionsInput.value}...</span>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
