const getColor = ()=>{
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor= hexCode;

    const cc = document.getElementById("hex-c");
    // console.log(randomNumber)
    cc.innerHTML =  hexCode;
}
// calling event-wise
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

// calling initially
getColor();