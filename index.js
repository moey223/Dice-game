function play() {
    var randNum1 = Math.floor(Math.random() * 6) + 1;
    var randNum2 = Math.floor(Math.random() * 6) + 1;
    const image1 = document.querySelector("#Player1");
    const image2 = document.querySelector("#Player2");
    /*image changing for player 1 */
    if(randNum1 == 1){
        image1.src = './dice1.png';
    } else if(randNum1 == 2){
        image1.src = './dice2.png';
    } else if(randNum1 == 3){
        image1.src = './dice3.png';
    } else if(randNum1 == 4){
        image1.src = './dice4.png';
    } else if(randNum1 == 5){
        image1.src = './dice5.png';
    } else if(randNum1 == 6){
        image1.src = './dice6.png';
    }
    /*image changing for player 2 */
    if(randNum2 == 1){
        image2.src = './dice1.png';
    } else if(randNum2 == 2){
        image2.src = './dice2.png';
    } else if(randNum2 == 3){
        image2.src = './dice3.png';
    } else if(randNum2 == 4){
        image2.src = './dice4.png';
    } else if(randNum2 == 5){
        image2.src = './dice5.png';
    } else if(randNum2 == 6){
        image2.src = './dice6.png';
    }
    if(randNum1 >randNum2 ){
        document.querySelector("#winnerfr").innerHTML = "Player 1 wins!";
    } else if(randNum1 < randNum2){
        document.querySelector("#winnerfr").innerHTML = "Player 2 wins!";
    } else{
        document.querySelector("#winnerfr").innerHTML = "It's a Draw!";
    }
    
}
