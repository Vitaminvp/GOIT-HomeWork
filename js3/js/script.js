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
    // parentElement.insertBefore(div,null);
  },
  createForm: function() {
    form = document.createElement('form');
    form.style.padding = '0 50px';
    div.appendChild(form);
  },
  createUl: function() {
    ol = document.createElement('ol');
    ol.className = 'order__list';
    form.appendChild(ol);
    for (var i = 1; i <= 3; i++) {
      li = document.createElement('li');
      li.className = 'order__item';
      li.innerHTML = '<h3>Вопрос №' + i + '</h3>';
      li.querySelector('h3').style.fontWeight = 'normal';
      li.style.textAlign = 'left';
      ol.appendChild(li);
      for (var j = 1; j <= 3; j++ ) {
        label = document.createElement('label');
        input = document.createElement('input');
        // text = document.createTextNode('Вариант ответа №' +j);
        // console.log(text);
        input.style.display = 'block';
        label.innerHTML = 'Вариант ответа №' +j;
        // input.style.background = '#cfe2f3';
        // input.style.border = '1px solid black';
        input.setAttribute('type', 'checkbox');
        // label.setAttribute('for', '');
        li.appendChild(input);
        input.appendChild(label);
        // label.appendChild(text);
      }
    }
  },
  createButton: function() {
    button = document.createElement('button');
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
