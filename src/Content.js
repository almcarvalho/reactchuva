import { useState } from "react";

const Content = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "Coca-cola"
        },
        {
            id: 2,
            checked: true,
            item: "Fanta"
        },
        {
            id: 3,
            checked: false,
            item: "Guaraná"
        }
    ]);


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