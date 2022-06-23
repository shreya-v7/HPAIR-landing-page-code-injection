console.log('Tag test 2!');

document.body.innerHTML += `<a href="#" id="scroll-button" style="position:fixed;
right:10px;
bottom:10px;
cursor:pointer;
width:50px;
height:50px;
background-color:#000;
text-indent:-9999px;
display:none;
-webkit-border-radius:60px;
-moz-border-radius:60px;
border-radius:60px; display: none; z-index: 1000; position: fixed;"><span style="position:absolute;
top:50%;
left:50%;
margin-left:-8px;
margin-top:-12px;
height:0;
width:0;
border:8px solid transparent;
border-bottom-color:#ffffff;"></span></a>
<div id="mybutton" style="position: fixed;
  bottom: 75px;
  right: 10px;
  z-index: 1000;">
<a class="feedback" href="https://wa.me/+18448037847"  style="background-color : #25D366;
  color: white;
  padding: 11px 16px;
  border-radius: 100%;
  border-color: #25D366;"><i class="fa-brands fa-whatsapp"></i></a>
</div>
`

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