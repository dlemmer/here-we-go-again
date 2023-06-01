function sendform() {

    if (document.forms[0].name.value == "") {
        alert('Пожалуйста, введите полную информацию о себе');
        document.mailform.name.focus();
        return false
    }

    // if (document.forms[1].sname.value == "") {
    //     alert('Пожалуйста, введите Ваше имя');
    //     document.mailform.name.focus();
    //     return false
    // }

    // if (document.forms[2].email.value == "") {
    //     alert('Пожалуйста, введите электронный адрес');
    //     document.mailform.email.focus();
    //     return false
    // }

    return true;
}