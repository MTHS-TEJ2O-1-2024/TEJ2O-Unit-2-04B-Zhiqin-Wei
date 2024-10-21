/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by:Daly Wei 
 * Created on: oct 2024
 * This program from get the temperature
*/

basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    let temp = input.temperature() 
    basic.clearScreen() 
    basic.showString(temp + " C") 
})

