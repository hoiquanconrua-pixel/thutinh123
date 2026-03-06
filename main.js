// 1. Khai báo nội dung bức thư
var letterContent = " LOII hoặc nội dung dài hơn, mm🥺"
var durationWrite = 50 

// 2. Hàm mở khóa - CHỈ KHI CHẠY HÀM NÀY MỚI HIỆN CONTAINER
function unlockSite() {
    const input = document.getElementById('password-field').value;
    const pass = "1402"; // Mật khẩu của bạn

    if (input === pass) {
        // Ẩn màn hình khóa
        document.getElementById('auth-overlay').style.display = 'none';
        
        // Hiện container chính
        const container = document.querySelector('.container');
        container.style.display = "block"; // Ép hiển thị container
        
        // Kích hoạt các hiệu ứng mây và tim bay
        setTimeout(() => {
            container.classList.add("active");
        }, 100);
    } else {
        // Báo lỗi nếu sai
        document.getElementById('error-alert').style.display = 'block';
        const card = document.querySelector('.auth-card');
        card.style.animation = "none";
        setTimeout(() => {
            card.style.animation = "shakeAnim 0.5s ease-in-out";
        }, 10);
    }
}

// 3. Các logic nút bấm Valentine (Giữ nguyên nhưng bỏ phần tự chạy lúc load)
var openBtn = document.querySelector(".openBtn")
if(openBtn) {
    openBtn.addEventListener("click", () => {
        document.querySelector(".cardValentine").classList.add("active")
        document.querySelector(".container").classList.add("close")
    })
}

var cardValentine = document.querySelector(".cardValentine")
if(cardValentine) {
    cardValentine.addEventListener("click", () => {
        cardValentine.classList.toggle("open")
        if(cardValentine.classList.contains("open")) {
            setTimeout(effectWrite, 500)
        } else {
            setTimeout(() => {
                document.querySelector(".letterContent").innerHTML = ""
            }, 1000)
        }
    })
}

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    boxLetter.innerHTML = "";
    var letterContentSplited = letterContent.split("")
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => { boxLetter.innerHTML += val }, durationWrite * index)
    })
}

// Lắng nghe phím Enter cho ô mật khẩu
document.getElementById('password-field').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') unlockSite();
});
