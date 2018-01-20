
var startTime = 0;
var delay = 0;

var Timer = {

      createWrapper() {
          var div = document.createElement('div');
          div.classList.add('wrapper');
          div.style.margin = '50px auto';
          div.style.textAlign = 'center';
          div.style.width = '221px';
          document.body.appendChild(div);
      },

      createTimeTable() {
          var timeTable = document.createElement('p');
          timeTable.id = 'timeTable';
          timeTable.classList.add('btn', 'btn-default');
          timeTable.style.display = 'block';
          timeTable.style.marginBottom = '5px';
          timeTable.innerHTML = '00 : 00 : 00 <span style="color:red; font-size:smaller">: 000</span>';
          wrap = document.getElementsByClassName('wrapper');
          wrap[0].appendChild(timeTable);
      },

      createButtons() {
          var buttonsWrp = document.createElement('div');
          wrap[0].appendChild(buttonsWrp);
          var startBtn = document.createElement('button');
          startBtn.type = 'button';
          startBtn.style.marginRight = '3px';
          startBtn.style.width = '80px';
          startBtn.classList.add('btn', 'btn-success');
          startBtn.innerHTML = 'Start';
          startBtn.id = 'Start';
          startBtn.addEventListener("click", timerStart);
          buttonsWrp.appendChild(startBtn);
          var splitBtn = document.createElement('button');
          splitBtn.type = 'button';
          splitBtn.style.marginRight = '3px';
          splitBtn.style.width = '55px';
          splitBtn.classList.add('btn', 'btn-info');
          splitBtn.innerHTML = 'Split';
          splitBtn.id = 'Split';
          splitBtn.addEventListener("click", timerSplit);
          buttonsWrp.appendChild(splitBtn);
          var stopBtn = document.createElement('button');
          stopBtn.type = 'button';
          stopBtn.style.width = '80px';
          stopBtn.classList.add('btn', 'btn-danger');
          stopBtn.innerHTML = 'Stop';
          stopBtn.id = 'Stop';
          stopBtn.addEventListener('click', timerStop);
          buttonsWrp.appendChild(stopBtn);
      },
      createSplitList() {
          var ol = document.createElement('ol');
          ol.id = 'ol';
          ol.style.marginTop = '10px';
          wrap[0].appendChild(ol);
      }
}
Timer.createWrapper();
Timer.createTimeTable();
Timer.createButtons();
Timer.createSplitList();

var timeTable = document.getElementById('timeTable');
var startBtn = document.getElementById('Start');
var stopBtn = document.getElementById('Stop');
var ol = document.getElementById('ol');

function setNullsBefore(m, n) {
  var m = String(m);
  while (m.length < n) {
    m = "0" + m;
  } return m;
}

function timerStart() {
    this.innerHTML = 'Pause';
    this.classList.remove('btn-success');
    this.classList.add('btn-primary');
    this.removeEventListener("click", timerStart);
    this.addEventListener("click", timerPause);
    if (delay) {
      startTime = startTime + Date.now() - delay;
    } else {
      startTime =  Date.now();
    }

    timerTime = setInterval(
      function() {
        ms = Date.now() - startTime;
        s = Math.floor(ms / 1000);
        min = Math.floor(s / 60);
        h = Math.floor(min / 60);
        timeTable.innerHTML = setNullsBefore(h%24, 2) + ' : ' + setNullsBefore(min%60, 2) + ' : ' + setNullsBefore(s%60, 2) + ' <span style="color:red; font-size:smaller">: ' +setNullsBefore(ms%1000, 3) + '</span>';
      }, 1);
}

function timerPause() {
    startBtn.classList.remove('btn-primary');
    startBtn.classList.add('btn-success');
    startBtn.innerHTML = 'Continue';
    startBtn.removeEventListener("click", timerPause);
    startBtn.addEventListener("click", timerStart);
    delay = Date.now();
    clearInterval(timerTime);
    var li = document.createElement('li');
    ol.appendChild(li);
    li.innerHTML = timeTable.innerHTML;
}

function timerSplit() {
  if (startBtn.innerHTML == 'Pause') {
      var li = document.createElement('li');
      ol.appendChild(li);
      li.innerHTML = timeTable.innerHTML;
  }
}

function timerStop() {
    startBtn.classList.remove('btn-primary');
    startBtn.classList.add('btn-success');
    startBtn.removeEventListener("click", timerPause);
    startBtn.addEventListener("click", timerStart);
    startBtn.innerHTML = 'Start';
    clearInterval(timerTime);
    delay = 0;
    ms = 0;
    s = 0;
    min = 0;
    h = 0;
    timeTable.innerHTML = '00 : 00 : 00 <span style="color:red; font-size:smaller">: 000</span>';
    while (ol.lastChild) {
        ol.removeChild(ol.lastChild);
    }
}

