const AddItem = () => {
    return (
        <form className="addForm">
            <label htmlFor="addItem">
                Novo Item:
            </label>
            <input autoFocus id='addItem' type='text' placeholder='...' />
            <button type='submit'>
                Add
            </button>

        </form>
    )
}

export default AddItem