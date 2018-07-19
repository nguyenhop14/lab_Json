function sort() {
    //this.disabled = true;
    var r = document.getElementById("data_table").rows;
    for (var i = 1; i < r.length; i++){
        for (var j = i+1; j < r.length; j++){
            if (r[i].cells[2].innerHTML.substring(0,1).toLowerCase() > r[j].cells[2].innerHTML.substr(0,1).toLowerCase()) {
                var tmp;
                tmp = r[i].cells[2].innerHTML;
                r[i].cells[2].innerHTML = r[j].cells[2].innerHTML;
                r[j].cells[2].innerHTML = tmp;
                tmp = r[i].cells[1].innerHTML;
                r[i].cells[1].innerHTML = r[j].cells[1].innerHTML;
                r[j].cells[1].innerHTML =tmp;

            }
        }
    }
    return true;
}
// sắp xếp tăng
function sort_increase(e) {
    e.disabled = true;
    var r = document.getElementById("data_table").rows;
    var k, t;
    e.className = "increase";
    if (e.innerText == 'Mã sản phẩm'){
        k = 1;
        t = 2;

        document.getElementById('name').className = 'normal';
    }
    else if(e.innerText == 'Tên sản phẩm' || e.innerHTML == 'Sắp xếp sản phẩm'){
        k = 2;
        t = 1;
        document.getElementById('id').className = 'normal';
    }

    for (var i = 1; i < r.length; i++){
        for (var j = i+1; j < r.length; j++){
            if (r[i].cells[k].innerHTML.toLowerCase() > r[j].cells[k].innerHTML.toLowerCase()) {
                var tmp;
                tmp = r[i].cells[k].innerHTML;
                r[i].cells[k].innerHTML = r[j].cells[k].innerHTML;
                r[j].cells[k].innerHTML = tmp;
                tmp = r[i].cells[t].innerHTML;
                r[i].cells[t].innerHTML = r[j].cells[t].innerHTML;
                r[j].cells[t].innerHTML =tmp;

            }
        }
    }
    return true;
}

// hàm kiểm tra tăng
function check_in(e) {
    var r = document.getElementById("data_table").rows;
    var k;
    if (e == document.getElementById('id')){
        k = 1;
    }
    else if(e == document.getElementById('name')){
        k = 2;
    }
    var check = true;
    for (var i = 1; i < r.length; i++){
        for (var j = i+1; j < r.length; j++){
            if (r[i].cells[k].innerHTML.toLowerCase() < r[j].cells[k].innerHTML.toLowerCase()) {
                check = false;
                break;
            }
        }
    }
    if(check == true){
        e.className = 'increase';
    }
    else {
        e.className = 'normal';
    }
}


// function sort_true(e) {
//     if ( sort_increase(e)) {
//         e.className = "increase";
//     }
//     else {
//         e.className = 'normal';
//     }
// }
// hàm sắp xếp giảm
function sort_decrease(e) {
    var k, t;
    e.className = 'decrease';
    if (e.innerText == 'Mã sản phẩm'){
        k = 1;
        t = 2;
        document.getElementById('name').className = 'normal';
        // e.innerHTML = "Mã sản phẩm ↑";
        // document.getElementById('name').innerHTML = 'Tên sản phẩm ';
    }
    else if(e.innerText == 'Tên sản phẩm' || e.innerHTML == 'Sắp xếp sản phẩm'){
        k = 2;
        t = 1;
        document.getElementById('id').className = 'normal';
        // e.innerHTML = 'Tên sản phẩm ↑';
        // document.getElementById('id').innerHTML = "Mã sản phẩm ";
    }
    e.disabled = true;
    var r = document.getElementById("data_table").rows;
    for (var i = 1; i < r.length; i++){
        for (var j = i+1; j < r.length; j++){
            if (r[i].cells[k].innerHTML.toLowerCase() < r[j].cells[k].innerHTML.toLowerCase()) {
                var tmp;
                tmp = r[i].cells[k].innerHTML;
                r[i].cells[k].innerHTML = r[j].cells[k].innerHTML;
                r[j].cells[k].innerHTML = tmp;
                tmp = r[i].cells[t].innerHTML;
                r[i].cells[t].innerHTML = r[j].cells[t].innerHTML;
                r[j].cells[t].innerHTML =tmp;

            }
        }
    }
}
// hàm để xác định sắp xếp tăng hay giảm
var i = 0;
function click_title(e) {
    i++;
    if(i % 2 ==1){
        sort_increase(e);
    }
    else {
        sort_decrease(e)
    }
}
function show(e) {
    alert(e.innerText);
}

//

// noinspection JSAnnotator

function hidden_data() {
    document.location.href = "index.html";
}