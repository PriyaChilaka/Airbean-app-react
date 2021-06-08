//import logo from './logo.png'

import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import MenuItem from './components/MenuItem';
import AddOrder from './components/AddOrder';

import actions from './actions/orderAction';


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
        <h1>Coffee-Shop</h1>
        <ul className="menu-list">
            { menu.map((menu1) => {
                return <MenuItem task={ menu1.task } key={ menu1.id } />
            }) }
        </ul>
      </article>
      <AddOrder />
    </section>
  );
}

export default App;
