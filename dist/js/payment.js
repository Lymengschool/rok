

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

/*-------------------Data--------------------------*/

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

function fetchData(data, select) {
  fetch(data)
    .then((res) => res.json())
    .then((data) => loadData(data, select))
    .catch((err) => console.log(err));
}

export function loadCountries() {
  const countries = "../json/countries.json";
  const countriesSelect = document.querySelectorAll("#country");
  for (let select of countriesSelect) {
    fetchData(countries, select);
  }
}

//step 3

export function imask() {
  const expirationdate = document.getElementById("exp");
  const ceditcard = document.getElementById("ccn");

  var expirationdate_mask = new IMask(expirationdate, {
    mask: "MM/YY",
    blocks: {
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
      },
      YY: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 99,
      },
    },
  });

  var creditCardMask = new IMask(ceditcard, {
    mask: '0000 0000 0000 0000',
  });
};


