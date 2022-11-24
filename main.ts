servos.P0.setRange(60, 150)
let nombre = 0
let etat_actuel = 0
let etat_passé = 0
basic.forever(function () {
    etat_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (etat_actuel == 0) {
        servos.P0.setAngle(150)
    } else if (etat_actuel == 1) {
        servos.P0.setAngle(60)
        basic.pause(2000)
        servos.P0.setAngle(150)
    }
})
