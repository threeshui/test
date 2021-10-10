function create(){
		var myp = document.createElement('p');
		myp.innerText="段落4";
		myp.className="p4";
		document.body.appendChild(myp);
}
function del(){
	var myp=document.getElementById('id1');
	myp.parentNode.removeChild(myp);
}
function replace(){
	var myp = document.getElementById('id2');
	var myImg=document.createElement('img');
	myImg.src="img";
	// document.body.replaceChild(myImg,myp);
	myp.parentNode.replaceChild(myImg,myp);
}
function copy(){
	var myd = document.getElementById('div1');
	document.body.appendChild(myd.cloneNode(true));
}
function move(){
	var p2=document.getElementById('id1');
	var p3=document.getElementById('id2');
	p2.parentNode.insertBefore(p3,p2);
	}
