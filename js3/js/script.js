var programmingTest = {
  createwrapper: function() {
    div = document.createElement('div');
    parentElement = document.body;
    div.className = "wrapper";
    div.innerHTML = "<h1>Тест по программированию</h1>";
    div.style.width = '800px';
    div.style.margin = '0 auto';

    div.style.border = '1px solid black';
    div.style.textAlign  = 'center';
    parentElement.appendChild(div);
  },
  createForm: function() {
    form = document.createElement('form');
    form.style.padding = '0 50px';
    div.appendChild(form);
  },
  createUl: function() {
    var ol = document.createElement('ol');
    ol.className = 'order__list';
    form.appendChild(ol);
    for (var i = 1; i <= 3; i++) {
      var li = document.createElement('li');
      li.className = 'order__item';
      var div2 = document.createElement('div');
      li.appendChild(div2);
      div2.innerHTML = '<h3>Вопрос №' + i + '</h3>';
      div2.querySelector('h3').style.fontWeight = 'normal';
      div2.style.textAlign = 'left';
      ol.appendChild(li);
      for (var j = 1; j <= 3; j++ ) {
        var label = document.createElement('label');
        var input = document.createElement('input');
        label.style.display = 'block';
        div2.appendChild(label);
        input.setAttribute('type', 'checkbox');
        label.appendChild(input);
        label.appendChild(document.createTextNode('Вариант ответа №' + j));
      }
    }
  },
  createButton: function() {
    var button = document.createElement('button');
    button.innerHTML = 'Проверить мои результаты';
    button.style.background = '#cfe2f3';
    button.style.lineHeight = '50px';
    button.style.border = '1px solid black';
    button.style.margin = '20px';
    button.style.padding = '0 20px';
    form.appendChild(button);
  }
}
programmingTest.createwrapper();
programmingTest.createForm();
programmingTest.createUl();
programmingTest.createButton();
