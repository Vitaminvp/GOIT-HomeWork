var el = document.getElementsByClassName('menu-item');
for(var i=0; i<el.length; i++) {
   el[i].addEventListener("mouseenter", showSub, false);
   el[i].addEventListener("mouseleave", hideSub, false);
}
function showSub(e) {
   if(this.children.length>1) {
      this.children[1].style.display = "block";
      this.style.transition = "all 1s ease-in";
      this.classList.add('active');
   } else {
      return false;
   }
}
function hideSub(e) {
    if(this.children.length>1) {
      this.children[1].style.display = "none";
      this.children[1].style.display = "none";
      this.classList.remove('active');
    } else {
       return false;
    }
}
