
let booksId = [];
let booksName = [];
let bookStatus = [];

let soLuong = +prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?");

for (let i = 0; i < soLuong; i++) {

    let maSach;
    do {
        maSach = prompt("Nhập mã sách thứ " + (i + 1) + ":");
    } while (maSach === "");

    let tenSach;
    do {
        tenSach = prompt("Nhập tên sách thứ " + (i + 1) + ":");
    } while (tenSach === "");

    let luaChon;
    do {
        luaChon = parseInt(prompt(
            "Chọn tình trạng ban đầu:\n" +
            "1. Hỏng nhẹ\n" +
            "2. Hỏng nặng\n" +
            "3. Cần sửa gấp"
        ));
    } while (luaChon < 1 || luaChon > 3);

    let tinhTrang = "";
    if (luaChon === 1) tinhTrang = "Hỏng nhẹ";
    if (luaChon === 2) tinhTrang = "Hỏng nặng";
    if (luaChon === 3) tinhTrang = "Cần sửa gấp";

    booksId.push(maSach);
    booksName.push(tenSach);
    bookStatus.push(tinhTrang);
}

function inDanhSach() {
    console.log("Danh sách sách hiện tại:");
    if (booksId.length === 0) {
        console.log("Danh sách trống");
        return;
    }

    for (let i = 0; i < booksId.length; i++) {
        console.log(
            (i + 1) + ". " +
            booksId[i] + " | " +
            booksName[i] + " | " +
            bookStatus[i]
        );
    }
}

inDanhSach();
let tiepTuc = true;

while (tiepTuc) {
    let chon = parseInt(prompt(
        "Bạn muốn làm gì?\n" +
        "1. Sửa tình trạng một cuốn sách\n" +
        "2. Loại bỏ (xóa) một cuốn sách\n" +
        "0. Kết thúc và in báo cáo cuối"
    ));


    if (chon === 1) {
        let maCanSua = prompt("Nhập mã sách cần sửa:");
        let viTri = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === maCanSua) {
                viTri = i;
                break;
            }
        }

        if (viTri === -1) {
            console.log("Không tìm thấy mã sách!");
        } else {
            let chonMoi;
            do {
                chonMoi = +prompt(
                    "Chọn tình trạng mới:\n" +
                    "1. Hỏng nhẹ\n" +
                    "2. Hỏng nặng\n" +
                    "3. Cần sửa gấp\n" +
                    "4. Đã sửa xong\n" +
                    "5. Loại bỏ"
                );
            } while (chonMoi < 1 || chonMoi > 5);

            if (chonMoi === 1) bookStatus[viTri] = "Hỏng nhẹ";
            if (chonMoi === 2) bookStatus[viTri] = "Hỏng nặng";
            if (chonMoi === 3) bookStatus[viTri] = "Cần sửa gấp";
            if (chonMoi === 4) bookStatus[viTri] = "Đã sửa xong";
            if (chonMoi === 5) bookStatus[viTri] = "Loại bỏ";

            console.log("Đã cập nhật tình trạng.");
            inDanhSach();
        }
    }

    else if (chon === 2) {
        let maCanXoa = prompt("Nhập mã sách cần xóa:");
        let viTri = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === maCanXoa) {
                viTri = i;
                break;
            }
        }

        if (viTri === -1) {
            console.log("Không tìm thấy mã sách!");
        } else {
            booksId.splice(viTri, 1);
            booksName.splice(viTri, 1);
            bookStatus.splice(viTri, 1);

            console.log("Đã xóa sách khỏi danh sách.");
            inDanhSach();
        }
    }

    else if (chon === 0) {
        tiepTuc = false;
    }
}

let demDaSuaXong = 0;
let demLoaiBo = 0;

for (let i = 0; i < bookStatus.length; i++) {
    if (bookStatus[i] === "Đã sửa xong") demDaSuaXong++;
    if (bookStatus[i] === "Loại bỏ") demLoaiBo++;
}

console.log(" BÁO CÁO CUỐI ");
console.log("Tổng số sách còn lại: " + booksId.length);
console.log("Số sách đã sửa xong: " + demDaSuaXong);
console.log("Số sách loại bỏ: " + demLoaiBo);
console.log("Danh sách sách còn lại:");
inDanhSach();
