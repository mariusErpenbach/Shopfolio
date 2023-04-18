const Searchbar = (props) => {

    return (<div id="searchBar">
        <input onChange={props.getUserInput}></input>
        <button>
          <i className="fas fa-search"></i>
        </button>
    </div>)
}

export default Searchbar