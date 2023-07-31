import { Component } from "react";

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";


class BigAlert extends Component {

    data = this.props.data

    handleCLoseExtention = () => {
        this.props.handleClose()
        this.props.history.push("./home")
    }

    render() {
        return (
            <div className={this.data.curentClass} style={{transition:`.2s` }}>
                <div className="AlertComponent col-12">
                    <dir className="innerAlert col-6">
                        <h2>{this.data.title}</h2>
                        <p>{this.data.message}</p>
                        <div className="col-12 d-flex justify-content-end">
                            <button onClick={this.handleCLoseExtention}>Okay</button>
                        </div>

                    </dir>
                </div>
            </div>
        )
    }
}



export default withRouter(BigAlert)