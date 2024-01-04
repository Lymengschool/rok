/* ----------------------Change Step----------------------- */
export const goToStep = (targetStep) => {
 
  const targetStepElement = document.querySelector(`.${signup.step}${targetStep}`);
  
  // Hide all steps
  document.querySelectorAll(`.step${step}`).forEach((step) => {
    
    step.classList.remove(active);
  });
  
  // Display the target step
  targetStepElement.classList.add(active);
};

/*---------------------Step1------------------------*/
export function visibility() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

/*---------------------Step2------------------------*/
export function openPopup() {
  document.getElementById("popup-container").style.display = "block";
}

export function closePopup() {
  document.getElementById("popup-container").style.display = "none";
}

/*---------------------Phone------------------------*/
function initializePhoneInput(phoneInputField) {
  function getIp(callback) {
    fetch("https://ipinfo.io/json?token=7a5d89bb2c6acd", {
      headers: { Accept: "application/json" },
    })
      .then((resp) => resp.json())
      .catch(() => {
        console.log("Error fetching IP address");
        return {
          country: "kh",
        };
      })
      .then((resp) => callback(resp.country));
  }

  window.intlTelInput(phoneInputField, {
    initialCountry: "auto",
    geoIpLookup: getIp,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });
}

export function loadPhoneInput() {
  const phoneInputField = document.querySelectorAll("#phone");
  for (let input of phoneInputField) {
    initializePhoneInput(input);
  }
}

/*---------------------Date------------------------*/
function loadData(data, select) {
  while (select.firstChild) {
    select.removeChild(select.firstChild);
  }

  for (let row of data) {
    let opt = document.createElement("option");
    opt.text = row.text;
    opt.value = row.value;

    select.options.add(opt);
  }
}

export function loadDays() {
  let days = [];
  for (let i = 31; i > 0; i--) {
    days.push({ text: i, value: i });
  }
  const daysSelect = document.querySelector("#days");
  loadData(days, daysSelect);
}

function fetchData(data, select) {
  fetch(data)
    .then((res) => res.json())
    .then((data) => loadData(data, select))
    .catch((err) => console.log(err));
}

export function loadMonths() {
  const months = "../json/months.json";
  const monthsSelect = document.querySelector("#months");
  fetchData(months, monthsSelect);
}

export function loadYears() {
  let currentYear = new Date().getFullYear();
  let years = [];
  for (let i = currentYear; i > 1900; i--) {
    years.push({ text: i, value: i });
  }
  const yearsSelect = document.querySelector("#years");
  if (yearsSelect) {
    loadData(years, yearsSelect);
  }
}

/*---------------------Countries------------------------*/
export function loadCountries() {
  const countries = "../json/countries.json";
  const countriesSelect = document.querySelectorAll("#countries");
  for (let select of countriesSelect) {
    fetchData(countries, select);
  }
}
