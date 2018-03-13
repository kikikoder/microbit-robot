radio.onDataPacketReceived( ({ receivedString }) =>  {
    if (receivedString == "left") {
        bitbot.motor(BBMotor.Left, 0)
        bitbot.motor(BBMotor.Right, 300)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (receivedString == "right") {
        bitbot.motor(BBMotor.Right, 0)
        bitbot.motor(BBMotor.Left, 300)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (receivedString == "forwards") {
        bitbot.motor(BBMotor.All, 300)
        basic.showIcon(IconNames.Sword)
    } else if (receivedString == "backwards") {
        bitbot.motor(BBMotor.All, -300)
        basic.showIcon(IconNames.Diamond)
    } else if (receivedString == "stop") {
        bitbot.motor(BBMotor.All, 0)
    }
})
radio.setGroup(4)
basic.showIcon(IconNames.Yes)
