function 위험 () {
    // (100+100)*5ms=1초
    for (let index = 0; index < 5; index++) {
        pins.analogWritePin(AnalogPin.P0, 50)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P0, 0)
        basic.pause(100)
    }
}
function 조도_거리분류 () {
    if (input.lightLevel() > 30) {
        안전()
    }
    if (15 < input.lightLevel() && input.lightLevel() <= 30) {
        경고()
    }
    if (input.lightLevel() <= 15) {
        위험()
    }
}
function 안전 () {
    pins.analogWritePin(AnalogPin.P0, 0)
    // 조도 거리분류 함수는 동작하는 데 1초가 걸린다.
    basic.pause(1000)
}
function 경고 () {
    pins.analogWritePin(AnalogPin.P0, 0)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P0, 50)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P0, 0)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P0, 50)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P0, 50)
    // 200ms 총 5회=1초
    basic.pause(200)
}
basic.forever(function () {
    basic.showNumber(input.lightLevel())
    조도_거리분류()
})
