const Content = () => {

    const gerenciaNomes = () => {
        const names = ['carne', 'açucar', 'macarrão'];
        var sorteio = Math.random();
        var int = Math.floor(sorteio * 3);
        //console.log(int);
        return names[int];
    }

    const handleClick = () => {
        console.log('Houve um click aqui!');
    }

    return (
        <main>
            <p>
                Comprar {gerenciaNomes()}!
            </p>
            <button onClick={handleClick}>
                Click it
            </button>
        </main>
    )
}

export default Content