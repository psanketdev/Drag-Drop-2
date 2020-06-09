/*Authohr: Sanket Patil*/

console.log('This is a Drag & Drop Task');

'use strict';
window.onload = function() {

const start = document.getElementById('start');
const restart = document.getElementById('restart');
const DragableBtn = document.querySelectorAll('.task');
const dropBoxs = document.getElementsByClassName('drop');
let item;

start.addEventListener('click', startDragFunction);
function startDragFunction() {

  if (start.innerHTML == 'start') {
    start.innerHTML = 'stop';
      DragableBtn.forEach(function (btn) {    // apply forEach function to all btn
      btn.draggable = true;                  // return draggable true
      btn.addEventListener('dragstart', dragStart);
      btn.addEventListener('dragend', dragEnd);
    })

    // dragStart function start here
    function dragStart(e) {
      console.log('drag event start');
      item = e.target;
      setTimeout(function () {
        item.classList.add('none');
        console.log('apply none class');
      }, 0)
    }

    // dragEnd function start here
    function dragEnd(e) {
      console.log('drag event end');
      item = e.target;
      item.classList.remove('none');
      item.classList.add('style');
    }

    for (let box of dropBoxs) {
      box.addEventListener('dragover', function (e) {
        e.preventDefault();
        console.log('drag over event start');
      })

      box.addEventListener('dragenter', function (e) {
        console.log('drag enter event start');
      })

      box.addEventListener('dragleave', function () {
        console.log('drag leave event start');
      })

      box.addEventListener('drop', function (e) {
        console.log('drop event start');
        e.target.append(item);
      });
    }
  }
  else if (start.innerHTML == 'stop') {
    start.innerHTML = 'start';
    DragableBtn.forEach(function (btn) {  
      btn.draggable = false;            // return draggable false
    })
  } 
}

restart.addEventListener('click', function() {
  window.location.reload();
});
};
