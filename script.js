function insert(number){
  let num = document.getElementById('input').innerHTML;
  let br = document.getElementById('input').innerHTML = number + num;
   
  if(br.length == 11) {
    document.getElementById('input').innerHTML = '<br>'
  }

}
   

 function clean() {
  document.getElementById('input').innerHTML= "";
 }

