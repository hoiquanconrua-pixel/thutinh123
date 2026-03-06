// Cấu hình nội dung
var letterContent = "CHO DK XIN LOII hoặc nội dung dài hơn, mm🥺"
var durationWrite = 50 

// Hàm mở khóa chính
function unlockSite() {
    const input = document.getElementById('password-field').value;
    const pass = "1402"; // Thay đổi mật khẩu tại đây

    if (input === pass) {
        // Ẩn màn hình khóa
        document.getElementById('auth-overlay').style.opacity = "0";
        setTimeout(() => {
            document.getElementById('auth-overlay').style.display = 'none';
            
            // Hiện nội dung chính
            const container = document.querySelector('.container');
            container.classList.add('show-main');
            
            // Kích hoạt hiệu ứng sau khi hiện container
            setTimeout(() => {
                container.classList.add("active");
            }, 100);
        }, 500);
    } else {
        const card = document.querySelector('.auth-card');
        card.classList.add('shake');
        document.getElementById('error-alert').style.display = 'block';
        setTimeout(() => card.classList.remove('shake'), 500);
    }
}

// Lắng nghe phím Enter
document.getElementById('password-field').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') unlockSite();
});

// Các hàm xử lý hiệu ứng cũ của bạn
function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    boxLetter.innerHTML = "";
    var letterContentSplited = letterContent.split("")
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => { boxLetter.innerHTML += val }, durationWrite * index)
    })
}

document.querySelector(".openBtn").addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")
cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")
    if(cardValentine.classList.contains("open")) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => { document.querySelector(".letterContent").innerHTML = "" }, 1000)
    }
})
