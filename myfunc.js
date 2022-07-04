function autoIncrement(startnum){
    var init = startnum;
    var td_list = document.getElementsByClassName("autoInc");
    for(var i=0; i<td_list.length; i++){
        init++;
        td_list[i].innerHTML= "&nbsp"+init;
    }
}
autoIncrement(0);