var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  // the default value for minimumFractionDigits depends on the currency
  // and is usually already 2
});

function getDJIAPrice(){
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=DJIA&apikey=4PBD1Q8ZQYY3PA47";
    $.getJSON(url, function(data) {

      	var DJIAOpenCurrent = Object.values(data['Time Series (Daily)'])[0]["1. open"]
      	var DJIAOpenYesterday = Object.values(data['Time Series (Daily)'])[1]["1. open"]

      	DJIAOpenCurrent = (DJIAOpenCurrent*1).toFixed(2)

      	var changePct = (DJIAOpenCurrent/DJIAOpenYesterday)

    	if (changePct > 1){
      		var DJIACurrentPrice = "<div style='color: #98FB98;'>" + DJIAOpenCurrent + "</div>"
    	} 
    	else {
    		var DJIACurrentPrice = "<div style='color: #FF6464;'>" + DJIAOpenCurrent + "</div>"
    	}

        document.getElementById("spark2").innerHTML = "<br>" + DJIACurrentPrice + '<br>' ; 
    });
}

function getAAPLPrice(){
    var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&apikey=4PBD1Q8ZQYY3PA47";
    $.getJSON(url, function(data) {

      	var AAPLOpenCurrent = Object.values(data['Time Series (Daily)'])[0]["1. open"]
      	var AAPLOpenYesterday = Object.values(data['Time Series (Daily)'])[1]["1. open"]

      	AAPLOpenCurrent = (AAPLOpenCurrent*1).toFixed(2)

      	var changePct = (AAPLOpenCurrent/AAPLOpenYesterday)

    	if (changePct > 1){
      		var APPLCurrentPrice = "<div style='color: #98FB98;'>" + AAPLOpenCurrent + "</div>"
    	} 
    	else {
    		var APPLCurrentPrice = "<div style='color: #FF6464;'>" + AAPLOpenCurrent + "</div>"
    	}

        document.getElementById("spark3").innerHTML = "<br>" + APPLCurrentPrice + '<br>' ; 
    });
}

function getBTCPrice(){
    var url = "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=1";
    $.getJSON(url, function(data) {

		var BTCOpenCurrent = data["Data"][1]["open"];
		var BTCOpenYesterday = data["Data"][0]["open"];

		BTCOpenCurrent = (BTCOpenCurrent*1).toFixed(2)

		var changePct = (BTCOpenCurrent/BTCOpenYesterday)

		if (changePct > 1){
      		var BTCCurrentPrice = "<div style='color: #6DBB33;'>" + BTCOpenCurrent + "</div>"
	    } 
	    else {
	    	var BTCCurrentPrice = "<div style='color: #FF6347;'>" + BTCOpenCurrent + "</div>"
	    }

		document.getElementById("spark4").innerHTML = "<br>" + BTCCurrentPrice + '<br>' ; 
    });
}

