
var productos = [{tipo:'bebidas', elems: [
											{nombre : 'Cafe', precio : '20'} , 
                            				{nombre : 'Capuccino', precio : '30'},
                            				{nombre : 'Mokaccino', precio : '32'}
                    					]
                 },
                {tipo:'pasteles', elems: [
											{nombre : 'Pastel de chocolate', precio : '22'} , 
                            				{nombre : 'Tiramisu', precio : '28'},
                            				{nombre : 'Mil hojas', precio : '32'}
                    		  			]
                },
                {tipo:'dulces', elems: [
											{nombre : 'Palanqueta', precio : '18'} , 
                            				{nombre : 'Dulce de Amaranto', precio : '15'},
                            				{nombre : 'Cocada', precio : '22'}
                    					]
                }];

productos.forEach(function(p){
	p.elems.forEach(function(e){
		var node = document.createElement("LI");
        node.setAttribute("class", "list-group-item");
        var textnode = document.createTextNode(e.nombre + ' - ' + e.precio);
    	node.appendChild(textnode);
    	document.getElementById(p.tipo).appendChild(node);
    })
});

function sonVacios(){
	var producto = document.getElementById('inputProd').value;
	var precio = document.getElementById('inputPrecio').value;
	var cantidad = document.getElementById('inputCantidad').value;
	if(producto == "" || precio  == "" || cantidad  == ""){
		alert("Tienes campos vacios");
	}else{
		agregaProducto();
	}	
}


function agregaProducto(){
	var producto = document.getElementById('inputProd').value;
	var precio = document.getElementById('inputPrecio').value;
	var cantidad = document.getElementById('inputCantidad').value;
	var subtotal = cantidad * precio;
	var valores = [producto, precio, cantidad, subtotal];
	var nodeTR = document.createElement("TR");

	for (var i = 0; i < 4; i++) {
		var nodeTD = document.createElement("TD");
		var textnode = document.createTextNode(valores[i]);
		nodeTD.appendChild(textnode);
		if(i == 3){nodeTD.setAttribute("class", "item-sum");};
		nodeTR.appendChild(nodeTD);
	}

	document.getElementById('lpedido').appendChild(nodeTR);
	
	var arrSubtotal = document.getElementsByClassName('item-sum');
	var total = 0;
	for(var j = 0; j < arrSubtotal.length; j++){ 
		total += Number(arrSubtotal[j].innerHTML);
	}
	document.getElementById('liTotal').style.display = 'block';
	document.getElementById('total').innerHTML = total;
	document.getElementById('inputProd').value = '';
	document.getElementById('inputPrecio').value = '';
	document.getElementById('inputCantidad').value = '';
}



