function Checkbox() {
    let $checkbox = $(`<input type='checkbox'>`);
    $checkbox.click(() => {
        let $par = $checkbox.parent('.div-style-task');
        let checked = $checkbox.is(':checked');

        if(checked)
            $par.addClass('strike-text');
        else
            $par.removeClass('strike-text');
    });

    return $checkbox;
}


function Task(taskName) {
    let $div = $(`<div class='div-style-task'></div>`);
    let $checkbox = Checkbox();

    $div.append($checkbox);
    $div.append(taskName);

    return $div;
};

export {Task};