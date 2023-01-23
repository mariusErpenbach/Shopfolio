const Searchbar = (props) => {

    return (<div>
        <input id="searchBar" onChange={props.getUserInput}></input>
        <button>
          <i className="fas fa-search"></i>
        </button>
    </div>)
}

export default Searchbar