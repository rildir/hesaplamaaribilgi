function pxToRem(pxValue, baseFontSizePx = 16) {
  return pxValue / baseFontSizePx + 'rem';
}

function gbToTb(gb) {
  return gb / 1024;
}

function tbToPb(tb) {
  return tb / 1024;
}

document.getElementById('pxToRemForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var pxValue = parseInt(document.getElementById('pxInput').value);
  var remValue = pxToRem(pxValue);

  document.getElementById('resultYazilimBody').innerHTML = '<p>' + pxValue + 'px = ' + remValue + '</p>';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('gbToTbForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var gb = parseFloat(document.getElementById('gbInput').value);
  var tb = gbToTb(gb);
  var resultMessage = '<p>' + gb + ' GB = ' + tb.toFixed(2) + ' TB</p>';

  document.getElementById('resultYazilimBody').innerHTML = resultMessage;
  $('#resultModal').modal('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('tbToPbForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var tbInput = parseFloat(document.getElementById('tbInput').value);
  var pbOutput = tbToPb(tbInput);
  var resultMessage = '<p>' + tbInput + ' TB = ' + pbOutput + ' PB</p>';

  document.getElementById('resultYazilimBody').innerHTML = resultMessage;
  $('#resultModal').modal('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
