function content(post){
    document.getElementById('title_banner').innerHTML=noidung[post].title_banner
    document.getElementById('note_banner').innerHTML=noidung[post].note_banner
    document.getElementById('left_content').innerHTML=noidung[post].list_left
    document.getElementById('main_content').innerHTML=noidung[post].main_content
    document.getElementById('right_content').innerHTML=noidung[post].list_right
}