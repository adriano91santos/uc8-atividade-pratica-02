for(let i=1; i<=50; i++){
    let qtdDivisores = 1
    for(let j=2; j<=i; j++){
        if (i%j == 0){
            qtdDivisores++
        }
    }
    if(qtdDivisores == 2){
        console.log(i)
    }
}