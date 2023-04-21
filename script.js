// TAMANHO DA FONTE
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


//VER MAIS/MENOS FLORES
const btnVerMais = document.getElementById("btnVerMais");
const linhaSaibaMais = document.getElementsByClassName("verMais");
let visible = false;

//verifica o estado do elemento, e muda pro contrario
//aplicando a todos elementos daclasse "verMais"
function show() {
    const txts = ["Ver mais", "Ver menos"]
    let state;
    
    if (!visible) {
        state = "normal";
    } else {
        state = "hide"
    }

    visible = !visible;
    for (el of linhaSaibaMais) {
        el.classList = `verMais ${state}`
    }

    //aqui eu to me aproveitando e muito do fato do js interpretar verdadeiro como 1 e falso como 0
    btnVerMais.value = txts[Number(visible)];

    window.scrollTo(linhaSaibaMais[1]);
}

btnVerMais.addEventListener('click', () => {
    show();
});


//TELA DE COMPRA


const btnFecha = document.getElementById("btnFecha");
const scrCompra = document.getElementById("scr-compra");
const btnsFlor = document.getElementsByClassName("card");

function openScr() {
    scrCompra.style.display = 'flex'
}

for (el of btnsFlor) {
    el.addEventListener('click', () => {
        openScr();
    })
}

btnFecha.addEventListener('click', () => {
    scrCompra.style.display = 'none'
})


//aumentar quantidade
const qtd = document.getElementById("qntProd");
const btnQtds = document.getElementsByClassName("btnQtds");
let qntProd = 0;

function alterQtd(tipo) {
    if (tipo == 0) {
        qntProd == 0 ? null : qntProd--;
    } else {
        qntProd++;
    }
    qtd.innerHTML = qntProd;
}

//btn de menos
for (let i = 0; i < 2; i++) {
    btnQtds[i].addEventListener('click', () => {
        alterQtd(i)
    })
}

