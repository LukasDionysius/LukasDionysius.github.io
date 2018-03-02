var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  // the default value for minimumFractionDigits depends on the currency
  // and is usually already 2
});

function getBTCPrice(){
	var url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,USD,EUR";
	$.getJSON(url, function(data) {

		var USD = data["USD"];
		USD = formatter.format(USD);
		console.log(USD);

		document.getElementById("BTCPrice").innerHTML = "BTC: " + USD;
	});
}

function getETHPrice(){
	var url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR";
	$.getJSON(url, function(data) {

		var USD = data["USD"];
		USD = formatter.format(USD);
		console.log(USD);

		document.getElementById("ETHPrice").innerHTML = "ETH: " + USD;
	});
}