var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
    	$('<table>').append($('<tr>')).append($('<td>').text('Kraj ')).append($('<td>').text(item.name))
    	.append($('<tr>')).append($('<td>').text('Pełna nazwa ')).append($('<td>').text(item.altSpellings))
    	.append($('<tr>')).append($('<td>').text('Nazwa regionu ')).append($('<td>').text(item.subregion))
    	.append($('<tr>')).append($('<td>').text('Waluta ')).append($('<td>').text(item.currencies))
    	.append($('<tr>')).append($('<td>').text('Zajmowana powierzchnia ')).append($('<td>').text(item.area))
    	.append($('<tr>')).append($('<td>').text('Liczba mieszkańców ')).append($('<td>').text(item.population))
        .appendTo(countriesList);
    });
}