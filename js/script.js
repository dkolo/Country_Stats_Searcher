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
    	$('<table>').addClass( "table table-bordered table-hover" ).append($('<tr>').addClass( "table-primary" ).append($('<td>').text('Country ')).append($('<td>').text(item.name)))
    	.append($('<tr>').append($('<td>').text('Official name ')).append($('<td>').text(item.altSpellings[2])))
    	.append($('<tr>').append($('<td>').text('Region ')).append($('<td>').text(item.subregion)))
    	.append($('<tr>').append($('<td>').text('Currency ')).append($('<td>').text(item.currencies)))
    	.append($('<tr>').append($('<td>').text('Area (in square kilometres) ')).append($('<td>').text(item.area)))
    	.append($('<tr>').append($('<td>').text('Population ')).append($('<td>').text(item.population)))
        .appendTo(countriesList);
    });
}