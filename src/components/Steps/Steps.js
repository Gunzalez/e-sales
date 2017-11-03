import React from 'react';

const getValue = (dictionary, step, key) => {
    let rtnVal = '';
    if(dictionary && dictionary[step] && dictionary[step][key]){
        rtnVal = dictionary[step][key]
    }
    return rtnVal;
};

const Steps = (props) => (
    <section className="Steps bordered">
        <div className="container">

            <nav className="navbar">
                <button className="button-arrow left"><span></span></button>
                <button disabled className={props.step === 1 ? 'active' : ''}>{ getValue(props.dictionary, 'stepOne','label') }</button>
                <button disabled className={props.step === 2 ? 'active' : ''}>{ getValue(props.dictionary, 'stepTwo','label') }</button>
                <button disabled className={props.step === 3 ? 'active' : ''}>{ getValue(props.dictionary, 'stepThree','label') }</button>
                <button disabled className={props.step === 4 ? 'active' : ''}>{ getValue(props.dictionary, 'stepFour','label') }</button>
                <button disabled className={props.step === 5 ? 'active' : ''}>{ getValue(props.dictionary, 'stepFive','label') }</button>
                <button disabled className="button-arrow right"><span></span></button>
            </nav>

        </div>
    </section>
);

export default Steps;
