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
            description: [],
        };
    }

    componentDidMount() {
        this.updateNavigation();
    }

    updateNavigation() {
        const currentPath = window.location.href;
        if(currentPath === '/') {
            this.setState({showResults: false, showDetails: false})
        }
        else if (currentPath.includes('search')) {
            const productName = currentPath.split("=")[1];
            this.searchProducts(productName);
        }
        else if (currentPath.includes('/items/') && !currentPath.includes('search')) {
            const productId = currentPath.split("/")[4];
            this.goToDetail(productId);
        }
    }

    searchProducts = (query) => {
        this.setState({
            isLoading: true,
            showResults: false,
            showDetails: false
        });
        fetch(`https://api.mercadolibre.com/sites/MCO/search?q="${query}"&limit=12`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoading: false,
                        results: result.results,
                        showResults: true,
                    });
                    this.getMostPopularCat();
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
                    this.loadDescription(id);
                    this.getMostPopularCat();
                },
                (error) => {
                    console.log(error);
                }
            );
        console.log("DETAIL: " + id);
    }

    loadDescription(id) {
        fetch(`https://api.mercadolibre.com/items/${id}/description`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        description: result,
                    });
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    getMostPopularCat = () => {
        var categories = this.state.results?.map(r => r.category_id);
        var mostPop = categories.sort((a,b) =>
            categories.filter(v => v===a).length
            - categories.filter(v => v===b).length
        ).pop();
        fetch(`https://api.mercadolibre.com/categories/${mostPop}`)
            .then(res => res.json())
            .then(
                (result) => {
                    var catNames = result.path_from_root.map(r => r.name);
                    this.setState({crumbs: catNames.join(" > ")});
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    navigateHome = () => {
        window.location.pathname = '/';
    }

    navigateToResults = (query) => {
        window.location.pathname = `/items?search=${query}`;
    }

    navigateToDetail = (id) => {
        window.location.pathname = `/items/${id}`;
    }

    render() {
        return (
            <div className='app-root'>
                <Searchbar searchProducts={this.navigateToResults} navigateHome={this.navigateHome}/>
                {(this.state.showResults || this.state.showDetails) &&
                <div className='breadcrumbs-root'>
                    {this.state.crumbs}
                </div>}
                {(this.state.showResults || this.state.showDetails) &&
                <div className='content-root'>
                    {this.state.isLoading && <div>LOADING ...</div>}
                    {this.state.showResults && <Results
                        results={this.state.results}
                        goToDetail={this.navigateToDetail}
                    />}

                    {this.state.showDetails && <ElementDetail
                        element={this.state.details}
                        description={this.state.description}
                    />}
                </div>}
            </div>
        );
    }
}

export default App;