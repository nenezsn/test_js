//用let 或者 箭头函数
for(var i = 0 ; i<3;i++){
    setTimeout((function(i){
        return function(){
            console.log(i)
        }
    }(i)),1000)
}
