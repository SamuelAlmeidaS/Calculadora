function insert(number) {
  let num = document.getElementById('input').innerHTML;
  document.getElementById('input').innerHTML = number + num;

}

 function clean() {
  document.getElementById('input').innerHTML= "";
 }

function res() {
  let input = document.getElementById('input').innerHTML;

  if(input){
    document.getElementById('input').innerHTML = eval(input);
  }
}
