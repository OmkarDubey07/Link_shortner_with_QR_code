const userInput = document.querySelector(".linkInput");
const createBtn = document.querySelector(".createBtn");
const showResult = document.querySelector(".resultLink p");
const copyBtn = document.querySelector(".copyBtn img");

createBtn.addEventListener("click", async () => {
  const originalURL = userInput.value;
  const apiKey = "b2c29dd748mshed267a698a17993p163902jsnb8839ae61798";

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
    },
    body: new URLSearchParams({
      url: originalURL,
    }),
  };

  try {
    const response = await fetch(
      "https://url-shortener-service.p.rapidapi.com/shorten",
      options
    );
    const data = await response.json();
    const shortenedUrl = data.result_url;
    showResult.textContent = shortenedUrl;
  } catch (error) {
    console.error("An error occurred:", error);
    showResult.textContent = "Failed to shorten URL. Please try again.";
  }
});
