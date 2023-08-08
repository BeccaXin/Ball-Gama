const HOOP_OFFSET_MAX_Y=161;
const HOOP_OFFSET_MIN_Y=148;
const HOOP_OFFSET_MAX_X=224;
const HOOP_OFFSET_MIN_X=73;

const ball = document.getElementById('ball');
const hoop = document.getElementById('hoop');
const scoreboard= document.getElementById('scoreboard');
let hasscore=false;

let cursorBallOffsetX=0;
let cursorBallOffsetY=0;
let score=0

const onmousemove= (event) => {
    event.preventDefault();

    ball.style.left = event.clientX - cursorBallOffsetX+'px';
    ball.style.top = event.clientY -cursorBallOffsetY +'px';


    const hooprect=hoop.getBoundingClientRect();

    if (event.clientX > hooprect.left + HOOP_OFFSET_MIN_X 
        && event.clientX < hooprect.left + HOOP_OFFSET_MAX_X
        && event.clientY > hooprect.top + HOOP_OFFSET_MIN_Y
        && event.clientY < hooprect.top + HOOP_OFFSET_MAX_Y){
        // console.log('goal score')
            if (!hasscore){
                score+=1;
                scoreboard.textContent=`Score: ${score}`
                hasscore=true;
            }
            else {
                hasscore=false;
            }
        }
};

ball.addEventListener('mousedown',(event) => {
    document.addEventListener('mousemove', onmousemove);

    const ballrect = ball.getBoundingClientRect();

    cursorBallOffsetX=event.clientX-ballrect.left;
    cursorBallOffsetY=event.clientY-ballrect.top;

});


ball.addEventListener('mouseup',() => {
    document.removeEventListener('mousemove', onmousemove);

    // const ballrect = ball.getBoundingClientRect();
    // cursorBallOffsetX=event.clientX-ballrect.left;
    // cursorBallOffsetY=event.clientY-ballrect.top;

});