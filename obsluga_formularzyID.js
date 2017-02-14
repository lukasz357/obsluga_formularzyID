function sprawdz () {
	console.log("sprawdz");
	var nazwa = document.getElementById("nazwa").value;
	var rodzaje = document.getElementsByName("rodzaj");

	var wybranyRodzaj;
	for (var i = 0; i < rodzaje.length; ++i) {
		if (rodzaje[i].checked) {
			wybranyRodzaj = rodzaje[i].value;
		}
	}

	var rok = document.getElementById("rok").value;
	var miesiac = document.getElementById("mc").value;
	var warianty = document.getElementsByName("wariant");

	var wybraneWarianty = [];
	var kosztWariantow = 0;
	for (var i = 0; i < warianty.length; ++i) {
		if (warianty[i].checked) {
			wybraneWarianty.push(warianty[i]);
			kosztWariantow += parseFloat(warianty[i].value);
		}
	}

	var uwagi = document.getElementById("uwagi").value;

	document.getElementById("wynzam").innerText = nazwa;
	document.getElementById("wynrodz").innerText = wybranyRodzaj;
	document.getElementById("wynrokmc").innerText = rok + " " + miesiac;
	document.getElementById("wynoplaty").innerText = kosztWariantow;
	document.getElementById("wynuwagi").innerText = uwagi;
}