function content(post){
    document.getElementById('title_banner').innerHTML=noidung[post].title_banner
    document.getElementById('note_banner').innerHTML=noidung[post].note_banner
    document.getElementById('left_content').innerHTML=noidung[post].list_left
    document.getElementById('main_content').innerHTML=noidung[post].main_content
    document.getElementById('right_content').innerHTML=noidung[post].list_right
}

function menuColor(a) {
    document.getElementsByClassName("parent1_menu")[a].style.background= "#fff";
}

function menuMobi(b) {
    if (document.getElementById(b).style.display == "") {
        document.getElementById(b).style.display = "block"
    }

    else if (document.getElementById(b).style.display == "none") {
        document.getElementById(b).style.display = "block"
    }

    else if (document.getElementById(b).style.display == "block") {
        document.getElementById(b).style.display = "none"
    }
}

function menuContent(c) {
var list = document.getElementById("left_content");
list.getElementsByTagName("a")[c].style.background= "#ffc40a";
list.getElementsByTagName("a")[c].style.color = "#202020";
list.getElementsByTagName("a")[c].style.fontWeight = "700"
}
