function getTopNewsHeadlines(){
	var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b76dc8bd10de444eaef004f78614a894";
	$.getJSON(url, function(data) {

		var articles = data.articles;
		var articleHeadlines;

		for (i = 0; i < 4; i++) {
    		var title = articles[i]["title"];

    		if (i == 0){
    			articleHeadlines = "&#8226;" + " " + title + "<br>";
    		} else {
    			articleHeadlines = articleHeadlines + "<br>" + "&#8226;" + " " + title + "<br>";
    		}
		}
		//console.log(articleHeadlines);
		document.getElementById("topleftquad").innerHTML = articleHeadlines;
	});
}

function getAppleNewsHeadlines(){
	var url = "https://newsapi.org/v2/everything?q=apple&from=2019-07-29&to=2019-07-29&sortBy=popularity&apiKey=b76dc8bd10de444eaef004f78614a894";
	$.getJSON(url, function(data) {

		var articles = data.articles;
		var articleHeadlines;

		for (i = 0; i < 6; i++) {
    		var title = articles[i]["title"];

    		if (i == 0){
    			articleHeadlines = "&#8226;" + " " + title + "<br>";
    		} else {
    			articleHeadlines = articleHeadlines + "<br>" + "&#8226;" + " " + title + "<br>";
    		}
		}
		//console.log(articleHeadlines);
		document.getElementById("toprightquad").innerHTML = articleHeadlines;
	});
}