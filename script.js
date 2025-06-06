// let degrement = document.getElementById('btn-one')
// let defaultt = document.getElementById('btn-two')
// let increment = document.getElementById('btn-three')
// select 
const value = document.querySelector("#value");
const heading = document.querySelector(".heading");
const btns = document.querySelectorAll(".btn");
let count = 0
// forEach on each button each button do his own operation
btns.forEach(function (btn) 
{

btn.addEventListener('click', function (e) { 
    const styles = e.currentTarget.classList;
  if (styles.contains("decrease")) {
      count--;
      
    }
else if (styles.contains("increase")) {
      count++;}
      else if (styles.contains('divide')){
count = count/2
      }
      else if (styles.contains("multiply")){
    count=    count*2
      }
     
    else {
      count = 0;
    }
//  if the value of Counter is greater then 0 it will be green and if the value of conter is less then 0 then its color will be red
    if (count>0) {
        value.style.color = 'green'
     } else if (count<0){
        // value.styles.color= 'red'
            value.style.color = "red";
    }
    else{
        value.style.color = 'Black'
    }

    // heading.textContent = count
    value.textContent = count
    // console.log(count);
    
}) 
});