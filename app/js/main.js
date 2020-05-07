let degree = 3600;
let clicks = 0;

$(document).ready(function(){

	$('#spin').click(function(){
		clicks += 1;
		
		let newDegree = degree*clicks;
		let extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
		totalDegree = newDegree+extraDegree;
		
		$('#wheel .sec').each(function(){
			let t = $(this);
			let noY = 0;
			
			let c = 0;
			let n = 1700;	
			let interval = setInterval(function () {
				c += 1;				
				if (c === n) { 
					clearInterval(interval);				
				}
				let aoY = t.offset().top;
				console.log(aoY);
				if(aoY < 23.89){
					console.log('<<<<<<<<');
					$('#spin').addClass('spin');
					setTimeout(function () { 
						$('#spin').removeClass('spin');
					}, 100);	
				}
			}, 10);
			$('#inner-wheel').css({
				'transform' : 'rotate(' + totalDegree + 'deg)'			
			});
			noY = t.offset().top;
		});
	});
});