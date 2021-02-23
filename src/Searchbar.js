import React from 'react';

import './Searchbar.scss';

import logo from './assets/logo.png';
import search_icon from './assets/icon_search.png';

class Searchbar extends React.Component {
    render() {
        return (
            <div className='searchbar-root'>
                <div className='searchbar-container'>
                    <div className='logo'>
                        <img src={logo} alt='Mercado Libre'/>
                    </div>
                    <div className='search-box'>
                        <input name='search-query' placeholder='Nunca dejes de buscar'/>
                        <button><img src={search_icon} className='icon' alt='Search'/></button>
                    </div>
                </div>
            </div>);
    }
}

export default Searchbar;