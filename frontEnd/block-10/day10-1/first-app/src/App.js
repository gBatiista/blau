import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const toDoList = [
  'fazer café',
  'limpar a casa',
  'fazer almoço',
  'estudar',
  'dormir'
]

function App() {
  return (
    <div>
      {toDoList.map((element) => Task(element))}
    </div>
  );
}

export default App;
