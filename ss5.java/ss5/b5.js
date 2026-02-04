
let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];

let soLuong = +prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?");

for (let i = 0; i < soLuong; i++) {
    let maSach;
    let trungLap;
    do {
        maSach = prompt("Nhập mã sách thứ " + (i + 1) + ":");
        trungLap = false;

        if (maSach === "") {
            continue;
        }

        for (let j = 0; j < booksId.length; j++) {
            if (booksId[j] === maSach) {
                trungLap = true;
                break;
            }
        }
    } while (maSach === "" || trungLap);

    let tenSach;
    do {
        tenSach = prompt("Nhập tên sách thứ " + (i + 1) + ":");
    } while (tenSach === "");
    let theLoai;
    do {
        theLoai = prompt(
            "Nhập các thể loại của sách thứ " + (i + 1) +
            " (các thể loại cách nhau bởi dấu phẩy):"
        );
    } while (theLoai === "");

    let tonKho;
    do {
        tonKho =+prompt("Nhập số lượng tồn kho của sách thứ " + (i + 1) + ":");
    } while (isNaN(tonKho) || tonKho < 0);

    booksId.push(maSach);
    booksName.push(tenSach);
    booksCategory.push(theLoai);
    inventoryQuantity.push(tonKho);
}

let demLapTrinh = 0;

for (let i = 0; i < booksCategory.length; i++) {
    let chuoiTheLoai = booksCategory[i].toLowerCase();
    if (chuoiTheLoai.includes("lập trình")) {
        demLapTrinh++;
    }
}

console.log("Tổng số sách thuộc thể loại 'Lập trình': " + demLapTrinh);

console.log("Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':");

let timThay = false;

for (let i = 0; i < booksCategory.length; i++) {
    let chuoi = booksCategory[i].toLowerCase();

    if (chuoi.includes("javascript") && chuoi.includes("web")) {
        console.log(booksId[i]);
        timThay = true;
    }
}

if (!timThay) {
    console.log("Không có sách nào phù hợp");
}

let viTriMin = 0;

for (let i = 1; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] < inventoryQuantity[viTriMin]) {
        viTriMin = i;
    }
}

console.log("Loại sách có số lượng tồn kho thấp nhất:");
console.log(
    "Mã sách: " + booksId[viTriMin] +
    ", Tên sách: " + booksName[viTriMin] +
    ", Tồn kho: " + inventoryQuantity[viTriMin]
);
