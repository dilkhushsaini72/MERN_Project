// Creating a random password generator


const passwordGen = (length) => {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*'
    let RandomPass = ''

    for(let i = 1; i <= length; i++){
       let randomNumber =  Math.floor(Math.random() * str.length)
       RandomPass += str.charAt(randomNumber)
    }

    console.log(RandomPass)
}

passwordGen(10);