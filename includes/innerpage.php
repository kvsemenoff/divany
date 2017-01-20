<section class="section section_padding">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2 class="df-innerh2">ДИВАН АРИЗОНА ЕВРОСОФА</h2>
				<div class="df-cartproduct df-cartproduct_view">
					<div class="df-cartproduct__left df-cartproduct__left_view">
						<div class="df-cartproduct__img df-cartproduct__img_view">
							<img src="img/df-cart.jpg" alt="" class="img-responsive">
						</div>
						<div class="df-cartproduct__choise df-cartproduct__choise_view">
							<div class="df-cartproduct__prod df-cartproduct__prod_view"><a href="img/df-cart.jpg"><img src="img/df-cart1.jpg" alt=""></a></div>
							<div class="df-cartproduct__prod df-cartproduct__prod_view"><a href="img/df-cart.jpg"><img src="img/df-cart2.jpg" alt=""></a></div>
							<div class="df-cartproduct__prod df-cartproduct__prod_view"><a href="img/df-cart.jpg"><img src="img/df-cart3.jpg" alt=""></a></div>
						</div>
					</div>
					<div class="df-cartproduct__right df-cartproduct__right_view">
						<span>Выберите расцветку</span>
						<div class="df-cartproduct__col df-cartproduct__col_view"><a href="img/df-color1.jpg"><img src="img/df-color1.jpg" alt=""></a></div>
						<div class="df-cartproduct__col df-cartproduct__col_view"><a href="img/df-color2.jpg"><img src="img/df-color2.jpg" alt=""></a></div>
						<div class="df-cartproduct__col df-cartproduct__col_view"><a href="img/df-color3.jpg"><img src="img/df-color3.jpg" alt=""></a></div>
						<div class="df-cartproduct__col df-cartproduct__col_view"><a href="img/df-color4.jpg"><img src="img/df-color4.jpg" alt=""></a></div>
						<div class="df-cartproduct__col df-cartproduct__col_view"><a href="img/df-color5.jpg"><img src="img/df-color5.jpg" alt=""></a></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<script>
	$('.df-cartproduct__prod_view a').click(function(evt) {		
	evt.preventDefault();		 
	    var imgPath = $(this).attr('href');	
        
	    var oldImage = $('.df-cartproduct__img_view img');		 			
			
		var newImage = $('<img src="' + imgPath +'">');
			
         newImage.hide();			
         $('.df-cartproduct__img_view').prepend(newImage);			
         newImage.show(200);		 
			
        oldImage.hide(200,function(){
             $(this).remove();
        });		 
});		
$('.df-cartproduct__prod_view a:first').click();
</script>			