const arr1=[10,30,40,20,39];

function arrSort(arr){
    arr.sort((a,b)=>a-b);
    arr.reverse();
    return arr;

}
console.log(arrSort(arr1));

