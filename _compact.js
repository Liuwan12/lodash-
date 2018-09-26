_compact([2,3,'',null])
function _compact(array){
    var arr = [];
    for(var i =0 ;i<array.length;i++){
        if(array[i]){
            arr.push(array[i]);
        }
    }
    console.log(arr);
}