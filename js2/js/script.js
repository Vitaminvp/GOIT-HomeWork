// alert('hello');


function myArr() {
  var arrey = [];
  for (var i=0; i < 5; i++) {
    arrey[i] = prompt('Введите '+(i+1)+'-й елемент массива.' );
    // console.log(arrey[i]);
  }
  return arrey;
}

var arr = myArr();
// console.log(arr);

function compare(name) {
  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    var enter;
      if (arr[i] == name) {
        enter = true;
        break;
      } else {
        enter = false;
      }
  }
  if (enter) {
    alert(name + ', Вы вошли.');
  } else {
    alert('Error.');
  }
}
compare(name = prompt( 'Введите имя пользователя.' ));
