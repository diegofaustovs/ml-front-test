import React from 'react';

import SearchElement from './Search-element';
import './Results.scss';

class Results extends React.Component {
    render() {
        const elements = this.props.results.map( (e, i) => <SearchElement key={i} element={e} />);
        return (
            <div className='results-root'>
                {elements}
            </div>);
    }
}

export default Results;