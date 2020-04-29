function getRandomNumber(){
    var dig = []
    for(var i = 0 ; i < 3 ; i++){
        dig[i] = Math.floor(Math.random() * 255)
    }
    return `rgb(${dig[0]}, ${dig[1]}, ${dig[2]})`
}

document.body.style.backgroundColor = getRandomNumber()