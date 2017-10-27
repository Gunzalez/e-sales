import React, { Component } from 'react';

class Steps extends Component {
    render() {
        return (
            <section className="Steps bordered">
                <div className="container">

                    <nav className="navbar">
                        <button className="button-arrow left"><span></span></button>
                        <button>1. Verify identity</button>
                        <button className="active">2. Credit check</button>
                        <button disabled>3. Check details</button>
                        <button disabled>4. Select dealer</button>
                        <button disabled>5. Sign contract</button>
                        <button disabled className="button-arrow right"><span></span></button>
                    </nav>

                </div>
            </section>
        );
    }
}

export default Steps;
