import { cardapio } from './data/cardapio';
import { aplicarAcrescimoCredito, aplicarDescontoDinheiro } from './services/ajustes-valores.js';
import { verificarItemExtra, criarPedido } from './services/tratamento-pedidos.js';

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        const metodosDePagamentoValidos = ['dinheiro', 'debito', 'credito'];
        const listaPedidos = [];
        let valorSemAjuste = 0;
        let contemChantily, contemCafe, contemSanduiche, contemQueijo = false;

        if (!itens.length) return 'Não há itens no carrinho de compra!';
        if (!metodosDePagamentoValidos.includes(metodoDePagamento)) return 'Forma de pagamento inválida!';

        for (let item of itens) {
            const [codigoItem, qntItens] = item.split(',');
            const itemEncontrado = cardapio.find(item => item.codigo === codigoItem);
            if (!itemEncontrado) return 'Item inválido!';
            criarPedido(codigoItem, itemEncontrado.valor, qntItens, listaPedidos);
        }

        for (let pedido of listaPedidos) {
            ({ contemChantily, contemCafe, contemSanduiche, contemQueijo } =
                verificarItemExtra(pedido, contemChantily, contemCafe, contemSanduiche, contemQueijo));
            valorSemAjuste += pedido.valorItem * pedido.qntItens;
            if (valorSemAjuste === 0) return 'Quantidade inválida!';
        }

        if ((contemChantily && !contemCafe) || (contemQueijo && !contemSanduiche)) return 'Item extra não pode ser pedido sem o principal';

        if (metodoDePagamento === 'dinheiro') return aplicarDescontoDinheiro(valorSemAjuste);
        if (metodoDePagamento === 'credito') return aplicarAcrescimoCredito(valorSemAjuste);

        return `R$ ${valorSemAjuste.toFixed(2).replace('.', ',')}`;
    }
}

export { CaixaDaLanchonete };