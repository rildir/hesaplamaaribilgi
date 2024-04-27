function handleFormSubmit(formId, calculationFunction, unit) {
  document.getElementById(formId).addEventListener('submit', function (event) {
    event.preventDefault(); 

    var inputs = event.target.querySelectorAll('input');
    var inputValues = Array.from(inputs).map(input => parseFloat(input.value));

    var result = calculationFunction(...inputValues);

    var resultElement = document.getElementById('resultMatematikBody');
    resultElement.innerHTML = '<p>Sonuç: ' + result.toFixed(2) + ' ' + unit + '</p>'; 

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function calculateArea(...args) {
  return args.reduce((acc, val) => acc * val, 1);
}

function calculateTriangleArea(base, height) {
  return (base * height) / 2;
}

function calculatePerimeter(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

function convertInchToCm(lengthInInches) {
  return lengthInInches * 2.54;
}

function convertCmToInch(lengthInCm) {
  return lengthInCm / 2.54;
}

function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    var result = 1;
    for (var i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }
}

function mileToKilometer(mile) {
  return mile * 1.60934;
}

function kilometerToMile(kilometer) {
  return kilometer / 1.60934;
}

handleFormSubmit('ucgenAlanForm', calculateTriangleArea, 'cm²'); 
handleFormSubmit('dikdortgenKareAlanForm', calculateArea, 'cm²');
handleFormSubmit('daireAlanForm', radius => Math.PI * radius ** 2, 'cm²');
handleFormSubmit('ucgenCevresiForm', calculatePerimeter, 'cm');
handleFormSubmit('dikdortgenCevresiForm', (...args) => 2 * calculatePerimeter(...args), 'cm');
handleFormSubmit('daireCevresiForm', radius => 2 * Math.PI * radius, '');
handleFormSubmit('inchToCmForm', convertInchToCm, 'cm');
handleFormSubmit('cmToInchForm', convertCmToInch, 'inç');
handleFormSubmit('faktoriyelForm', calculateFactorial, '');
handleFormSubmit('mileToKmForm', mileToKilometer, 'kilometre');
handleFormSubmit('kmToMileForm', kilometerToMile, 'mil');
handleFormSubmit('oranHesaplamaForm', (sayi, oran) => (sayi / 100) * oran, '');
handleFormSubmit('dereceToRadyanForm', derece => (derece * Math.PI) / 180, 'radyan');
handleFormSubmit('megapaskalToKGFForm', megapaskal => megapaskal * 10.1972, 'kgf/cm²');
