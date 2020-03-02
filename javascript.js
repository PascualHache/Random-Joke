$(document).ready(function () {
    $('#ask').click(function (e) {
        e.preventDefault();
        $('#listaEmpleados').html('');
        $.getJSON('http://api.icndb.com/jokes/random', function (data) {
            console.log(data);
            $('#joke_label').html('<q>'+data.value.joke+'</q>');
        });
    });
    $('#ask2').click(function (e) {
        e.preventDefault();
        $('#listaEmpleados').html('');
        $.getJSON('http://api.icndb.com/jokes/random', function (data) {
            console.log(data);
            $('#joke_label').html('<q>'+data.value.joke+'</q>');
        });
    });
});