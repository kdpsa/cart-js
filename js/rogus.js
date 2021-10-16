function moneyTextToFloat(text) {
	var cleanText = text.replace("R$ ", "").replace(",", ".");
	return parseFloat(cleanText);
}

function floatToMoneyText(value) {
	var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
	text = "R$ " + text;
	return text.substr(0, text.length - 2) + "," + text.substr(-2);
}

function readTotal() {
	var total = $("#total").text();
	return moneyTextToFloat(total);
}

function writeTotal(value) {
	var text = floatToMoneyText(value);
	$("#total").text(text)
}

function calculateTotalProducts() {
	var produtos = $(".produto");
	var total = 0;

	$(produtos).each(function(i, produto) {
		var $produto = $(produto);
		var quantity = moneyTextToFloat(
			$produto.find(".quantity").val());
		var price = moneyTextToFloat(
			$produto.find(".price").text());
		total += quantity * price;
	});
	
	/*
	for (var i = 0; i < product.length; i++) {
		var $product = $(product[i]);
		var quantity = moneyTextToFloat(
			$product.find(".quantity").val());
		var price = moneyTextToFloat(
			$product.find(".price").text());
		total += quantity * price;
	}
	
	var total = 0;
	
	for (var i = 0; i < products.length; i++) {
		//Verificação para buscar o preço do produto
		var priceElements = products[i].getElementsByClassName("price");
		var priceText = priceElements[0].innerHTML;
		var price = moneyTextToFloat(priceText);
		
		//Verificação para buscar a quantidade de produtos adicionados
		var qtyElements = products[i].getElementsByClassName("quantity");
		var qtyText = qtyElements[0].value;
		var quantity = moneyTextToFloat(qtyText);
		
		var subtotal = quantity * price;
		total += subtotal;
	}*/

	return total;	
}

/*
function quantidadeMudou() {
	writeTotal(calculateTotalProducts());
}
*/

//Função para atualizar a página cada vez que a quantidade de algum produto for alterada
$(function() {
	$(".quantity").change(function() {
		writeTotal(calculateTotalProducts());
	});
});

/*
function onDocumentLoad() {
	var textEdits = document.getElementsByClassName("quantity");
	for (var i = 0; i < textEdits.length; i++) {
		// textEdits invocando função anônima
		textEdits[i].onchange = function() {
			writeTotal(calculateTotalProducts());
		};
		// textEdits[i].onchange = quantidadeMudou;
	}
}

window.onload = onDocumentLoad;*/
