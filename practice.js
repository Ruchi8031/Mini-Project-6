const FieldBox =document.getElementById("inputtxt");
const DisplayButton =document.getElementById("displaybtn");
const displaytxt =document.getElementById("dispalytext");

DisplayButton.addEventListener("click", ()=>{
    const inputValue=FieldBox.value;
    displaytxt.textContent=inputValue;
});
