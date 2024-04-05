joystickbit.initJoystickBit()
radio.setGroup(100)
basic.forever(function () {
    radio.sendValue("x", joystickbit.getRockerValue(joystickbit.rockerType.X))
    radio.sendValue("y", joystickbit.getRockerValue(joystickbit.rockerType.Y))
})
