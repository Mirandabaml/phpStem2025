function calcula_() {
    let consumoDiario = 13073; 
    let diasAutonomia = 2;
    let profundidadDescarga = 0.80;
    let voltajeSistema = 48;

    // Fórmula
    let capacidadTotal = (consumoDiario * diasAutonomia * 1.15) / (profundidadDescarga * voltajeSistema);

    // Mostrar resultado con 2 decimales
    document.getElementById("resultadoA").innerHTML = 
        "Capacidad Total de Baterías: " + capacidadTotal.toFixed(2) + " Ah";
}
