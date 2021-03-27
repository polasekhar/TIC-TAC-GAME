var turn = 'X';
var msg = document.getElementById("msg");
var winner = false;
var draw = false;

function myfunction(ele) {
    if(winner){
        msg.innerHTML = "game over";
    }else if(ele.innerHTML != '') {
        msg.innerHTML = "cell alredy selected"
    }else if (turn == 'X') {
        ele.innerHTML = turn ;
        checkTie();
        checkWinner();
            if(draw){
                msg.innerHTML = "tied";
            }else if(!winner){
                turn = 'O';
                msg.innerHTML = "";
            }else{
                msg.innerHTML = turn + " is winner";
            }  
    }
    else{
        ele.innerHTML = turn;
        checkTie();
        checkWinner();
            if(draw){
                msg.innerHTML = "tied";
            }else if(!winner){
                turn = 'X';
                msg.innerHTML = "";
            }else{
                msg.innerHTML = turn + " is winner";
            }
        
    }
}

function checkWinner(){
	if(checkPosible(1,2,3)||checkPosible(4,5,6)||checkPosible(7,8,9)
	||checkPosible(1,4,7)||checkPosible(2,5,8)||checkPosible(3,6,9)
	||checkPosible(1,5,9)||checkPosible(3,5,7)){
		winner = true;
	}
}

function checkPosible(a,b,c){
	var p1 = document.getElementById('c'+a).innerHTML;
	var p2 = document.getElementById('c'+b).innerHTML;
	var p3 = document.getElementById('c'+c).innerHTML;
	if(p1 != "" && p2 != "" && p3 != "" && p1 == p2 && p1 == p3){
		return true;
	}
}

function checkTie(){
	if(checkDraw(1,2,3) && checkDraw(4,5,6) && checkDraw(7,8,9) 
    && checkDraw(1,4,7) && checkDraw(2,5,8) && checkDraw(3,6,9)	
    &&checkDraw(1,5,9) && checkDraw(3,5,7)){
		draw = true;
        winner = false;
	}
}


function checkDraw(a,b,c){
	var p1 = document.getElementById('c'+a).innerHTML;
	var p2 = document.getElementById('c'+b).innerHTML;
	var p3 = document.getElementById('c'+c).innerHTML;
	if(p1 != "" && p2 != "" && p3 != "" && (p1 != p2 || p1 != p3)){
		return true;
	}else{
        return false;
    }
}
