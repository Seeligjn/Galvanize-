// Don't change the function name.
function returnPyramid(height) {
    var arr = [];
    var eachRow = '' 
    for (var i = 1; i <= height; i++) {
      eachRow += '#';
      arr.push(eachRow);
    }
    return arr;
 }
console.log(returnPyramid(5)); //=> ['#','##']
returnPyramid(4); //=> ['#','##','###','####']
returnPyramid(6); //=> ['#','##','###','####','#####','######']