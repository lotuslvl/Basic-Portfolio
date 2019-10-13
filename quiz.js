
var isTrue = function (numarray,userfunction) {
    var thiselement;

    for (var i=0; i<= numarray.length; i++) {

        thiselement=numarray[i];

        



        if (userfunction(thiselement)==true) {
            return true
       
       
           }

           else {
           return false
       
           }
    

    }
}


var trial = function(num){return num === 2}
isTrue ([1,2,3], trial); //should be true

