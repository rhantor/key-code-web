let key = document.querySelector(".key h2");
let keyCode = document.querySelector(".keyCode h2");
let keyCodeDiv = document.querySelector(".keyCode");
let copied = document.querySelector(".keyCode p");
let overlay = document.querySelector(".overlay");
let ClearBtn = document.querySelector('button');

ClearBtn.addEventListener('click' , ()=>{
    location.reload();
})

let input = document.querySelector('input');
input.addEventListener('keydown',()=>{
    if(input.value){
        input.value = '';
}
})



window.addEventListener("keypress", (e) => {
  overlay.classList.add("hide");
  key.innerText = e.key;
  keyCode.innerText = e.keyCode;
  if (e.keyCode === 32) {
    key.innerText = "space";
  }
});

keyCodeDiv.addEventListener("click", (e) => {
  const textarea = document.createElement("textarea");
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.value = keyCodeDiv.querySelector("h2").innerText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  copied.innerText = "Copied!";
  document.body.removeChild(textarea);

  setTimeout(() => {
    copied.innerText = "Click to copy";
  }, 2000);
});
