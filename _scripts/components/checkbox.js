$('#checkbox').click(() => {
    const isChecked = $('#checkbox-input').prop("checked");

    if (isChecked) {
        $('#checkbox').prop("class", "checkbox checked");
    } else {
        $('#checkbox').prop("class", "checkbox");
    }

    $('#checkbox-input').prop("checked", !isChecked);
});
