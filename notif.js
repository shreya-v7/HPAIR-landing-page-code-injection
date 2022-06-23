console.log('Notif!');

document.body.innerHTML += `<div id="floating-notif">
        <div id="floating-notif-text">
            <span id="floating-notif-text1"> &nbsp;<span id="floating-notif-days"></span></span>
            <a id="floating-notif-button" href="https://my.hpair.org">Apply Now</a>
        </div>
        <div id="floating-notif-hr"></div>
        <div id="floating-notif-info">
            <span id="floating-notif-people"></span> have applied for HPAIR ACONF in past <span id="floating-notif-hours"></span>
        </div>
        <div id="floating-notif-close" onclick="closeNotif()">
            &#10006;
        </div>
    </div>
    <style>
        #floating-notif {
            width: 90vw;
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
            left: 15px;
            gap: 15px;
            line-height: 1.5em;
        }
        #floating-notif-text {
            margin-top: 10px;
            font-size: 22px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            color: #383838;
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;
        }
        #floating-notif-days{
            color:#00917c;
            white-space: nowrap;
        }
        #floating-notif-button{
            color:inherit;
            text-decoration: none; 
            font-weight:500; 
            color: white; 
            background-color: #00917c; 
            padding: 8px 24px; 
            border-radius: 100px;
            white-space: nowrap;
        }
        #floating-notif-hr{
            width:70%;
            height:2px;
            background-color:#d9d9d9;
        }
        #floating-notif-info{
            color: #a1a1a1;
            font-size: 17px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            line-height: 1.5em;
            /* display: flex; */
        }
        #floating-notif-people{
            font-weight: 700;
        }
        #floating-notif-close{
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
            font-size: 16px;
        }
        @media only screen and (max-width: 645px) {
            #floating-notif{
                padding: 10px 0px 15px 0px;
                /* width: 90vw; */
            }
            #floating-notif-text{
                font-size: 16px;
                gap:8px;
                
            }
            #floating-notif-text1 {
                width: 135px;
                margin-left:15px;
            }
            #floating-notif-days{
                transform: translate(-150%,50%);
            }
            #floating-notif-button{
                padding: 8px 16px;
                margin-right: 15px;
            }
            #floating-notif-info{
                font-size: 13px;
                margin: 0 15px;
                max-width: 80%;
                text-align: center;
            }
        }
    </style>
`

$(document).ready(function(){ 
    $('#floating-notif').hide();
    setTimeout(() => {
        $('#floating-notif').fadeIn(500);
    }, 3000);
    var today = new Date();
    var conf = new Date(2022, 6, 3);
    var one_day=1000*60*60*24;
    var days_left = Math.ceil((conf.getTime()-today.getTime())/(one_day));
    var notif_text = "Applications are closing";
    var random_hours = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
    var random_people = Math.floor(Math.random() * (75 - 50 + 1)) + 50;

    if(days_left<0)$("#floating-notif").hide();
    else{
        if(days_left>0) notif_text+=" in";
        if(days_left==1)days_left+=" day";
        else if(days_left<1)days_left="Today";
        else days_left+=" days";

        $('#floating-notif-days').text(days_left);
        $('#floating-notif-text1').html(notif_text + $('#floating-notif-text1').html());
        $('#floating-notif-hours').html($('#floating-notif-hours').html()+random_hours+" hours");
        $('#floating-notif-people').html(random_hours*random_people+" people"+$('#floating-notif-people').html());
    }
    resizeNotif();

    $(window).resize(resizeNotif);
    
    function resizeNotif(){
        if(screen.width<645){
            $("#floating-notif").width(47+((644-screen.width)/(324/43))+"vw");
        }else{
            $("#floating-notif").width("90vw");
        }
    } 
});

function closeNotif(){
    $("#floating-notif").fadeOut(500);
}