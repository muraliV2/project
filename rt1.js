
let buttons = document.getElementsByClassName("cl");
let selectedRating = null;

for( let btn of buttons)
{
    btn.addEventListener("click",(e) =>
    {
        selectedRating = e.target.innerText
        localStorage.setItem("range",selectedRating)
    })
}

let submitBtn = document.getElementById("subtn")
if(submitBtn)
{
    submitBtn.addEventListener("click",()=>
    {
        if(localStorage.getItem('range'))
        {
            window.location.href = "demo1.html"
        }
        else
        {

        }
    })
}

let result = document.getElementById("sels")
result.textContent = `you selected ${localStorage.getItem("range")} out of 5`