console.log('henlu');
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll-button').fadeIn(); 
        } else { 
            $('#scroll-button').fadeOut(); 
        } 
    }); 
    $('#scroll-button').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

document.body.innerHTML += `<a href="#" id="scroll-button" style="display: none; z-index: 1000; position: fixed;"><span></span></a>
<div id="mybutton" style="position: fixed;
  bottom: 75px;
  right: 10px;
  z-index: 1000;">
<a class="feedback" href="https://wa.me/+18448037847"  style="background-color : #25D366;
  color: white;
  padding: 11px 16px;
  border-radius: 100%;
  border-color: #25D366;"><i class="fa-brands fa-whatsapp"></i></a>
</div>`