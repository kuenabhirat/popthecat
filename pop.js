
// with random char and delay time

setInterval(function(){
    var event = new KeyboardEvent('keydown', {
        key: ''+(Math.random() + 1).toString(36).substring(7).charAt(0)
    });
    var i = Math.floor(Math.random() * 50);
    if(i%2==0){
	    setTimeout(() => { document.dispatchEvent(event); }, i);
    }
}, Math.floor(Math.random() * 100));
