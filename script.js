console.log('Welcome to the HPAIR Website!');

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
<div id="floating-notif"style="
        width: 95vw;
        padding: 10px 0 15px 0;
        max-width: 600px;
        background-color: white;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0 0 100px rgba(0,0,0,0.2);
        position: fixed;
        z-index: 100;
        bottom: 15px;
        left: 50%;
        gap: 15px;
        transform: translateX(-50%);
    ">
        <div style="
            margin-top: 10px;
            font-size:22px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            color: #383838;
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;
        ">
            <span id="floating-notif-text1"></span><span id="floating-notif-days" style="color:#00917c;"></span>
            <a href="https://my.hpair.org" style="color:inherit; text-decoration: none; font-weight:500; color: white; background-color: #00917c; padding: 8px 24px; border-radius: 100px;">Apply Now</a>
        </div>
        <div style="
            width:70%;
            height:2px;
            background-color:#d9d9d9;
            display:inline-block;
        "></div>
        <div style="
            color: #a1a1a1;
            font-size: 17px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            display: flex;
        ">
            <span id="floating-notif-people"></span>&nbsp;have applied for HPAIR ACONF in past&nbsp;<span id="floating-notif-hours"></span>
        </div>
        <div onclick="closeNotif()"style="
            color: white;
            --size: 30px;
            width: var(--size);
            height: var(--size);
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            transform: translate(50%,-50%);
            background-color: #c4c4c4;
            border-radius: 100px;
        ">
            &#10006;
        </div>
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

    var today = new Date();
    var conf = new Date(2022, 5, 14);
    var one_day=1000*60*60*24;
    var days_left = Math.ceil((conf.getTime()-today.getTime())/(one_day));
    var notif_text = "Applications are closing";
    var random_hours = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
    var random_people = random_hours * Math.floor(Math.random() * (75 - 50 + 1)) + 50;

    if(days_left<0)$("#floating-notif").hide();
    else{
        if(days_left==1)days_left+=" day";
        else if(days_left<1)days_left="Today";
        else days_left+=" days";
        if(days_left>0) notif_text+=" in";

        $('#floating-notif-days').text(days_left);
        $('#floating-notif-text1').html(notif_text);
        $('#floating-notif-hours').text(random_hours+" hours");
        $('#floating-notif-people').text(random_people+" people");
    }
    function closeNotif(){
        $("#floating-notif").fadeOut(700);
    }
});