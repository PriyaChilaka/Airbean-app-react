//import logo from './logo.png'

import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import TodoItem from './components/MenuItem';
import AddMenu from './components/AddMenu';

import actions from './actions/menuAction';


function App() {
  const menu = useSelector((state) => { return state.menu})
  const dispatch = useDispatch()

  useEffect(() => {
    async function getMenu() {
      const response = await fetch('http://localhost:8000/api/coffee')
      const data = await response.json()
      console.log('getMenu:', data)
      dispatch(actions.getMenu(data.menu))
    }

    getMenu()
  }, [dispatch])

  return (
    <section>
      <article className="menu-app">
        <h1>Todo App</h1>
        <ul className="menu-list">
            { menu.map((menu1) => {
                return <TodoItem task={ menu1.task } key={ menu1.id } />
            }) }
        </ul>
      </article>
      <AddMenu />
    </section>
  );
}

export default App;
