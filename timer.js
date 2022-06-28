document.body.innerHTML += `
<style>
    #gTimerComponent{
            width: 100vw;
            position: fixed;
            bottom:0;
            left:0;
            padding: 15px 0;
            background-color: #eeeeee;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-family: sans-serif;
            font-size: 20px;
            font-weight: bold;
            --componentGap : 15px;
            --colonGap : 15px;
            --brandGreen : #00917c;
            gap: var(--componentGap);
        }
        #gTimerComponentBlock1{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: var(--componentGap);
        }
        #gTimerTime{
            display: flex;
            white-space: nowrap;
            justify-content: center;
            align-items: center;
            gap: var(--colonGap);
            color: var(--brandGreen);
        }
        .gTimerNumber{
            font-size: 36px;
        }
        .gTimerText2{
            font-size: 16px;
            font-weight: 400;
        }
        .gTimerColon{
            font-size: 24px;
        }
        .gTimerBlock{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: var(--colonGap);
        }
        .gTimerTimeBlock{
            display:flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
        }
        #gTimerButton{
            padding: 10px 24px;
            color: white;
            background-color: var(--brandGreen);
            border-radius: 10px;
            text-decoration: none;
        }
        #gTimerHours::before{
            content: 'Hours';
        }
        #gTimerMinutes::before{
            content: 'Minutes';
        }
        #gTimerSeconds::before{
            content: 'Seconds';
        }
        @media only screen and (max-width: 1000px) {
            body{
                background-color: lightblue;
            }
            #gTimerComponent{
                justify-content: space-around;
                --componentGap : 10px;
            }
            #gTimerComponentBlock1{
                flex-direction: column;
            }
            .gTimerTimeBlock{
                flex-direction: column;
            }
            
        }
        @media only screen and (max-width: 550px) {
            #gTimerButton{
                display: none;
            }
            #gTimerHours::before{
                content: 'Hrs';
            }
            #gTimerMinutes::before{
                content: 'Mins';
            }
            #gTimerSeconds::before{
                content: 'Secs';
            }
        }
</style>
<div id="gTimerComponent">
        <div id="gTimerComponentBlock1">
            <div id="gTimerText1">Applications are closing in</div>
            <div id="gTimerTime">
                <div class="gTimerBlock">
                    <div class="gTimerTimeBlock">
                        <div class="gTimerNumber">05</div>
                        <div id="gTimerDays" class="gTimerText2">Days</div>
                    </div>
                    <div class="gTimerColon">:</div>
                </div>
                <div class="gTimerBlock">
                    <div class="gTimerTimeBlock">
                        <div class="gTimerNumber">18</div>
                        <div id="gTimerHours" class="gTimerText2"></div>
                    </div>
                    <div class="gTimerColon">:</div>
                </div>
                <div class="gTimerBlock">
                    <div class="gTimerTimeBlock">
                        <div class="gTimerNumber">05</div>
                        <div id="gTimerMinutes" class="gTimerText2"></div>
                    </div>
                    <div class="gTimerColon">:</div>
                </div>
                <div class="gTimerBlock">
                    <div class="gTimerTimeBlock">
                        <div class="gTimerNumber">05</div>
                        <div id="gTimerSeconds" class="gTimerText2"></div>
                    </div>
                </div>
            </div>
        </div>
        <a id="gTimerButton" href="https://my.hpair.org/">Apply Now</a>
    </div>
    <div style="height:${$('#gTimerComponent').outerHeight()}px; width:100%  ;"></div>
`;

$(document).ready(function(){
    const gTimerEnd = new Date(1656907200000);
    function setTime(){
        let currentTime = new Date();
        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;
        let timeLeft = gTimerEnd - currentTime;
        let timeArray = []
        timeArray.push(parseInt(timeLeft/day))
        timeArray.push(parseInt((timeLeft%day)/hour))
        timeArray.push(parseInt(((timeLeft%day)%hour)/minute));
        timeArray.push(parseInt((((timeLeft%day)%hour)%minute)/second));
        let timeDivs = document.querySelectorAll('.gTimerNumber');
        for(i in timeArray){
            let timeItem = timeArray[i].toString();
            timeDivs.item(i).innerText = timeItem.length==1?'0'+timeItem:timeItem;
        }
    }
    setTime();
    const gTimerLoop = setInterval(setTime,1000); 
});