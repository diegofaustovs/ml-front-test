import React from 'react';

import Searchbar from './Searchbar';
import Results from './Results';

import './App.scss'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showResults: true,
            showDetails: false,
            results: ['1','2','3'],
        };
    }

    searchProducts = (query) => {
        console.log("APP:" + query);
    }

    render() {
        return (
            <div className='app-root'>
                <Searchbar searchProducts={this.searchProducts}/>
                {(this.state.showResults || this.state.showDetails) &&
                <div className='content-root'>
                    {this.state.showResults && <Results results={this.state.results}/>}
                </div>}
            </div>
        );
    }
}

export default App;