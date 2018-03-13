input.onButtonPressed(Button.B, () => {
    radio.sendString("backwards")
    basic.showIcon(IconNames.Pitchfork)
})
input.onButtonPressed(Button.AB, () => {
    radio.sendString("stop")
})
input.onGesture(Gesture.TiltLeft, () => {
    radio.sendString("left")
})
input.onGesture(Gesture.TiltRight, () => {
    radio.sendString("right")
})
input.onButtonPressed(Button.A, () => {
    radio.sendString("forwards")
    basic.showIcon(IconNames.Sword)
})
radio.setGroup(4)
basic.showIcon(IconNames.Yes)
