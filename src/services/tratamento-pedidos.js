function criarPedido(codigoItem, valorItem, qntItens, listaPedidos) {
    listaPedidos.push({
        codigoItem,
        valorItem,
        qntItens,
    });
}

function verificarItemExtra(pedido, contemChantily, contemCafe, contemSanduiche, contemQueijo) {
    if (pedido.codigoItem === 'chantily') contemChantily = true;
    if (pedido.codigoItem === 'cafe') contemCafe = true;
    if (pedido.codigoItem === 'sanduiche') contemSanduiche = true;
    if (pedido.codigoItem === 'queijo') contemQueijo = true;
    return { contemChantily, contemCafe, contemSanduiche, contemQueijo };
}

export { criarPedido, verificarItemExtra };