// with random char and delay time

var event = new KeyboardEvent('keydown', {
	key: ''+(Math.random() + 1).toString(36).substring(7).charAt(0)
});
setInterval(function(){
	setTimeout(() => { document.dispatchEvent(event); }, Math.random()*50);
}, Math.random()*50);
