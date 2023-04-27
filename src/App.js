import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import './App.css';

function App() { //every App component returns jsx. App is the top react component, the main website

  const[loading, setLoading] = useState(true) //loading is initially true 
  const [itemList, setItemList]= useState()  // the getter is the variable

  return (
    <main>
      <h1>To-do List</h1>
      <Header setLoading={setLoading} setItemList={setItemList} />
      <TodoList loading={loading}
       itemList={itemList} 
       setItemList={setItemList} 
       setLoading={setLoading}/>
    </main>
  );
}
  

export default App;


//setter is a function that allows us to change or mutate our state variable. setLoading allows us to change loading.