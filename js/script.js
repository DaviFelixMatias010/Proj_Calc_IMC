class tipoImc{
    constructor(pBaixo,pIdeal,pSobrepeso,Obesidade){
        this.pBaixo = pBaixo
        this.pIdeal = pIdeal
        this.pSobrepeso = pSobrepeso
        this.Obesidade = Obesidade
    }
}
function calc(){
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    
    let Peso = (peso.value)
    let Altura = (altura.value)
    
    if((Peso != '') && Altura != ''){
        let Status = String(status_imc(formula_imc(Peso,Altura)))
        let indice = String(formula_imc(Peso,Altura))
        
        console.log('Status: '+Status + ' Seu Indice: ' + indice)
        
        peso.value = ''
        altura.value = ''
        peso.ariaPlaceholder = 'Ex. 74.5'
        altura.ariaPlaceholder = 'Ex. 1.65'

    }
}
function formula_imc(peso, altura){
    const imc = peso / (altura.tofixed = altura * altura);
    return imc.toFixed(2);

}
function status_imc(arg){
    if((arg >= 16.00) && (arg <= 18.49 )  ){
        return B_peso
    }else if((arg >= 18.50 ) && (arg <= 24.99)){
        return P_ideal
    }else if((arg >= 25) && (arg <= 29.99 )){
        return Sobrepeso
    }else if((arg >= 30)&&(arg <= 40)){
        return Obesidade
    }
}