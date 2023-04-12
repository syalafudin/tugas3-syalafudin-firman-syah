function search() {
	var country = document.getElementById("country").value;
	fetch("https://covid-193.p.rapidapi.com/statistics?country=" + country, {
		"method": "GET",
		"headers": {
			//rapidapi-key d893d5d79amsh41bbd7806256bb2p1b221djsnc6135b29e386
			"x-rapidapi-key": "",
			"x-rapidapi-host": "covid-193.p.rapidapi.com"
		}
	})
	.then(response => response.json())
	.then(data => {
		if (data.results == 0) {
            alert("Negara tidak ditemukan!");
            return;
        }
		var statistics = data.response[0];
		document.getElementById("active").innerHTML = statistics.cases.active;
		document.getElementById("new").innerHTML = statistics.cases.new;
		document.getElementById("recovered").innerHTML = statistics.cases.recovered;
		document.getElementById("total").innerHTML = statistics.cases.total;
		document.getElementById("deaths").innerHTML = statistics.deaths.total;
		document.getElementById("tests").innerHTML = statistics.tests.total;
	})
	.catch(err => {
		console.error(err);
	});
}