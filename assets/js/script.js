"use strict";

let off = document.querySelector('#off');
let on = document.querySelector('#on');
let ballOff = document.querySelector('.off');
let ballOn = document.querySelector('.on');
let logo = document.querySelector('#logo');
let bgMobile = document.querySelector('#bg-mobile');

off.addEventListener('click', function() {
 ballOn.hidden = true;
 ballOff.hidden = false;
 document.body.className = 'body-light';
 logo.src = 'assets/images/titolo.svg';
 bgMobile.classList.add('first-container-w');
});

on.addEventListener('click', function() {
  ballOn.hidden = false;
  ballOff.hidden = true;
  document.body.removeAttribute('class');
  logo.src = 'assets/images/titolo-bianco.svg';
  bgMobile.classList.remove('first-container-w');
});

let blockNotes = document.querySelector('.block-notes');
let openNotes = document.querySelector('.notes-icon');
let closeNotes = document.querySelector('#close-note');
let textarea = document.querySelector('textarea');

openNotes.addEventListener('click', function() {
  blockNotes.hidden = false;
  this.style.display = 'none';
});

closeNotes.addEventListener('click', function() {
  blockNotes.hidden = true;
  openNotes.removeAttribute('style');
});

let avviso = document.querySelector('.alert');

let bottmCanc = document.createElement('div');
bottmCanc.innerHTML = '<p>Cancel</p>';
bottmCanc.classList.add('bottom-canc');
bottmCanc.hidden = true;
blockNotes.append(bottmCanc);

textarea.addEventListener('keypress', function() {
  avviso.style.display = 'flex';
  bottmCanc.hidden = false;
});

bottmCanc.addEventListener('click', function() {
  textarea.value = '';
  avviso.style.display = 'none';
});

closeNotes.addEventListener('click', function() {
  if (textarea.value == '') {
    bottmCanc.hidden = true;
    avviso.style.display = 'none';
  }
});

let containerColor = document.querySelector('.container-color');
let monitor = document.createElement('div');
monitor.classList.add('monitor');
monitor.innerHTML = '<h3 id="result-number">0</h3>';
containerColor.after(monitor);
let tastiRowUno = document.createElement('div');
tastiRowUno.classList.add('tasti-row-1');
monitor.after(tastiRowUno);
let incrementaNumero = document.createElement('div');
incrementaNumero.classList.add('simbol-plus');
incrementaNumero.innerHTML = '<h3>+</h3>';
tastiRowUno.prepend(incrementaNumero);
let decrementaNumero = document.createElement('div');
decrementaNumero.classList.add('simbol-less');
decrementaNumero.innerHTML = '<h3>-</h3>';
tastiRowUno.append(decrementaNumero);

let resultNumber = document.querySelector('#result-number');
let delNumero = document.querySelector('#del-numero');

function incrementa()  {
resultNumber.textContent = +resultNumber.textContent + 1;
}
function decrementa() {
  if (resultNumber.textContent == '0') {
    resultNumber.textContent = 0;
  } else {
    resultNumber.textContent = +resultNumber.textContent - 1;
  }
}
function cancella() {
  if (resultNumber.textContent != 0) {
  resultNumber.textContent = 0;
  contatoreCancellazioni.textContent = +contatoreCancellazioni.textContent +1;
  contatoreCancellazioni.style.display = 'flex';
  closeCancellazioni.style.display = 'flex';
  bottmCancCancellazioni.hidden = false;
  openNew.style.visibility = 'hidden';
}}

incrementaNumero.addEventListener('click', incrementa);
decrementaNumero.addEventListener('click', decrementa);
delNumero.addEventListener('click', cancella);

let cancellation = document.querySelector('.cancellation');
let contatoreCancellazioni = document.querySelector('#contatore-cancellazioni');
contatoreCancellazioni.style.display = 'none';
let closeCancellazioni = document.querySelector('#close-cancellazioni');

closeCancellazioni.addEventListener('click',function() {
  contatoreCancellazioni.style.display = 'none';
  this.style.display = 'none';
  bottmCancCancellazioni.hidden = true;
  openNew.style.cursor = 'pointer';
  openNew.style.visibility = 'visible';
});

let openNew = document.querySelector('.open-cancellation');

openNew.addEventListener('click',function(){
  contatoreCancellazioni.style.display = 'flex';
  closeCancellazioni.style.display = 'flex';
  bottmCancCancellazioni.hidden = false;
  openNew.style.cursor = 'auto';
  openNew.style.visibility = 'hidden';
})

let bottmCancCancellazioni = document.createElement('div');
bottmCancCancellazioni.innerHTML = '<p>Reset</p>';
bottmCancCancellazioni.classList.add('bottom-canc');
bottmCancCancellazioni.hidden = true;
cancellation.append(bottmCancCancellazioni);

bottmCancCancellazioni.addEventListener('click', function() {
contatoreCancellazioni.textContent = 0;
});

let colorRosa = document.querySelector('.color-3');
let colorScuro = document.querySelector('.color-1-select');
let colorBianco = document.querySelector('.color-2');

colorBianco.addEventListener('click', function() {
  monitor.className = 'monitor-bianco';
  colorBianco.classList.add('color-2-select');
  colorScuro.className = 'color-1';
  colorRosa.className = 'color-3';
});

colorScuro.addEventListener('click', function() {
  monitor.className = 'monitor';
  colorBianco.classList.remove('color-2-select');
  colorScuro.className = 'color-1-select';
  colorRosa.className = 'color-3';
});

colorRosa.addEventListener('click', function() {
  monitor.className = 'monitor-rosa';
  colorRosa.classList.add('color-3-select');
  colorBianco.classList.remove('color-2-select');
  colorScuro.className = 'color-1';
});

let numberSave = document.querySelector('#number-save');
let simbolSave = document.querySelector('.simbol-save');
let tabella = document.querySelector('#tabella');
let orderNumber = 1;

simbolSave.addEventListener('click', function() {
  let time = new Date();
  let timeComplete = `${time.getHours()}:${time.getMinutes()}`;
  let xnumber = resultNumber.textContent;
  tabella.hidden = false;
  let countSave = document.createElement('tr');
  countSave.innerHTML = `<td id="order-number">#${orderNumber}</td><td id="number-save">${xnumber}</td><td id="time">${timeComplete}</td>`;
  countSave.style.cursor = 'pointer';
  tabella.append(countSave);
  closeRecord.removeAttribute('style');
  openRecord.style.visibility = 'hidden';
  alertRecord.hidden = false;
});

simbolSave.addEventListener('click', incrementaOrderNumber );

function incrementaOrderNumber() {
  orderNumber += 1;
  return orderNumber;
}

let record = document.querySelector('.record');
let closeRecord = document.querySelector('#close-record');
let openRecord = document.querySelector('.open-record');

openRecord.addEventListener('click', function() {
   tabella.hidden = false;
   openRecord.style.visibility = 'hidden';
   closeRecord.removeAttribute('style');
   alertRecord.hidden = false;
});

closeRecord.addEventListener('click', function() {
  tabella.hidden = true;
  openRecord.style.visibility = 'visible';
  closeRecord.style.display = 'none';
  alertRecord.hidden = true;
});

tabella.addEventListener('click', function() {
  let elemRemove = event.target;
  if (elemRemove.tagName == 'TD') {
  elemRemove.parentNode.remove();
}
});

let alertRecord = document.querySelector('.alert-record');
