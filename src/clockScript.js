function defaultTime() {
    //Vancouver
    let vancouverElement = document.querySelector("#vancouver");
  
    if (vancouverElement) {
      let vancouverDateElement = vancouverElement.querySelector(".date");
      let vancouverTimeElement = vancouverElement.querySelector(".time");
      let vancouverTime = moment().tz("America/Vancouver");
  
      vancouverDateElement.innerHTML = vancouverTime.format("MMMM     Do YYYY");
      vancouverTimeElement.innerHTML = vancouverTime.format("h:mm:ss A");
    }
  
    //Lisbon
    let lisbonElement = document.querySelector("#lisbon");
  
    if (lisbonElement) {
      let lisbonDateElement = lisbonElement.querySelector(".date");
      let lisbonTimeElement = lisbonElement.querySelector(".time");
      let lisbonTime = moment().tz("Europe/Lisbon");
  
      lisbonDateElement.innerHTML = lisbonTime.format("MMMM     Do YYYY");
      lisbonTimeElement.innerHTML = lisbonTime.format("h:mm:ss A");
    }
    
    //Tokyo
    let tokyoElement = document.querySelector("#tokyo");
  
    if (tokyoElement) {
      let tokyoDateElement = tokyoElement.querySelector(".date");
      let tokyoTimeElement = tokyoElement.querySelector(".time");
      let tokyoTime = moment().tz("Asia/Tokyo");
  
      tokyoDateElement.innerHTML = tokyoTime.format("MMMM     Do YYYY");
      tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss A");
    }
  
    //Honolulu
    let honoluluElement = document.querySelector("#honolulu");
  
    if (honoluluElement) {
      let honoluluDateElement = honoluluElement.querySelector(".date");
      let honoluluTimeElement = honoluluElement.querySelector(".time");
      let honoluluTime = moment().tz("Pacific/Honolulu");
  
      honoluluDateElement.innerHTML = honoluluTime.format("MMMM     Do YYYY");
      honoluluTimeElement.innerHTML = honoluluTime.format("h:mm:ss A");
    }
  
    //Los Angeles
    let losAngelesElement = document.querySelector("#losAngeles");
  
    if (losAngelesElement) {
      let losAngelesDateElement = losAngelesElement.querySelector(".date");
      let losAngelesTimeElement = losAngelesElement.querySelector(".time");
      let losAngelesTime = moment().tz("America/Los_Angeles");
  
      losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM     Do YYYY");
      losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss A");
    }
  
    //New York
    let newYorkElement = document.querySelector("#newYork");
  
    if (newYorkElement) {
      let newYorkDateElement = newYorkElement.querySelector(".date");
      let newYorkTimeElement = newYorkElement.querySelector(".time");
      let newYorkTime = moment().tz("America/New_York");
  
      newYorkDateElement.innerHTML = newYorkTime.format("MMMM     Do YYYY");
      newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss A");
    }
  
    //London
    let londonElement = document.querySelector("#london");
  
    if (londonElement) {
      let londonDateElement = londonElement.querySelector(".date");
      let londonTimeElement = londonElement.querySelector(".time");
      let londonTime = moment().tz("Europe/London");
  
      londonDateElement.innerHTML = londonTime.format("MMMM     Do YYYY");
      londonTimeElement.innerHTML = londonTime.format("h:mm:ss A");
    }
  
    //Johannesburg
    let johannesburgElement = document.querySelector("#johannesburg");
  
    if (johannesburgElement) {
      let johannesburgDateElement = johannesburgElement.querySelector(".date");
      let johannesburgTimeElement = johannesburgElement.querySelector(".time");
      let johannesburgTime = moment().tz("Africa/Johannesburg");
  
      johannesburgDateElement.innerHTML =
        johannesburgTime.format("MMMM     Do YYYY");
      johannesburgTimeElement.innerHTML = johannesburgTime.format("h:mm:ss A");
    }
  
    //Dubai
    let dubaiElement = document.querySelector("#dubai");
  
    if (dubaiElement) {
      let dubaiDateElement = dubaiElement.querySelector(".date");
      let dubaiTimeElement = dubaiElement.querySelector(".time");
      let dubaiTime = moment().tz("Asia/Dubai");
  
      dubaiDateElement.innerHTML = dubaiTime.format("MMMM     Do YYYY");
      dubaiTimeElement.innerHTML = dubaiTime.format("h:mm:ss A");
    }
  
    //Kolkata
    let kolkataElement = document.querySelector("#kolkata");
  
    if (kolkataElement) {
      let kolkataDateElement = kolkataElement.querySelector(".date");
      let kolkataTimeElement = kolkataElement.querySelector(".time");
      let kolkataTime = moment().tz("Asia/Kolkata");
  
      kolkataDateElement.innerHTML = kolkataTime.format("MMMM     Do YYYY");
      kolkataTimeElement.innerHTML = kolkataTime.format("h:mm:ss A");
    }
  
    //Hong Kong
    let hongKongElement = document.querySelector("#hongKong");
  
    if (hongKongElement) {
      let hongKongDateElement = hongKongElement.querySelector(".date");
      let hongKongTimeElement = hongKongElement.querySelector(".time");
      let hongKongTime = moment().tz("Asia/Hong_Kong");
  
      hongKongDateElement.innerHTML = hongKongTime.format("MMMM     Do YYYY");
      hongKongTimeElement.innerHTML = hongKongTime.format("h:mm:ss A");
    }
  
    //Auckland
    let aucklandElement = document.querySelector("#auckland");
  
    if (aucklandElement) {
      let aucklandDateElement = aucklandElement.querySelector(".date");
      letaucklandTimeElement = aucklandElement.querySelector(".time");
      let aucklandTime = moment().tz("Pacific/Auckland");
  
      aucklandDateElement.innerHTML = aucklandTime.format("MMMM     Do YYYY");
      aucklandTimeElement.innerHTML = aucklandTime.format("h:mm:ss A");
    }
  }
  
  function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city" id=${cityName.toLowerCase()}>
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} ${cityTime.format(
      "A"
    )}</div>
    </div>
    `;
  }
  
  defaultTime();
  setInterval(defaultTime, 1000);
  
  let citiesSelectElement = document.querySelector("#cityTime");
  citiesSelectElement.addEventListener("change", updateCity);