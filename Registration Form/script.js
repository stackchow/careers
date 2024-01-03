// const form = document.querySelector("form"),
//         nextBtn = form.querySelector(".nextBtn"),
//         backBtn = form.querySelector(".backBtn"),
//         allInput = form.querySelectorAll(".first input");


// nextBtn.addEventListener("click", ()=> {
//     allInput.forEach(input => {
//         if(input.value != ""){
//             form.classList.add('secActive');
//         }else{
//             form.classList.remove('secActive');
//         }
//     })
//     nextBtn.addEventListener("click", ()=> headerEl.innerHTML = "Delivery Person Registration")
// })

// let headerEl = document.getElementById("header");
// headerEl.innerHTML = "Vendor Registration";

// backBtn.addEventListener("click", () => form.classList.remove('secActive'));

// backBtn.addEventListener("click", ()=> headerEl.innerHTML = "Vendor Registration")


// // image
// window.addEventListener('load', function() {
//     document.querySelector('input[type="file"]').addEventListener('change', function() {
//         if (this.files && this.files[0]) {
//             var img = document.querySelector('img');
//             img.onload = () => {
//                 URL.revokeObjectURL(img.src);  // no longer needed, free memory
//             }
  
//             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//         }
//     });
//   });