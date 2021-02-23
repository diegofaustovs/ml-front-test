import React from 'react';

import Searchbar from './Searchbar';
import Results from './Results';

import './App.scss'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasResults: true,
        };
    }

    render() {
        return (
            <div className='app-root'>
                <Searchbar />
                {this.state.hasResults && <Results />}
            </div>
        );
    }
}

export default App;