function content(post){
    document.getElementById('left_content').innerHTML=noidung[post].list_left
    document.getElementById('main_content').innerHTML=noidung[post].main_content
    document.getElementById('right_content').innerHTML=noidung[post].list_right
}

function menuColor(a) {
    document.getElementsByClassName("parent1_menu")[a].style.background= "#fff";
}

function menuContent(c) {
var list = document.getElementById("list_right");
list.getElementsByTagName("a")[c].style.background= "#07c6ff";
list.getElementsByTagName("a")[c].style.color = "#202020";
list.getElementsByTagName("a")[c].style.fontWeight = "700"
}

// window.addEventListener('click', function(event){
// 	var box = document.getElementById('list_4');
// 	if (event.target != box && event.target.parentNode != box){
//         box.style.display = 'none';
//     }
// });

  //  click menu list 2
window.addEventListener('click', function(e){   
    if (document.getElementById('list_2').contains(e.target)){
      // Clicked in box
      document.getElementById('menu_list2').style.display = "block"
    } else{
      // Clicked outside the box
      document.getElementById('menu_list2').style.display = "none"
    }
  });

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