var value = document.getElementById('number').value
var fizzz = document.getElementById('fizz')                     //A variant and a function cant have the same name
var buzzz = document.getElementById('buzz')
var fizzBuzz = document.getElementById('fizzBuzz')
var introDisplay = document.getElementById('intro').style.display
var gameDisplay = document.getElementById('game').style.display



function startGame()
{
    document.getElementById('intro').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}

function incrementValue()
    {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('number').value = value
    }

function gameOver()
    {
        document.getElementById('number').value = value     
        value = "Game Over!";
    }

function fizzbuzz()
    {
        var value = document.getElementById('number').value

        if (value % 3 === 0 && value % 5 === 0) {
            incrementValue()            
        }   else {
            gameOver()   
        }
    }

function fizz()
    {
        var value = document.getElementById('number').value

        if (value % 3 === 0) {
            incrementValue()
        }   else {
            gameOver()
        }
    }

function buzz()
    {
        var value = document.getElementById('number').value

        if (value % 5 === 0) {
            incrementValue()
        }   else {
            gameOver()
        }
    }

function incByOne()
    {
        var value = document.getElementById('number').value

        if (value % 3 === 0 || value % 5 === 0) {
            gameOver()
        }   else (
            incrementValue()
        )
    }

