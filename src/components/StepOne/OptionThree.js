import React from 'react';

const OptionThree = (props) => (
    <div>
        <h2>{ props.getValue(props.dictionary, 'button3Label') }</h2>
        <p>Maybe information taking showing where you can retrieve a bank ID</p>
    </div>
);

export default OptionThree;