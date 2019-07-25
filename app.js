window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.degree-section');
    const temperatureSpan = document.querySelector('.degree-section span');

    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition((position)=>{
    //         long = position.coords.longitude;
    //         lat = position.coords.latitude;

    //         const proxy = 'https://cors-anywhere.herokuapp.com/';
    //         // const api = `${proxy}https://api.darksky.net/forecast/855d4005f6e03b1db2e330f5ecffc32e/${lat},${long}`; 

    //         fetch(api).then(response => {
    //             return response.json();
    //         }).then(data => {
    //             console.log(data);     
    //             const {temperature, summary, icon} = data.currently;  
    //             const timezone = data.timezone;

    //             // Se coloca la info de la api  en los elementos
    //             locationTimezone.textContent = timezone;
    //             temperatureDegree.textContent = Math.floor(temperature);
    //             temperatureDescription.textContent = summary;

    //             // Se coloca el icono
    //             setIcon(icon, document.querySelector('.icon'));

    //             // Se cambia la temperatura a celsius/Farenheit

    //             let celsius = (temperature - 32)*(5 / 9);

    //             temperatureSection.addEventListener('click', () => {
    //                 if (temperatureSpan.textContent == 'F') {
    //                     temperatureSpan.textContent = 'C';
    //                     temperatureDegree.textContent = Math.floor(celsius);
    //                 }else{
    //                     temperatureSpan.textContent = 'F';   
    //                     temperatureDegree.textContent = Math.floor(temperature); 
    //                 }
    //             });

    //         })
    //     });           
    // }

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}https://api.darksky.net/forecast/855d4005f6e03b1db2e330f5ecffc32e/19.294261,-99.7012545`;

    fetch(api).then(response => {
        return response.json();
    }).then(data => {
        const { temperature, summary, icon } = data.currently;
        const timezone = data.timezone;

        // Se coloca la info de la api  en los elementos
        temperatureDegree.textContent = Math.floor(temperature);
        temperatureDescription.textContent = summary;

        // Se coloca el icono
        setIcon(icon, document.querySelector('.icon'));

        // Se cambia la temperatura a celsius/Farenheit

        let celsius = (temperature - 32) * (5 / 9);

        temperatureSection.addEventListener('click', () => {
            if (temperatureSpan.textContent == 'F') {
                temperatureSpan.textContent = 'C';
                temperatureDegree.textContent = Math.floor(celsius);
            } else {
                temperatureSpan.textContent = 'F';
                temperatureDegree.textContent = Math.floor(temperature);
            }
        });

    });

function setIcon(icon, iconID) {
    const skycons = new Skycons({ "color": "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
}
});