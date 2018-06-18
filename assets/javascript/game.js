// declaration object


function initGame() {
    window.gameObj= {
                    wins:0,
                    losses:0,
                    randomNumber:0,
                    yourTotal:0,
                    jewelsValue:    [     
                                        ["ruby",0],
                                        ["diamond",0],
                                        ["topaz",0],
                                        ["jade",0]
                                    ]
                    
    }
    generateRandom();
    generateJewelsValues();
    render();
}

$(document).ready(function(){

initGame();

})

$("#resetButton").on("click",function() {
    console.log("Game reset");
    initGame();
});

$(".btn-outline-primary").on("click",function() {
    
    gameObj.yourTotal+=parseInt($(this).val());

    if (gameObj.yourTotal==parseInt(gameObj.randomNumber))
    {
        //$(".btn-outline-primary").prop("disabled",true);
        console.log("total: "+gameObj.yourTotal+ " randomNumber :"+gameObj.randomNumber);
        gameObj.wins++;
        console.log("you win");
        gameObj.yourTotal=0;
        generateRandom();
        generateJewelsValues();
        render();
        
    }
    else if (gameObj.yourTotal>parseInt(gameObj.randomNumber))
    {
        console.log("total: "+gameObj.yourTotal+ " randomNumber :"+gameObj.randomNumber);    
        gameObj.losses++
        console.log("you lose");
        gameObj.yourTotal=0;    
        generateRandom();
        generateJewelsValues();
        render();
    
    }    
    else
    {        
        console.log("total: "+gameObj.yourTotal+ " randomNumber :"+gameObj.randomNumber);
        render();        
    }

});

function generateRandom() {
    var number=(Math.floor(Math.random()*120)+1);

    console.log(gameObj.randomNumber=number); //sets randomNumber to the gameObj
}

function generateJewelsValues () {
    for (var i in gameObj.jewelsValue) {
       
        gameObj.jewelsValue[i][1]=Math.floor(Math.random()*12)+1;
    }
    // console.log(gameObj.jewelsValue);
    // var length=(gameObj.jewelsValue).length;
    // console.log(length);

    // console.log(gameObj.jewelsValue[0][1]);
    // console.log(gameObj.jewelsValue[1][1]);
    // console.log(gameObj.jewelsValue[2][1]);
    // console.log(gameObj.jewelsValue[3][1]);

   for(var i=1;i<=(gameObj.jewelsValue).length;i++)
   {        
       $("#jewel"+i).val(gameObj.jewelsValue[i-1][1]);
   }
    
}

function render() {
   //alert ("random number is "+gameObj.randomNumber);
   $("#randomNumber").html("<h3> Random Number is " +gameObj.randomNumber+"</h3>");

// ==================== Testing purpose how to assign value by grabbing button ID ====

//    $("#jewel2").val("2000");
//    var number= $("#jewel2").val();
//    console.log("number is",number);

$("#stats").html("<p> win(s): "+gameObj.wins+"</p>"+"<p> losse(s): "+gameObj.losses+"</p>");
$("#yourScore").html(gameObj.yourTotal);

}