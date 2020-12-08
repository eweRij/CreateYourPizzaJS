// const form = document.querySelector("form");
// const checks = document.querySelectorAll("[data-price]");
// const price = document.querySelector("#price");
// const all = form.firstElementChild.firstElementChild.firstElementChild;
// const none = form.children[6].firstElementChild.firstElementChild;
// console.log(all);
// console.log(checks)
// let sum =0;
//     checks.forEach(function(check) {
//         check.addEventListener("change",function(event){
//             if(this.checked) {
//             sum+=parseFloat(this.dataset.price);
//             price.innerText = `${sum} zł`;
//         } else{
//             sum-=parseFloat(this.dataset.price);
//             price.innerText = `${sum} zł`;
//         }
//     })
// })
// all.addEventListener("change", function (event) {
//     if(all.checked) {
//         sum = 0;
//         checks.forEach(function(check) {
//             check.checked = true;
//             check.setAttribute("disabled","disabled");
//             sum+=parseFloat(check.dataset.price);
//         });
//         price.innerText = `${sum} zł`;
//     } else {

//         sum = 0;
//         checks.forEach(function(check) {
//             check.checked = false;
//             check.removeAttribute("disabled");
//         })
//         price.innerText = `${sum} zł`;
//     };
// });
// none.addEventListener("change", function (event) {
//     if(none.checked) {
//         sum = 0;
//         price.innerText = `${sum} zł`;
//         all.setAttribute("disabled","disabled");
//         all.checked = false;
//         checks.forEach(function(check) {
//             check.setAttribute("disabled","disabled")
//             check.checked = false;
//                 })
//         } else {
//             all.removeAttribute("disabled");
//             checks.forEach(function(check) {
//             check.removeAttribute("disabled");
//         })
//         };
//     });
//     const newEl= document.createElement("div");
//        document.querySelector(".panel-body").appendChild(newEl);
//     form.addEventListener("submit",function() {
//        event.preventDefault();
//        newEl.innerText = `Do zapłaty : ${sum} zł`;
//     })

// const form = document.querySelector("form");
// const checks = document.querySelectorAll("[data-price]");
// const price = document.querySelector("#price");
// const all = form.firstElementChild.firstElementChild.firstElementChild;
// const none = form.children[6].firstElementChild.firstElementChild;
// console.log(all);
// console.log(checks)
// let sum =0;
//     checks.forEach(function(check) {
//         check.addEventListener("change",function(event){
//             if(this.checked) {
//             sum+=parseFloat(this.dataset.price);
//             price.innerText = `${sum} zł`;
//         } else{
//             sum-=parseFloat(this.dataset.price);
//             price.innerText = `${sum} zł`;
//         }
//     })
// })
// all.addEventListener("change", function (event) {
//     if(all.checked) {
//         sum = 0;
//         checks.forEach(function(check) {
//             check.checked = true;
//             check.setAttribute("disabled","disabled");
//             sum+=parseFloat(check.dataset.price);
//         });
//         price.innerText = `${sum} zł`;
//     } else {
//         sum = 0;
//         checks.forEach(function(check) {
//             check.checked = false;
//             check.removeAttribute("disabled");
//         })
//         price.innerText = `${sum} zł`;
//     };
// });
// none.addEventListener("change", function (event) {
//     if(none.checked) {
//         sum = 0;
//         price.innerText = `${sum} zł`;
//         all.setAttribute("disabled","disabled");
//         all.checked = false;
//         checks.forEach(function(check) {
//             check.setAttribute("disabled","disabled")
//             check.checked = false;
//                 })
//         } else {
//             all.removeAttribute("disabled");
//             checks.forEach(function(check) {
//             check.removeAttribute("disabled");
//         })
//         };
//     });
//     const newEl= document.createElement("div");
//        document.querySelector(".panel-body").appendChild(newEl);
//     form.addEventListener("submit",function() {
//        event.preventDefault();
//        newEl.innerText = `Do zapłaty : ${sum} zł`;
//     })

// const form = document.querySelector("form");
// const checks = document.querySelectorAll("[data-price]");
// const price = document.querySelector("#price");
// const all = form.firstElementChild.firstElementChild.firstElementChild;
// const none = form.children[6].firstElementChild.firstElementChild;
// console.log(all);
// let sum = 0;
// checks.forEach(function(check) {
//     console.log(checks)
//     check.addEventListener("change",function(event){
//         if(this.checked) {
//             sum+=parseFloat(this.dataset.price);
//             price.innerText = `${sum.toFixed(1)} zł`;
//         } else{
//             sum-=parseFloat(this.dataset.price);
//             price.innerText = `${sum.toFixed(1)} zł`;
//         }
//     })
// })
// all.addEventListener("change", function (event) {
//     if(all.checked) {
//         sum = 0;
//         checks.forEach(function(check) {
//             check.checked = true;
//             check.setAttribute("checked","checked");
//             sum+=parseFloat(check.dataset.price);
//         });
//         price.innerText = `${sum.toFixed(1)} zł`;
//     } else {
//         sum = 0;
//         checks.forEach(function(check) {
//             check.checked = false;
//             check.removeAttribute("checked");
//         })
//         price.innerText = `${sum.toFixed(1)} zł`;
//     };
// });
// none.addEventListener("change", function (event) {
//     if(none.checked) {
//         sum = 0;
//         price.innerText = `${sum.toFixed(1)} zł`;
//         // all.setAttribute("checked","checked");
//         // all.checked = false;
//         checks.forEach(function(check) {
//             // check.setAttribute("checked","checked")
//             check.checked = false;
//         })
//     } else {
//         // all.removeAttribute("checked");
//         // checks.forEach(function(check) {
//         //     check.removeAttribute("checked");
//         // })
//     };
// });
// const newEl= document.createElement("div");
// document.querySelector(".panel-body").appendChild(newEl);
// form.addEventListener("submit",function() {
//     event.preventDefault();
//     newEl.innerText = `Do zapłaty : ${sum.toFixed(1)} zł`;
// })
const form = document.querySelector("form");
const checks = document.querySelectorAll("[data-price]");
const price = document.querySelector("#price");
const all = form.firstElementChild.firstElementChild.firstElementChild;
const none = form.children[6].firstElementChild.firstElementChild;
console.log(all);
let sum = 0;
checks.forEach(function (check) {
  console.log(checks);
  check.addEventListener("change", function (event) {
    if (this.checked) {
      sum += parseFloat(this.dataset.price);
      price.innerText = `${sum.toFixed(2)} zł`;
    } else {
      sum -= parseFloat(this.dataset.price);
      price.innerText = `${sum.toFixed(2)} zł`;
    }
  });
});
all.addEventListener("change", function (event) {
  if (all.checked) {
    sum = 0;
    checks.forEach(function (check) {
      check.checked = true;
      check.setAttribute("checked", "checked");
      sum += parseFloat(check.dataset.price);
    });
    price.innerText = `${sum.toFixed(2)} zł`;
  } else {
    sum = 0;
    checks.forEach(function (check) {
      check.checked = false;
      check.removeAttribute("checked");
    });
    price.innerText = `${sum.toFixed(1)} zł`;
  }
});
console.log(checks);
none.addEventListener("change", function (event) {
  if (none.checked) {
    sum = 0;
    price.innerText = `${sum.toFixed(2)} zł`;
    all.setAttribute("disabled", true);
    checks.forEach(function (check) {
      // check.setAttribute("checked","checked")
      check.checked = false;
    });

    checks.forEach((el) => {
      return el.setAttribute("disabled", true);
    });
    // all.setAttribute("checked","checked");
    // all.checked = false;
  } else {
    all.removeAttribute("disabled");
    checks.forEach((el) => {
      return el.removeAttribute("disabled");
    });
    // all.removeAttribute("checked");
    // checks.forEach(function(check) {
    //     check.removeAttribute("checked");
    // })
  }
});
const newEl = document.createElement("div");
document.querySelector(".panel-body").appendChild(newEl);
form.addEventListener("submit", function () {
  event.preventDefault();
  newEl.innerText = `Do zapłaty : ${sum.toFixed(2)} zł`;
});
