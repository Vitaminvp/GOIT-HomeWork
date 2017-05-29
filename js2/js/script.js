function myArr() {
  var arrey = [];
  for (var i=0; i < 5; i++) {
    arrey[i] = prompt('Введите '+(i+1)+'-й елемент массива.' );
    if (arrey[i] == '') {
      arrey[i] = prompt('Нужно чтото ввести.' );
    }
  }
  return arrey;
}

var arr = myArr();

function compare(name) {
  for (var i = 0; i < arr.length; i++) {
    var enter;
      if ( (arr[i] == name) & (arr[i] !==  '') ) {
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
