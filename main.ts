basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    . # . # .
    . . # . .
    `)
I2C_LCD1602.LcdInit(0)
I2C_LCD1602.BacklightOff()
basic.pause(500)
I2C_LCD1602.BacklightOn()
I2C_LCD1602.ShowString("Hallo", 0, 0)
I2C_LCD1602.ShowString("Leo", 0, 1)
basic.pause(2000)
I2C_LCD1602.clear()
basic.forever(function () {
    I2C_LCD1602.BacklightOn()
    I2C_LCD1602.ShowString("Party", 0, 0)
    I2C_LCD1602.ShowString("Beim wohnwagen", 0, 1)
    basic.pause(2000)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("In ", 0, 0)
    I2C_LCD1602.ShowString("Heart Lake City", 0, 1)
    basic.pause(2000)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Mit Musik!", 0, 0)
    I2C_LCD1602.ShowString(":) :) :)", 0, 1)
    basic.pause(2000)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Eintrittsgeld:2€", 0, 0)
    I2C_LCD1602.ShowString("", 0, 1)
    basic.pause(2000)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Getraenke und", 0, 0)
    I2C_LCD1602.ShowString("Essen:5€ 1stk.", 0, 1)
    basic.pause(2000)
    I2C_LCD1602.clear()
})
