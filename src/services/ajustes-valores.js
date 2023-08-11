function aplicarDescontoDinheiro(valorSemAjuste) {
    const descontoDinheiro = valorSemAjuste * 0.05;
    const valorAPagar = valorSemAjuste - descontoDinheiro;
    return `R$ ${valorAPagar.toFixed(2).replace('.', ',')}`;
}

function aplicarAcrescimoCredito(valorSemAjuste) {
    const acrescimoCredito = valorSemAjuste * 0.03;
    const valorAPagar = valorSemAjuste + acrescimoCredito;
    return `R$ ${valorAPagar.toFixed(2).replace('.', ',')}`;
}

export { aplicarDescontoDinheiro, aplicarAcrescimoCredito };