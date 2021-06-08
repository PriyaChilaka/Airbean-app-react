import { useEffect } from 'react';
import Menu from '../components/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { setMenus } from '../actions/menusAction';

function Menus() {
    const dispatch = useDispatch()

    const menus = useSelector(state => state.menus )

    // Local state
    // const [setMenus, menus] = useState(() => [])

   async function getMenu() {
   const response = await fetch('http://localhost:3000/api/coffee')
   const data = await response.json()
   
 console.log('getMenu:', data)
        // setUsers(data); // set Local state

        dispatch(setMenus(data))
    }

    useEffect(() => {
        console.log(menus);
    }, [menus])

    return (
        <main className="menu-view">
            <h1>Menus</h1>
            <button onClick={getMenu}>Get Menu</button>
            <section className="menus" if={menus.length}>
                {menus.map(menu => <Menu menu={menu} key={menu.id} />)}
            </section>
        </main>
    )
}


export default Menus;