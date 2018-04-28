window.addEventListener("load",main_prog,false); // внимание этот код в ужасном состояние, только для работы
function main_prog(){
	var ctx=paint1.getContext("2d");
	var w=paint1.width
	var h=paint1.height
	var x_old=650
	var y_old=100
	var x_mid=500
	var y_top_spike=300
	var x_right=700
	var x_left=300
	var y_end_spike=400
	var r=20
	var t=0
	var y_new=100
	var x_new=600
	
	function calculation_for_fall(x_old,y_old){
		y_old=y_new
		y_new=y_old+1
		console.log(y_new)
	}	
	
	
	function calculation_for_roll(x_old,y_old){ //мб здесь можно упростить и сделать с меньшим кол-вом проверок и т.д.
		y_old=y_new
		x_old=x_new
		var k = (y_end_spike-y_top_spike)/(x_mid-x_left)
		console.log(k)
		if(x_old>=x_mid)x_new=x_old+0.5
		else x_new=x_old-0.5
		y_new=y_old+1*k
		console.log(y_new)
	}
	
	function basic_draw(){ // вернул точные значения так как эта функция используется множество раз
		ctx.beginPath()
		ctx.moveTo(300,999)
		ctx.lineTo(700,999)
		ctx.lineTo(700,400)
		ctx.lineTo(500,300)
		ctx.lineTo(300,400)
		ctx.lineTo(300,999)
		ctx.stroke()
	}
	
	function del_and_draw(x_old,y_old,x_new,y_new){
		ctx.beginPath()
		ctx.strokeStyle="white"
		// ctx.arc(x_old,y_old,r,0,2*Math.PI);
		ctx.clearRect(0,0,1000,1000)
		ctx.stroke()
		ctx.strokeStyle="black";
		basic_draw()
		ctx.beginPath()
		ctx.arc(x_new,y_new,r,0,2*Math.PI);
		ctx.stroke()
	}
	
	// начало рисования
	basic_draw()
	var tmp=0 //кривой код здеся ссори
	var dir=1
	
	
	
	// while(y_new<y_top_spike){
		// del_and_draw(x_old,y_old,x_new,y_new);
		// calculation_for_fall(x_old,y_old);
	// }
	
	// var timer = setInterval(function(){
		// console.log("i am working")
		// if(y_new>y_top_spike){
			// clearInterval(timer)
			// return
		// }
		// del_and_draw(x_old,y_old,x_new,y_new);
		// calculation_for_fall(x_old,y_old);
	// },200)
	// внимание для кода важен угол, от него зависит условие, во всяком случае пока см. четвёртый if
	var timer = setInterval(function(){
		//console.log("i start")
		 if(y_new+20<y_top_spike){
			del_and_draw(x_old,y_old,x_new,y_new);
			console.log("i drawn")
			calculation_for_fall(x_old,y_old);
		}
		//console.log("fall stoped")
		if(y_new+20>=y_top_spike&&tmp==0){
			if(x_new>x_mid)
				calculation_for_roll(x_old,y_old)
		tmp++}
		if(y_new+20<y_end_spike&&y_new+20>y_top_spike){
			console.log(y_new)
			del_and_draw(x_old,y_old,x_new,y_new);
			calculation_for_roll(x_old,y_old)
		}
		//console.log("and again")
		if(tmp==1&&y_new+20>=y_end_spike){
			t=0
			calculation_for_fall(x_old,y_old)
			tmp++
		}
			
		
		if(y_new<990&&y_new+20>y_end_spike){
			del_and_draw(x_old,y_old,x_new,y_new);
			calculation_for_fall(x_old,y_old);
		}
		if (y_new>990){
		clearInterval(timer)
		return}
	},10)
		
	
	// calculation_for_roll(x_old,y_old)
	// while(y_new<y_end_spike){
		// del_and_draw(x_old,y_old,x_new,y_new);
		// calculation_for_roll(x_old,y_old)
	// }
	
	
	// while(y_new<980){
		// del_and_draw(x_old,y_old,x_new,y_new);
		// calculation_for_fall(x_old,y_old);
	// }
}
