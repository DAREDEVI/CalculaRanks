function CalculaRankeadas(vitorias,derrotas){
    let saldo=Vitorias-derrotas;
    let niveis=["ferro","bronze","prata","ouro","pratina","diamante","imortal"];
    let nivel niveis=[0];
    let passo=10;
    for(let i =1;i<niveis.length; i++){
        if(vitorias>=passo*i){
            nivel=niveis[i];
        }
    }
    return [nivel,saldo];
}
let vitorias=35
let derrotas=20
let resultado=
CalculaRankeadas(vitorias,derrotas);
console.log "nivel;"+resultado[0];