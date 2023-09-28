//set initial count
let count=0;

//select value and button
const myValue=document.getElementById("value");
const myBtns=document.querySelectorAll(".btn");

myBtns.forEach(function (myBtn){
    myBtn.addEventListener("click", function (e){
    const styles=e.currentTarget.classList;

    if(styles.contains("decrease")){
        count--;
    }

    if(styles.contains("reset")){
        count=0;
    }

    if(styles.contains("increase")){
        count++;
    }
    myValue.innerHTML=count;

    if(count>=10){
        myValue.style.color="red";
    }
    if(count<=-1){
    myValue.style.color="green"
    }

    if(count===0){
        myValue.style.color="yellow"
    }
    })
})