async function fn() {
	return new Promise(function(resolve, reject){
		setTimeout( function(){
			 resolve(42);
			 //return 42;
		},3000);
	});
}

async function exec() {
	for (var i = 4 - 1; i >= 0; i--) {
		let result = await fn();
		console.log(result);
	}
}

exec();
//
//