module.exports = {
    sum: function(num1, num2) {return num1 + num2},
    mult: function(num1, num2) {return num1 * num2},
    sub: function(num1, num2) {return num1 - num2},
    div: function(num1, num2) {
        
        return (num2 === 0) ? 'Não é possível dividir por 0': num1 / num2;
    
    }

}
