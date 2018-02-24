var test1 = function (){
    return new Promise (function (resolve, reject) {
        setTimeout(function () {
            // 成功
            resolve('Async Hello world test1');
            //console.log("test1");
        }, 2000);
    });
}

var test2 = function (){
    return new Promise (function (resolve, reject) {
        setTimeout(function () {
            // 成功
            resolve('Async Hello world test2 ');
            //console.log("test2");
        }, 5000);
    });
}


/*
test1().then(function(success, error ){
    return  test2();
}).then(function(success,error){

});
*/

test1()
.then(
    function(success){
        console.log(success);
        return test2();
    },
    function(error){
        console.log(error);
    }
)
.then(
    function(success){
        console.log(success);
    },
    function(error){
        console.log(error);
    }

);
