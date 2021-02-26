import React from 'react';

import './Searchbar.scss';

import logo from './assets/logo.png';
import search_icon from './assets/icon_search.png';

class Searchbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
        }
    }

    handleInputChange = value => {
        this.setState( {inputValue: value});
    }

    handleKeyPress = key => {
        if (key === 'Enter') {
            this.submitSearch();
        }
    }

    submitSearch = () => {
        if(this.state.inputValue) {
            this.props.searchProducts(this.state.inputValue);
        }
    }

    render() {
        return (
            <div className='searchbar-root'>
                <div className='searchbar-container'>
                    <div className='logo'>
                        <img src={logo} onClick={() => this.props.navigateHome()} alt='Mercado Libre'/>
                    </div>
                    <div className='search-box'>
                        <input
                            name='search-query'
                            onChange={e => this.handleInputChange(e.target.value)}
                            onKeyPress={e => this.handleKeyPress(e.code)}
                            placeholder='Nunca dejes de buscar'/>
                        <button onClick={() => this.submitSearch()}>
                            <img
                                src={search_icon}
                                className='icon'
                                alt='Search'/>
                        </button>
                    </div>
                </div>
            </div>);
    }
}

export default Searchbar;