import React from 'react';

const getValue = (dictionary, key) => {
    let rtnVal = '';
    try {
        rtnVal = dictionary[key];
        return rtnVal
    } catch (err){
        return rtnVal;
    }
};

const renderImage = (configId, altText) => {
    if (configId){
        return (
            <img src={'https://images.toyota-europe.com/configuration/'+ configId + '/exterior-04.png?width=247&height=138'} alt={altText}  />
        )
    }
};

const getCarDetail = (car, key) => {
    let rtnVal = '';
    if(car[key]){
        let attr = car[key];
        rtnVal = attr["Name"];
    }
    return rtnVal;
};

const Summary = (props) => (
    <div className="Summary content">

        <h2>{ getValue(props.dictionary,'header') }</h2>

        { renderImage(props.configId, props.car['Name']) }

        <table width="100%" border="0">
            <tbody>
            <tr>
                <td>{ getValue(props.dictionary, 'name') }</td>
                <td>{ props.car["Name"] }</td>
            </tr>
            <tr>
                <td>{ getValue(props.dictionary, 'body') }</td>
                <td>{ getCarDetail(props.car, 'Body')}</td>
            </tr>
            <tr>
                <td>{ getValue(props.dictionary, 'engine') }</td>
                <td>{ getCarDetail(props.car, 'Engine')}</td>
            </tr>
            <tr>
                <td>{ getValue(props.dictionary, 'model') }</td>
                <td>{ getCarDetail(props.car, 'Model') }</td>
            </tr>
            <tr>
                <td>{ getValue(props.dictionary, 'transmission') }</td>
                <td>{ getCarDetail(props.car, 'Transmission') }</td>
            </tr>

            </tbody>
        </table>
    </div>
);

export default Summary;