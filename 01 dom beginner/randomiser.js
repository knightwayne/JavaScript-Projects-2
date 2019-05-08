
function val()
{
    var random = Math.floor(Math.random()*256);
    return random;
}

function rgbValue()
{
    var rgb = 'rgb(' + val() + ',' + val() + ',' + val() + ')';
    return rgb;
}