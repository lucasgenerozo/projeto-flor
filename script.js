const btnTamanho = document.getElementsByClassName("btnTamanho");
let fonte = 16;

for (el of btnTamanho) {
    el.addEventListener('click', (e) => {
        if(e.target.id == "aumenta") {
            muda("+");
        } else {
            muda("-");
        }
    })
    el.addEventListener('keydown', (e) => {
        if (e.keycode == 13) {
            if(e.target.id == "aumenta") {
                muda("+");
            } else {
                muda("-");
            }
        }
    })
}

function muda(tipo) {

    if (tipo == "+" && fonte < 100) {
        fonte += 2; 
    } else if (tipo == "-" && fonte > 6) {
        fonte -= 2;
    }
        document.body.style.fontSize = `${fonte}px`
}