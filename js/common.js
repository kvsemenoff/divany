

$(document).ready(function(){

    $('a[name=modal]').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        $('#mask').fadeTo("slow",0.8); 
        var winH = $(window).height();
        var winW = $(window).width();
        posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement ||document.body.parentNode || document.body).scrollTop;
        $(id).css('top',  posTop+50);
        $(id).css('left', winW/2-$(id).width()/2);
        $(id).fadeIn(500); 
    });
    $('.window .dd-close').click(function (e) {
        e.preventDefault();
        $('#mask, .window').hide();
        $('.window').hide();
    }); 

    $('#mask, .an-exit__krest').click(function () {
        $('#mask').hide();
        $('.window').hide();
    });

    $(".phone").mask("+ 7 (999) 999 - 99 - 99?"); 

    $(".form1").submit(function() { 
        var tel = $(this).find('input[name="phone"]');
        var empty = false;
        if (tel.val() == ""){
            empty = true;
        }
        if (empty == true){
            tel.addClass("error-input");
            tel.focus();
        }else{
            var form_data = $(this).serialize(); 
            $.ajax({
                type: "POST", 
                url: "/sendmessage.php", 
                data: form_data,
                success: function() {
                    cleanTnanks(this);
                }
            });
        }
        return false;
    });
    function cleanTnanks(form){
        $('input[type="text"]').removeClass("error-input");
        $("input[type=text], textarea").val("");
        $('.window').hide();
        location = "spasibo.php";
        // $('a[href=#thanks]').trigger('click');
    };


    $('.df-cartproduct__right_view a').click(function(evt) {        
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
      $(this).addClass("df-active");       
  });     


    $('.df-section_padding').hide();
    $('.df-input_view').on('click', function(){

        $('.df-section_padding').slideDown();

        var text = $(this).prevAll('.df-models__txt1_view').text();
        var priceold = $(this).prevAll('.df-models__txt2_view').text();
        var pricetxt = $(this).prevAll('.df-models__txt3_view').text();
        var attr = $(this).parent('.df-models__characteristics').prev('.df-models__img').find('img').attr('src');      
        
        $('.df-input_view').each(function(){
            $('.df-innerh2').text(text);
            $('.df-cartproduct__col_view a:first').attr('href', attr);
            $('.df-cartproduct__col_view img:first').attr('src', attr);

            $('.dfbold').text(text); 
            $('.df-add__img').find('img').attr('src', attr); 
            $('.df-price-box').find('.df-models__txt2_view').text(priceold);
            $('.df-price-box').find('.df-models__txt3_view').text(pricetxt);
            $('#price').text(pricetxt);
            $('.totalprice').val(pricetxt);
            $('.tovar').val(text);
        });   
        $('.df-cartproduct__right_view a:first').click();
    });


    $('.df-cartproduct__right_view a').click(function(){        
        $(".df-cartproduct__right_view a").each(function(){
            if ($(".df-cartproduct__right_view a").hasClass("df-active")) {
                $(".df-cartproduct__right_view a").removeClass("df-active");
            }
        });
        $(this).addClass("df-active");
    });

    $('.df-cartproduct__prod_view a').click(function(e){
        e.preventDefault();
    });






    var owl2 = $("#df-owl");
    owl2.owlCarousel({
        loop:true,
        nav:true, 
        autoplay:false,
        smartSpeed:1000,
        margin:0,    
        navText:['<span class="df-left"></span>','<span class="df-right"></span>'],
        responsive:{
            0:{
              items:1
          },       
          1000:{
              items:3
          },
          1248:{
              items:4
          }
      }
  });


});


