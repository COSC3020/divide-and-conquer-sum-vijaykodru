function divideAndConquerSum(a) {
    
    if(a.length ===0){
        return 0;
    }
    else if(a.length === 1){
        return a[0];
    }
    else { 
        var middle1 = Math.floor(a.length / 3);
        var middle2 = 2 * middle1;
        
        var Left = a.slice(0, middle1);
        var Middle = a.slice(middle1, middle2 + 1);
        var Right = a.slice(middle2 + 1);

        var Total = divideAndConquerSum(Left) + divideAndConquerSum(Middle) + divideAndConquerSum(Right);
        
        return Total;
    }
}


/* Reference Used:

Geek for Geeks
Khan Academey
*/