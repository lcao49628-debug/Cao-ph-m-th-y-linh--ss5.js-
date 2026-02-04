// Khai báo mảng rỗng để lưu tên sách
let danhSachSach = [];

// Hỏi người dùng số lượng sách trả
let soLuong = parseInt(prompt("Bạn muốn trả bao nhiêu cuốn sách?"));

// Nhập tên từng cuốn sách
for (let i = 0; i < soLuong; i++) {
    let tenSach = prompt("Nhập tên cuốn sách thứ " + (i + 1) + ":");
    danhSachSach.push(tenSach);
}

// In tổng số sách đã được trả
console.log("Tổng số sách đã được trả: " + danhSachSach.length);

// In danh sách sách đã trả
console.log("Danh sách sách đã trả:");

for (let i = 0; i < danhSachSach.length; i++) {
    console.log((i + 1) + ". " + danhSachSach[i]);
}
