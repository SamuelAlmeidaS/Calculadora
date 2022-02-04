function calcula(number, numbers){
    number = document.getElementsByClassName('number1').value
    numbers = document.getElementsByClassName('number2').value

    console.log(number, numbers)
    // let oper = document.getElementsByClassName('operacoes')
    let oper = document.getElementsByClassName('cal-mais').value
   console.log(oper)
 // Switch
  switch(oper){
    case '+':
      calculo = (number + numbers)
      document.getElementsByClassName('output-cal').innerHTML = `${number} + ${numbers} = ${calculo}`
      console.log(calculo)
      break;
  
  }

}