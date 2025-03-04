radio.onReceivedString(function (receivedString) {
    let recivedNumber = 0
    led.plotBarGraph(
    recivedNumber,
    255
    )
})
radio.setGroup(120)
basic.forever(function () {
    radio.sendNumber(input.lightLevel())
    basic.showIcon(IconNames.Ghost)
})
