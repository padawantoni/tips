$('body').on('click', '.prateleira .buy-button-normal', function (o) {
	o.preventDefault();
	//opcional: cria classes para animação de loading
	// $('body').addClass('carregando-produto');
	// $('.lds-spinner').addClass('ativo');
	var id = $(this).closest('li').find('.buy-button-normal').attr('id');
	var item = [
		{
			id: id,
			quantity: 1,
			seller: 1,
		},
	];
	vtexjs.checkout.getOrderForm().then(function () {
		// console.log(item);
		return vtexjs.checkout.addToCart(item, null, 1).done(function (orderForm) {
			// $('.lds-spinner').removeClass('ativo');
			// $('body').removeClass('carregando-produto');
			$('.minicart__button-open').trigger('click');
		});
	});
});
