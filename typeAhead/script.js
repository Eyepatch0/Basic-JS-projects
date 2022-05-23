const indianCityData ='https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json'
let cities = [];
fetch(indianCityData)
  .then((blob) => blob.json())
  .then((data) => (cities = data));

function findMatches(wordToMatch, cities) {
  return Object.values(cities).filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.name.match(regex) || place.state.match(regex);
  });
}
function displayMatches(){
    const matchArray =  findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex1 = new RegExp(this.value, 'gi');
        const cityName = place.name.replace(regex1,`<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex1,`<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName},${stateName}</span>
            </li>
        `
    }).join('');
    suggestions.innerHTML = html;
}
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
