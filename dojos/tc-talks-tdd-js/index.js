function fizzbuzz(array) {
   return array.map((number) => {
        var message = ''
        if (number % 3 == 0) {
            message += `Fizz`;        
        }
        if (number % 5 == 0) {
            message += `Buzz`;        
        }
        return message==""?number:message;
    })
}

module.exports = fizzbuzz