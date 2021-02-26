import React from 'react';

import Searchbar from './Searchbar';
import Results from './Results';
import ElementDetail from './ElementDetail';

import './App.scss'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            showResults: false,
            showDetails: false,
            results: [],
            details: [],
        };
    }

    searchProducts = (query) => {
        this.setState({
            isLoading: true,
            showResults: false,
            showDetails: false
        });
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q="${query}"&limit=4`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoading: false,
                        results: result.results,
                        showResults: true,
                    });
                },
                (error) => {
                    console.log(error);
                }
            );
        console.log("SEARCH: " + query);
    }

    goToDetail = (id) => {
        this.setState({
            showResults: false,
            isLoading: true,
        });
        fetch(`https://api.mercadolibre.com/items/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoading: false,
                        details: result,
                        showDetails: true
                    });
                },
                (error) => {
                    console.log(error);
                }
            );
        console.log("DETAIL: " + id);
    }

    navigateHome = () => {
        this.setState({
           showDetails: false,
           showResults: false,
           details: [],
           results: [],
        });
    }

    render() {
        return (
            <div className='app-root'>
                <Searchbar searchProducts={this.searchProducts} navigateHome={this.navigateHome}/>
                {(this.state.showResults || this.state.showDetails) &&
                <div className='content-root'>
                    {this.state.isLoading && <div>LOADING ...</div>}
                    {this.state.showResults && <Results results={this.state.results} goToDetail={this.goToDetail}/>}
                    {this.state.showDetails && <ElementDetail element={this.state.details} />}
                </div>}
            </div>
        );
    }
}

export default App;