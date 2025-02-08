
var isPalindrome = function(x) {
    var str = x.toString();
    var revstr = str.split('').reverse().join('');

    if( str === revstr){
        return true;
    }
    else{
        return false;
    }

};
