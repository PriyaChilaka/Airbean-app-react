import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../actions/menuAction';

function AddMenu() {
    const [menu, setMenu] = useState('');
    const dispatch = useDispatch();

    function handleClick() {
      dispatch(actions.addMenu(menu))
    }

    return (
        <section className="add-menu">
            <input className="input-field" placeholder="Skriv in en menu" 
            onKeyUp={ (event) => { setMenu(event.target.value) }} />
            <button onClick={ handleClick }>Lägg till ny menu</button>
        </section>
    )
}

export default AddMenu;