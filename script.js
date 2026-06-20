const searchBtn = document.getElementById('search-button');
const input = document.getElementById('input-text');

const cityName = document.getElementById('city-name');
const cityTemp = document.getElementById('city-temp');
const cityTime = document.getElementById('city-time');

async function getData(cityName){
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=024229b2a5ba4def8e2103317262005&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}

searchBtn.addEventListener('click', async () => {
    const value = input.value;  
    const result = await getData(value);
    cityName.innerText = `${result.location.name} ${result.location.region} ${result.location.country}`
    cityTemp.innerText =  result.current.feelslike_c
    cityTime.innerText =  result.location.localtime;
    console.log(result)
});
