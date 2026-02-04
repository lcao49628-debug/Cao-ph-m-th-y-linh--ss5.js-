
let booksId = [];
let booksName = [];
let inventoryQuantity = [];

let soLuong = +prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?");

for (let i = 0; i < soLuong; i++) {

    let maSach;
    do {
        maSach = prompt("Nhập mã sách thứ " + (i + 1) + ":");
    } while (maSach === "");

    let tenSach;
    do {
        tenSach = prompt("Nhập tên sách thứ " + (i + 1) + ":");
    } while (tenSach === "");

    let soLuongTon;
    do {
        soLuongTon = parseInt(prompt("Nhập số lượng tồn kho của sách thứ " + (i + 1) + ":"));
    } while (isNaN(soLuongTon) || soLuongTon < 0);

    booksId.push(maSach);
    booksName.push(tenSach);
    inventoryQuantity.push(soLuongTon);
}

console.log("Tổng số loại sách đang kiểm tra: " + booksId.length);

let demUuTien = 0;
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] <= 5) {
        demUuTien++;
    }
}
console.log("Số lượng sách cần ưu tiên bổ sung (tồn kho ≤ 5): " + demUuTien);

console.log("Các mã sách đã hết hàng:");

let coSachHet = false;
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] === 0) {
        console.log("- " + booksId[i]);
        coSachHet = true;
    }
}

if (!coSachHet) {
    console.log("Không có sách nào hết hàng");
}

console.log("Danh sách chi tiết các sách:");

for (let i = 0; i < booksId.length; i++) {
    console.log(
        (i + 1) + ". Mã sách: " + booksId[i] +
        " | Tên sách: " + booksName[i] +
        " | Tồn kho: " + inventoryQuantity[i]
    );
}
