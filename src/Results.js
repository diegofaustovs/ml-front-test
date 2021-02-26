import React from 'react';

import ResultElement from './ResultElement';
import './Results.scss';

export default function Results(props) {
    const elements = props.results.map( (e, i) => <ResultElement key={i} element={e} goToDetail={props.goToDetail} />);
    return (
        <div className='results-root'>
            {elements}
        </div>);
}