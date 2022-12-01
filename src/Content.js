import { useState } from "react";
import AddItem from './AddItem';

const Content = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "Café"
        },
        {
            id: 2,
            checked: true,
            item: "Leite"
        },
        {
            id: 3,
            checked: false,
            item: "Açucar"
        }
    ]);

    const [newItem, setNewItem] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        //add
        //console.log("submiteed");
        //console.log(newItem);
        AddItem(newItem);
        setNewItem('');

    }

    const AddItem = (item) => {
        var id = 1;
        if (items.length) {
            console.log("entrei aqui" + items.length);
            id = item.length ? items[items.length - 1].id + 1 : 1;
        }
        const myNewItem = { id, checked: false, item };
        const listItems = [...items, myNewItem];
        setItems(listItems);
        localStorage.setItem('cart', JSON.stringify(listItems));//guarda os itens
    }

    const handleCheck = (id) => {
        // console.log(`key:  ${id}`);
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('cart', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        //console.log(`del:  ${id}`);
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('cart', JSON.stringify(listItems));
    }

    return (
        <main>

            <form className="addForm" onSubmit={handleSubmit}>
                <label htmlFor="addItem">
                    Novo Item:
                </label>
                <input autoFocus id='addItem' type='text' placeholder='...'
                    required
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button type='submit'>
                    Add
                </button>

            </form>

            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input type={"checkbox"} checked={item.checked} onChange={() => handleCheck(item.id)} />
                            <label>
                                {item.item}
                            </label>
                            <button onClick={() => handleDelete(item.id)}>
                                Remover
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Não há Itens na lista!</p>
            )}


        </main>
    )
}

export default Content