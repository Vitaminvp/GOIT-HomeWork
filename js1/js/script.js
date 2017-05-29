
var x = prompt('Введите число:');
var n = prompt('Введите степень:');

x = parseInt(x);
n = parseInt(n);
console.log( typeof(x) );
console.log( typeof(n) );
console.log( 'x =', x );
console.log( 'n =', n );

if ( isNaN(x) & isNaN(n) ) {
  alert('Введите числа.');
} else {
  if (n >= 0) {
    alert( pow(x, n) );
  } else {
    alert('Error!');
  }
}

function pow(x, n) {
  var result = 1;
  for (var i=0; i < n; i++) {
    result *= x;
    console.log( 'result: ', result );
  }
  return result;
}
