import './style.css';
import refreshIcon from './img/refreshIcon.png';

const todoList = [{
  description: 'Lorem met',
  bool: 'false',
  index: '1',
},

{
  description: 'Lorem met',
  bool: 'false',
  index: '2',
}];

const displayTodo = () => {
  const heading = document.querySelector('.heading');
  heading.innerHTML = ` <div class="title">
  <h1>Today's Todo</h1>
</div>
<div class="refresh">
<img class = "icon" src="${refreshIcon}" alt="reload">;

</div>`;
     todoContainer.appendChild(taskList);
 
};

displayTodo();
