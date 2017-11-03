import React from 'react';

const OptionTwo = (props) => (
    <div>
        <h2>{ props.getValue(props.dictionary, 'button2Label') }</h2>
        <p>A different set of form fields</p>
    </div>
);

export default OptionTwo;