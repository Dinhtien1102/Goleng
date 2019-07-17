a= data.bai_1['ten_bai']
b= data.bai_1['muc_luc']
c= data.bai_1['content']
d= data.bai_1['bai_khac']
function content(){
    // document.getElementById("banner_content").innerHTML= a
    // document.getElementById("left_content").innerHTML=  b 
    // document.getElementById("main_content").innerHTML = c
    // document.getElementById("right_content").innerHTML= d 
}

// console.log(data.bai_1.ten_bai, data.bai_1.muc_luc, data.bai_1.content, data.bai_1.bai_khac,)
// console.log(data.bai_1['muc_luc'])
// console.log(data.bai_1.content)
// console.log(data.bai_1.bai_khac)
// console.log(data.bai_1.bai_khac[0])
// document.getElementById("helo").innerHTML= data.bai_1.ten_bai
// document.getElementById("concac").innerHTML=data.bai_2.bai_khac[2]
// document.getElementById("vd3").innerHTML=data.bai_2['bai_khac']
// console.log(data.bai_1['content'])
// console.log(data.bai_1['ten_bai'])


/*
    key = {ten_bai, muc_luc}

    co the key = 'ten_bai'
    data.bai_1[key]

    - Co 2 cach goi den con trong OBJECT
    data.bai_1['muc_luc'] <=> data.bai_1.muc_luc
*/

// Van Tuan
// 1 - noidung['bai1']
// 2 - Function nhan tham so
bai1=noidung['bai1']
bai2=noidung['bai2']
bai3=noidung['bai3']
function tuan(bai1,bai2,bai3) {
    console.log(bai1)
    console.log(bai2)
    console.log(bai3)
}

function tuan1() {
    console.log(noidung.bai2)
}

function tuan2() {
    console.log(noidung.bai3)
}