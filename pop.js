
// with random char and delay time

var event = new KeyboardEvent('keydown', {
	key: ''+(Math.random() + 1).toString(36).substring(7).charAt(0)
});
setInterval(function(){
    var i = Math.floor(Math.random() * 100);
    if(i%2==0){
	    setTimeout(() => { document.dispatchEvent(event); }, i*50);
    }
}, Math.floor(Math.random() * 100));

