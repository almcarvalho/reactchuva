import { useState } from "react";

const Content = () => {

    const [name, setName] = useState('?');

    const gerenciaNomes = () => {
        const names = ['carne', 'açucar', 'macarrão'];
        var sorteio = Math.random();
        var int = Math.floor(sorteio * 3);
        //console.log(int);
        setName(names[int]);//
    }

    //shift alt down
    //ctrl b
    const handleClick = () => {
        console.log('Houve um click aqui!');
    }
    const handleClick2 = (name) => {
        console.log(`${name} was clicked`);
    }

    return (
        <main>
            <p>
                Comprar {name}
            </p>
            <button onClick={() => gerenciaNomes()}>
                Sortear
            </button>
            {/* 44:30 */}
        </main>
    )
}

export default Content