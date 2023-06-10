enum objectKind {
    text = 1, //input:text
    longtext = 2, //textarea
    check = 3, //checkbox
    radio = 4, //radiobutton
    select = 5, //selectbox
    switch = 6, //switch
    dropdown = 7, //dropdown
    date = 8, //datepicker
    time = 9, //time
}

enum dataType {
    question = 1, //질문할때
    info = 2, //인적사항
    denger = 3, //주의사항
    test = 4
}

const $FORM_HISTORYTAKING = $('[name="form-history-taking"]')
console.log($FORM_HISTORYTAKING)
console.log('ㅎㅎ')