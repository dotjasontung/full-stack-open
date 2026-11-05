const Filter = ({searchName, setSearchName}) => {

    const handleInputSearch = (event) => {
        console.log(event.target.value)
        setSearchName(event.target.value)
    }


    return (
        <div>
            <input value={searchName} onChange={handleInputSearch}/>
        </div>
    )
}

export default Filter