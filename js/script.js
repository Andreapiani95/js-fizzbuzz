/* 
1. scrivi un programma che stampi i numeri da 1 a 100
2. multipli di 3 = Fizz multipli di 5 = Buzz multipli di entrambi = FizzBuzz
*/

for (let i=1; i<=100; i++ ){

    if ( i % 15 == 0 ){
        console.log('FizzBuzz')
    }
        else if ( i % 3 == 0){
            console.log('Fizz')
        }
        else if (i % 5 == 0){
            console.log('Buzz')
        }
            else {
                console.log('i', i)
            }

}


    
