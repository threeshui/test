//1.转盘转 -setInterval --timeid 多转几圈
//2.怎么才能中奖 myRan- 0-4
//3.结果展示 display-block
//4.关闭所有数据清零
var myClick = document.getElementById('bth-click');
var myClose = document.getElementById('btn-close');
var myResult = document.getElementById('result');
var myzp = document.getElementById('zhuanpan');
var mytxt = document.getElementById('showlist');
var mypic = document.getElementById('resultpic');

var circle = -1;
var myRan = -1;
var timeId;
var i=-1;

$("#bth-click").click(function(){
	//创建随机数z
	myRan= parseInt(Math.random()*(4-0+1)+1);
	//转盘转-setinterval
	timeId = window.setInterval(function(){
		if(i==4){
			circle+=1;
			i=-1;
		}else{
			i+=1;
			myzp.src="../img/img/"+i+".png";
			if(myRan===i&&circle>1){
				myResult.style.display="block"
				mypic.src="../img/pic"+i+".png";
				clearInterval(timeId);
				mytxt.innerText="你中大奖了！！"
			}
		}
		
	},100);
	
	
})
$("#btn-close").click(function(){
	myResult.style.display="none";
	myzp.src="img/zhiqian.png"
	mytxt.innerText="";
	circle=-1;
	i=-1;
})