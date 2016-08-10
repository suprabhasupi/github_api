function calculate() {
    console.log("ting-ting tinding :P");
    var c1 = 16000;
    var c2 = 16000;
    var c3 = 16000;
    var c4 = 16000;
    var c5 = 16000;
    
    var m1 = 0;
    var m2 = 0;
    var m3 = 0;
    var m4 = 0;
    // m1 = 0;
    // if checked{}

    var m = $('#n3').val() * c3;
    // console.log($('#checkbox03').prop("checked"));
    if ($('#checkbox01').prop("checked") == true) {
    	console.log("1st if")
        var m1 = $('#n1').val() * c1;
    }
    if ($('#checkbox02').prop("checked") == true) {
    	console.log("2nd if")
        var m2 = $('#n2').val() * c2;
    }
    if ($('#checkbox03').prop("checked") == true) {
    	console.log("3rd if")
        var m3 = $('#n4').val() * c4;
    }
    if ($('#checkbox04').prop("checked") == true) {
    	console.log("4th if")
        var m4 = $('#n5').val() * c5;
    }

    var total = m + m1 + m2 + m3 + m4;
    console.log(total);
    $('#total_cost').val(total);
}
// $('.add').on('click',calculate);
$('#checkbox01').change(calculate);
$('#checkbox02').change(calculate);
$('#checkbox03').change(calculate);
$('#checkbox04').change(calculate);
$('#n1').change(calculate);
$('#n2').change(calculate);
$('#n3').change(calculate);
$('#n4').change(calculate);
$('#n5').change(calculate);
