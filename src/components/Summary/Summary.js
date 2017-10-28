import React, { Component } from 'react';

class Summary extends Component {

    render() {
        return (
            <section className="Summary">
                <div className="content">

                    <h2>Your quote</h2>
                    <img src={this.props['itemDetails'].imageUrl} alt={this.props['itemDetails'].name} />

                    <table width="100%" border="0">
                        <tbody>
                        <tr>
                            <th scope="col">&nbsp;</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </section>
        )
    }
}

export default Summary;