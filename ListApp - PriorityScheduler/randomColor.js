
function rand()
{
    let random = Math.floor(Math.random()*256);
    //alert(random);
    return random;
}

function rgb()
{
    let ret = "rgb(" + rand() + "," + rand() + "," + rand() +")";
    //alert(ret);
    return ret;
}