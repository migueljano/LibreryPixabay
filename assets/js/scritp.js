// La apikey utilizzata per l'autorizzaione
const apiKey = "wVihUJknuZdtm58zrcmyfqdE8RtnRMO728eM4QhV42phYMh15zaIKiv0";

const URL = "https://api.pexels.com/v1/search?query=[your-query]"

const btnPrimary = document.querySelector("btnPrimary");
const  btnSecondary = document.querySelector ("btnSecondary");

btnPrimary.onclick = () => handlePexelsApi ("cat");
btnSecondary.onclick = () => handlePexelsApi("nature");

const handlePexelsApi = (query) => {
    fetch( URL + query, {
      headers: {
        Authorization: apiKey
      }
    })
}
