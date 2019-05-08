function val()
{
    const ret = Math.floor(Math.random()*256);
    return ret;
}

function rgb(){
    const ret = "rgb(" + val() + "," + val() + "," + val() +")";
    return ret;
}