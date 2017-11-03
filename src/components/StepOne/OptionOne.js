import React from 'react';

const OptionOne = (props) => (
    <div>
        <h2>{ props.getValue(props.dictionary, 'button1Label') }</h2>
        <p>Will have form fields</p>
    </div>
);

export default OptionOne;