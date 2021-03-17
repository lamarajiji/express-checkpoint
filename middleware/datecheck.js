const datecheck =(req , res , next) => {
    let now=new Date();

    if((now.getDay()==0)||(now.getDay()==7))
    {
    res.sendFile(__dirname + '/public/error.html')
    }
    else if((now.getHours()>17)&&(now.getHours()<9))
   { console.log((now.getHours()>17)||(now.getHours()>9))
    console.log("im here")
    res.sendFile(__dirname + '/public/error.html')}
    else 
   { next();}
}
module.exports =datecheck