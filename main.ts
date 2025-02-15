basic.forever(function () {
    if (input.lightLevel() > 200) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
