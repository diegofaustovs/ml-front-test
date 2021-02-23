import React from 'react';

import Searchbar from './Searchbar';
import Results from './Results';

import './App.scss'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showResults: false,
            showDetails: false,
        };
    }

    render() {
        return (
            <div className='app-root'>
                <Searchbar />
                {(this.state.showResults || this.state.showDetails) &&
                <div className='content-root'>
                    {this.state.showResults && <Results />}
                </div>}
            </div>
        );
    }
}

export default App;