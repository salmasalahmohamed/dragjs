


let input=document.getElementById('todo-input');
let todo=document.getElementById('to-do');
 let  submit=document.getElementById('add-form');
let field=document.querySelectorAll('.task');
let boxs=document.querySelectorAll('.box');

let task2=document.querySelector('.task2');

field.forEach(function(e){
e.addEventListener('dragstart',function(event){
    console.log(event.task2);
    e.preventDefault;
    e.classList.add('is-dragging');

});
e.addEventListener('dragend',function(event){
    e.preventDefault;
    e.classList.remove('is-dragging');
  

});
e.addEventListener('drop', (event) => {
    event.preventDefault(); 
});
});


boxs.forEach(function(e){
    e.addEventListener('dragover',function(){
let selectedclass=document.querySelector('.is-dragging');
e.appendChild(selectedclass);

    });



});
submit.addEventListener('submit',function(e){
e.preventDefault();
let p=document.createElement('p');
p.classList.add('task')
p.setAttribute('draggable', 'true')

 p.addEventListener('dragstart',function(e){
    e.preventDefault;
    p.classList.add('is-dragging');

});
p.addEventListener('dragend',function(e){
    e.preventDefault;
    p.classList.remove('is-dragging');
  

});
p.innerHTML=input.value;
 todo.appendChild(p);
});

