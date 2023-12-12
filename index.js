
function RandomQoutes () {
    var getQoutes = [
        "“Be yourself; everyone else is already taken.”" , "“one thing are infinite: the universe.”" ,"“So many books, so little time.”"
    ]
    var author = [ "-Oscar Wilde" , "-Albert Einstein" , "-Frenk Zapa"
    ]
    var num = Math.floor(Math.random() * getQoutes.length )
    
    document.getElementById('h').innerHTML = ""+getQoutes[num]+"";
    document.getElementById('b').innerHTML = ""+author[num]+"";
}


