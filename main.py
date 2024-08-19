# Calibrar la brújula al inicio
input.calibrate_compass()

def on_forever():
    # Obtener el ángulo de la brújula
    angulo = input.compass_heading()
    
    # Mostrar la dirección cardinal según el ángulo
    if angulo < 45 or angulo > 315:
        basic.show_string("N")
    elif angulo < 135:
        basic.show_string("E")
    elif angulo < 225:
        basic.show_string("S")
    else:
        basic.show_string("O")

# Iniciar la ejecución continua de la función on_forever
basic.forever(on_forever)
