"use strict";
var strTS = "welcome to this course";
console.log(strTS);
var strTS1 = "welcome to this course welcome to this course welcome to this course welcome to this course welcome to this course welcome to this course welcome to this course welcome to this course";
console.log(strTS1);
function getvalue() {
}

//Bắt hình trùng khớp
let firstClickedCard = null;

function handleCardClick(card) {
    if (!firstClickedCard) {
        firstClickedCard = card;
        card.style.backgroundColor = 'gray'; //Màu nền ban đầu
    } else {
        //Đổi màu khi khớp với đường dẫn hình ảnh
        if (card.querySelector('img').src === firstClickedCard.querySelector('img').src) {
            card.style.backgroundColor = 'gray';
            firstClickedCard = null;
        } else {
            //Thời gian set delay
            setTimeout(() => {
                card.style.backgroundColor = '';
                firstClickedCard.style.backgroundColor = '';
                firstClickedCard = null;
            }, 500);
        }
    }
}

//Bắt lỗi form
function validateForm() {
    var input = document.getElementById("inputField").value;
    var errorField = document.getElementById("errorField");

    //Validate không được để trống
    if (input.trim() === '') {
        errorField.innerText = "Trường này không được để trống";
        return false;
    }

    //Validate kí tự đặc biệt
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specialChars.test(input)) {
        errorField.innerText = "Không được chứa ký tự đặc biệt";
        return false;
    }

    //Validate chỉ có chứa 1 ký tự không
    if (input.length === 1) {
        errorField.innerText = "Không được chỉ chứa 1 ký tự";
        return false;
    }

    //Nếu form hợp lệ trả kết quả
    return true;
}

// Thêm dữ liệu vào form khi tên được chọn

//Xóa dữ liệu đã nhập trên form
function cancelForm() {
    document.getElementById("myForm").reset();
}

//Loading lại 
function reloadPage() {
    location.reload();
}
