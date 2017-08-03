// //Keywords
// let demo = 'variable';
// const fijo = 'const';

// //arrow functions

// demo = ()=>{

// 	for(let x = 0; x < 5; x++){
// 		console.log(x);
// 	}

// };

jQuery(document).ready(function($) {
	$('.navbar-toggle').click(function() {
		$('.container-items, .overlay-items').addClass('active');
	});
	$('.glyphicon-arrow-left, .overlay-items').click(function() {
		$('.container-items, .overlay-items').removeClass('active');
	});
	$('#btn-play').click(function() {
	$('.padding-imagen').removeClass('padding-imagen');
	$('.envevisto').removeClass('hidden').html('<iframe width="500" height="500" src="https://www.youtube.com/embed/LhcT_Lf3hVQ?rel=0&autoplay=1" frameborder="0" allowfullscreen="" class="embed-responsive-item"></iframe>');
	$(this).hide();
	$('.visualvideo').hide();
});
	// console.log('hola');
});