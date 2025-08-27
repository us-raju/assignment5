// heart icon functionality
let heartBtns = document.querySelectorAll(".wishlist");
for (let heartBtn of heartBtns) {
  let clicked = false;

  let heartIcon = document.querySelector(".heart_icon");
  heartBtn.addEventListener("click", function () {
    heartBtn.classList.toggle("fa-regular");
    heartBtn.classList.toggle("fa-solid");

    if (!clicked) {
      heartIcon.innerText++;
      clicked = true;
    } else {
      heartIcon.innerText--;
      clicked = false;
    }
  });
}

// copy button functionality

let copyBtns = document.querySelectorAll(".copyBtn");
let nums = document.querySelectorAll(".num");
let copyCount = document.getElementById("copyCount");
for (let i = 0; i < copyBtns.length; i++) {
  copyBtns[i].addEventListener("click", function () {
    let text = nums[i].innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("নাম্বার কপি হয়েছে: " + text);
        copyCount.innerText++;
      })
      .catch((err) => {
        alert("কপি করা যায়নি");
      });
  });
}

// Phone button functionality
let coinStr = document.querySelector(".coin");
let coin = parseInt(coinStr.innerText);
let phonesBtn = document.querySelectorAll(".phonBtn");
let miniTitle = document.querySelectorAll(".mini_title");
let phoneNumber = document.querySelectorAll(".num");
let deductCoin = 20;

for (let i = 0; i < phonesBtn.length; i++) {
  phonesBtn[i].addEventListener("click", function () {
    let titleName = miniTitle[i].innerText;
    let num = phoneNumber[i].innerText;
    if (coin < 20) {
      alert("আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    } else {
      alert("Calling " + titleName + " " + num);
      coin -= deductCoin;
      coinStr.innerText = coin;
    }
    let historySec = document.querySelector(".history_info");
    let date = new Date().toLocaleTimeString();
    let div = document.createElement("div");
    div.innerHTML = `
          <div class="flex items-center justify-between bg-[#FAFAFA] p-3 rounded-lg mb-2">
                  <div>
          <p class="text-[14px] text-[#111111]">${titleName}</p>
            <span class="text-[#5C5C5C] text-[14px]">${num}</span>
       </div>
        <div>
         <span class="text-[14px] text-[#111111]">${date}</span>
        </div>
                </div>
    `;
    historySec.appendChild(div);
  });
}
