function average(scores){
    for (var i=0; i<=scores.length; i++){
        sum = scores[i]++;
        summe = sum/scores.length;
        console.log(Math.round(summe));
    }
}; 

var scores = [90, 98, 100, 10, 86, 94];
average(scores); 