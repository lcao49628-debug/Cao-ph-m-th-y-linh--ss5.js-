
let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let soLuong = +prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?");

for (let i = 0; i < soLuong; i++) {

    let maThe;
    let trungLap;
    do {
        maThe = prompt("Nhập mã thẻ bạn đọc thứ " + (i + 1) + ":");
        trungLap = false;

        for (let j = 0; j < readerCardIds.length; j++) {
            if (readerCardIds[j] === maThe) {
                trungLap = true;
                break;
            }
        }
    } while (maThe === "" || trungLap);

    let ten;
    do {
        ten = prompt("Nhập tên bạn đọc thứ " + (i + 1) + ":");
    } while (ten === "");

    do {
        maSachMuon = prompt(
            "Nhập các mã sách đang mượn (cách nhau bởi dấu phẩy):"
        );
    } while (maSachMuon === "");

    let ngayQuaHan;
    do {
        ngayQuaHan = parseInt(prompt("Nhập số ngày quá hạn:"));
    } while (isNaN(ngayQuaHan) || ngayQuaHan < 0);

    readerCardIds.push(maThe);
    readerNames.push(ten);
    borrowedBookCodes.push(maSachMuon);
    overdueDays.push(ngayQuaHan);
}

let demQuaHan10 = 0;

for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 10) {
        demQuaHan10++;
    }
}

console.log("Tổng số bạn đọc quá hạn từ 10 ngày trở lên: " + demQuaHan10);

console.log("Các mã thẻ bạn đọc mượn cả sách JS và PYT:");

let timThay = false;

for (let i = 0; i < borrowedBookCodes.length; i++) {
    let chuoi = borrowedBookCodes[i].toUpperCase();

    if (chuoi.includes("JS") && chuoi.includes("PYT")) {
        console.log(readerCardIds[i]);
        timThay = true;
    }
}

if (!timThay) {
    console.log("Không có bạn đọc nào phù hợp");
}

let viTriMax = 0;

for (let i = 1; i < overdueDays.length; i++) {
    if (overdueDays[i] > overdueDays[viTriMax]) {
        viTriMax = i;
    }
}

console.log(
    "Bạn đọc có số ngày quá hạn cao nhất: " +
    readerNames[viTriMax] +
    " (" + overdueDays[viTriMax] + " ngày)"
);

let demQuaHan7 = 0;

for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 7) {
        demQuaHan7++;
    }
}

if (demQuaHan7 === 0) {
    console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (demQuaHan7 >= 1 && demQuaHan7 <= 4) {
    console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
    console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}
