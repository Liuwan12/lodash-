
function _chunk(array, index) {
    if(index==0||index<0){
        return;
    }else{
        var ls = 0;
        var arr = newArray('');
        for(var i =0;i<array.length;i+=1){
            arr = array.slice(index,array/index);
        }
        console.log(arr);
    }
}