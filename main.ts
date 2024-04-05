joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.up, function () {
    radio.sendString("left-off")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendString("right-on")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.up, function () {
    radio.sendString("right-off")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendString("left-on")
})
joystickbit.initJoystickBit()
radio.setGroup(100)
basic.forever(function () {
    radio.sendValue("x", joystickbit.getRockerValue(joystickbit.rockerType.X))
    radio.sendValue("y", joystickbit.getRockerValue(joystickbit.rockerType.Y))
    basic.pause(100)
})
