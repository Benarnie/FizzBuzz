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
        document.getElementById('number').value = value;
    }

function fizzbuzz()
    {
        var value = document.getElementById('number').value

        if (value % 3 === 0 && value % 5 === 0) 
            incrementValue()
        else (value === "Game Over!")
    }

function fizz()
    {
        var value = document.getElementById('number').value

        if (value % 3 === 0) 
            incrementValue()
        else (value === "Game Over!")
    }

function buzz()
    {
        var value = document.getElementById('number').value

        if (value % 5 === 0) 
            incrementValue()
        else (value === "Game Over!")
    }
