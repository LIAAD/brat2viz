$(document).ready(function() {

    $("input[name='select_vis']").click(formsSubmit);
    $("input[name='select_drs']").click(formsSubmit);

    function formsSubmit() {
        document.getElementById("drs-form").submit();
        document.getElementById("vis-form").submit();
    }

});
