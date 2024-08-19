let angulo = 0
// Calibrar la brújula al inicio
input.calibrateCompass()
// Iniciar la ejecución continua de la función on_forever
basic.forever(function () {
    // Obtener el ángulo de la brújula
    angulo = input.compassHeading()
    // Mostrar la dirección cardinal según el ángulo
    if (angulo < 45 || angulo > 315) {
        basic.showString("N")
    } else if (angulo < 135) {
        basic.showString("E")
    } else if (angulo < 225) {
        basic.showString("S")
    } else {
        basic.showString("O")
    }
})
