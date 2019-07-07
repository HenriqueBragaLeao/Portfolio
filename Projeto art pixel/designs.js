// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
 

 $('#sizePicker').submit(function (event) {
	event.preventDefault();
	let linhas = $('#inputHeight').val(); // Move para a variavel 'linhas' a quantidade que foi selecionada pelo usuario
	let colunas =  $('#inputWeight').val(); // Move para a variavel 'Colunas' a quantidade que foi selecionada pelo usuario
	makeGrid(linhas, colunas); // passa os parâmetros para a função makeGrid
 });

 function makeGrid(x,y) {   // função para a criação da tabela
	 $('tr').remove();
	 
	for(i = 1; i <= x; i++ ) {   // loop for responsável por criar linhas
		$('#pixelCanvas').append('<tr id=col'+ i +'></tr>');
		
		for(j = 1; j <= y; j++) { // loop responsável por criar colunas
			$('#col'+ i).append('<td></td>');
		}
	}
	
 $('td').click(function trocaCor() {
	let cor = $('#colorPicker').val(); // Move a cor selecionada pelo usuario para a variavel 'cor'
	
	if ($(this).attr('style')) { //Condicional responsável por adiconar a 'cor' na grid.
		$(this).removeAttr('style') 
	} else {
		$(this).attr('style', 'background-color:' + cor);
	}
	
})
  
}