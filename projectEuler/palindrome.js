// this function checks whether or not a variable is a palindrome
function palindrome (num){
    let phrase = `${num}`
        for (let i = 0; i < phrase.length/2; i++) {
           if(phrase[i]===phrase[phrase.length - 1 - i]){
               return true
            }
           return false
       }
   
   }
   function palindrome (num){
    let phrase = `${num}`
     
    if(phrase.split("").reverse().join("") === phrase ){
            return true
    }
    return false
    

}

// this function diplays the highest palindrome in 2 digits number
function runThrough (){
    let store = []
    let c = 0;
    
    let num=[]
    
    for (let i = 0; i < 100; i++) {
          num.push(i)
      
    }
    
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length; j++) {
             c = ( num[i] * num[j] )
                if(palindrome(c))
                store.push(c)
        }
    }
     return store   
 }

