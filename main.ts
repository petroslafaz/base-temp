radio.onReceivedNumber(function (receivedNumber) {
    b_temp = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    choose_temp = 0
})
input.onButtonPressed(Button.B, function () {
    choose_temp = 1
})
let a_temp = 0
let choose_temp = 0
let b_temp = 0
radio.setGroup(23)
basic.forever(function () {
    if (choose_temp == 0) {
        basic.showNumber(a_temp)
    } else {
        basic.showNumber(b_temp)
    }
    basic.pause(1000)
})
basic.forever(function () {
    a_temp = input.temperature()
    basic.pause(1000)
})
