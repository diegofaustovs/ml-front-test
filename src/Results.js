import React from 'react';

import ResultElement from './ResultElement';
import './Results.scss';

class Results extends React.Component {
    render() {
        const elements = this.props.results.map( (e, i) => <ResultElement key={i} element={e} />);
        return (
            <div className='results-root'>
                {elements}
            </div>);
    }
}

export default Results;