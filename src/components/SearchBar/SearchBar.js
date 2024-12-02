import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className='searchBarContainer'>
            <form className='container'>
                <header className='d-flex justify-content-center py-3'>
                    <input placeholder='Enter the github username' className='searchInput'/>
                </header>
                <div className='container buttonContainer'>
                    <button type='submit' className='d-flex justify-content-center btn btn-primary'>Search</button>
                </div>
            </form>
         </div>
    )
}

export default SearchBar