var sign = true


function draw(btn_class) {

    var btn_value = document.getElementsByClassName(btn_class)
    //    console.log(btn_value)

    var sign_cross = 'X'
    var sign_circle = 'O'

    if (sign == true) {
        btn_value[0].innerHTML = "X"
        btn_value[0].style.color = "red"
        sign = false
        check_winner()

    }
    else {

        btn_value[0].innerHTML = "O"
        btn_value[0].style.color = "green"
        sign = true
        check_winner()
    }

}

function reset(btn_class) {
    var value = document.querySelectorAll('.bt')
    // var value = document.querySelector(btn_class)
    // console.log(value)
    // console.log(value)

    document.getElementById('result').innerHTML = ""
    sign = true

    for (i = 0; i < value.length; i++) {
        // console.log(i)
        // console.log(value[i])
        value[i].innerHTML = ''
    }

}
var value_match = {}

function check_winner() {
    var value = document.querySelectorAll('.bt')
    for (i = 0; i < value.length; i++) {
        value_match[i] = value[i].innerHTML
    }

    check_pattern()


}

function check_pattern() {
    // Row matching 

    if ((value_match[0] == 'X') && (value_match[1] == 'X') && (value_match[2] == "X")) {

        document.getElementById('result').innerHTML = "X is Winner"
    }
    else if ((value_match[0] == "O") && (value_match[1] == "O") && (value_match[2] == "O")) {
        document.getElementById('result').innerHTML = "O is Winner"
    }
    else if ((value_match[3] == 'X') && (value_match[4] == 'X') && (value_match[5] == "X")) {

        document.getElementById('result').innerHTML = "X is Winner"
    }
    else if ((value_match[3] == "O") && (value_match[4] == "O") && (value_match[5] == "O")) {
        document.getElementById('result').innerHTML = "O is Winner"
    }
    else if ((value_match[6] == 'X') && (value_match[7] == 'X') && (value_match[8] == "X")) {

        document.getElementById('result').innerHTML = "X is Winner"
    }
    else if ((value_match[6] == "O") && (value_match[7] == "O") && (value_match[8] == "O")) {
        document.getElementById('result').innerHTML = "O is Winner"
    }
    else if ((value_match[0] == 'X') && (value_match[3] == 'X') && (value_match[6] == "X")) {

        document.getElementById('result').innerHTML = "X is Winner"
    }
    else if ((value_match[0] == "O") && (value_match[3] == "O") && (value_match[6] == "O")) {
        document.getElementById('result').innerHTML = "O is Winner"
    }
    else if ((value_match[1] == 'X') && (value_match[4] == 'X') && (value_match[7] == "X")) {

        document.getElementById('result').innerHTML = "X is Winner"
    }
    else if ((value_match[1] == "O") && (value_match[4] == "O") && (value_match[7] == "O")) {
        document.getElementById('result').innerHTML = "O is Winner"
    }
    else if ((value_match[2] == 'X') && (value_match[5] == 'X') && (value_match[8] == "X")) {

        document.getElementById('result').innerHTML = "X is Winner"
    }
    else if ((value_match[2] == "O") && (value_match[5] == "O") && (value_match[8] == "O")) {
        document.getElementById('result').innerHTML = "O is Winner"
    }
    else if ((value_match[0] == 'X') && (value_match[4] == 'X') && (value_match[8] == "X")) {

        document.getElementById('result').innerHTML = "X is Winner"
    }
    else if ((value_match[0] == "O") && (value_match[4] == "O") && (value_match[8] == "O")) {
        document.getElementById('result').innerHTML = "O is Winner"
    }
    else if ((value_match[2] == 'X') && (value_match[4] == 'X') && (value_match[6] == "X")) {

        document.getElementById('result').innerHTML = "X is Winner"
    }
    else if ((value_match[2] == "O") && (value_match[4] == "O") && (value_match[6] == "O")) {
        document.getElementById('result').innerHTML = "O is Winner"
    }
}