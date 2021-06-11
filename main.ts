radio.onReceivedString(function (receivedString) {
    let received_number = 0
    basic.showNumber(received_number)
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(input.acceleration(Dimension.Y))
})
