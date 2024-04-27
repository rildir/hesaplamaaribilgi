document
  .getElementById('creditCardForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    var balance = parseFloat(document.getElementById('balance').value)
    var limit = parseFloat(document.getElementById('limit').value)
    var minimumPayment = calculateMinimumPayment(balance, limit)
    var modalContent =
      '<p>Asgari Ödeme Tutarı: ' + minimumPayment.toFixed(2) + ' TL</p>'
    document.getElementById('resultBody').innerHTML = modalContent

    $('#resultModal').modal('show')
  })

function calculateMinimumPayment(balance, limit) {
  var minimumPaymentPercentage = limit >= 25000 ? 0.4 : 0.2
  var minimumPayment = Math.max(balance * minimumPaymentPercentage, 25) // Minimum ödeme tutarı $25 olmalı

  return minimumPayment
}

$(document).ready(function() {
  $('#ibanControlInput').mask('TR00 0000 0000 0000 0000 0000 00', {
    placeholder: '____ ____ ____ ____ ____ ____ __'
  });
});
function ibanNumarasiKontrolEtme(input) {
  var tr = 26;
  var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, '');
  var code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/);
  var sayi;

  if (!code || iban.length !== tr) {
    return false;
  }
  
  sayi = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
    return letter.charCodeAt(0) - 55;
  });

  return kontrol(sayi) === 1;
}

function kontrol(string) {
  var checksum = string.slice(0, 2);
  for (var offset = 2; offset < string.length; offset += 7) {
    var fragment = String(checksum) + string.substring(offset, offset + 7);
    checksum = parseInt(fragment, 10) % 97;
  }
  return checksum;
}

document.getElementById("ibanControlForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var ibanInput = document.getElementById("ibanControlInput").value;
  var isValid = ibanNumarasiKontrolEtme(ibanInput);

  var resultElement = document.getElementById("resultBody");
  if (isValid) {
    resultElement.innerHTML = "<p>IBAN <span style='color: green; font-weight: bold'>geçerlidir</span>: " + ibanInput + "</p>";
  } else {
    resultElement.innerHTML = "<p>IBAN <span style='color: red; font-weight: bold'>geçerli değildir</span>: " + ibanInput + "</p>";
  }

  $('#resultModal').modal('show'); 
});

