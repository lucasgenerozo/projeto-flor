let fonte = 16

function muda(tipo) {

    if (tipo == "+" && fonte < 100) {
        fonte += 2; 
    } else if (tipo == "-" && fonte > 6) {
        fonte -= 2;
    }
        document.body.style.fontSize = `${fonte}px`
}