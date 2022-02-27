// this function checks whether a number is a fibonacci
function fibonnacci () {
    let sum = 0
    let sequence = [1, 2]
    let nextNumber = 0
    const even =[]
    while ( nextNumber < 4000000 ) {
        nextNumber = sequence[ sequence.length - 1 ] + sequence[ sequence.length - 2 ] 
        sequence.push(nextNumber)
    }
     for (let i = 0; i < sequence.length ; i++) {
             if (sequence[i] % 2 === 0 ){
             even.push(sequence[i])
            }
    }
    for (let i = 0; i < even.length; i++) {
        sum += even[i]
    }
    return sum
}

fibonnacci ()