import React from 'react';

class Upvote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: parseInt(localStorage.getItem(props.id)) || props.count,
            addend: 0
        };
    }

    increment = () => {
        this.setState(
            (prevState) => ({
                count: prevState.count + 1
            }),
            () => {
                localStorage.setItem(this.props.id, this.state.count);
            }
        );

    };

    decrement = () => {
        this.setState(
            (prevState) => ({
                count: prevState.count - 1
            }),
            () => {
                localStorage.setItem(this.props.id, this.state.count);
            }
        );
    };

    render() {
        return (
            <div>
                <button className="btn btn-block" onClick={this.increment}>+</button>
                <span>{this.state.count + this.state.addend}</span>
                <button className="btn btn-block" onClick={this.decrement} style={{ marginTop: 20 }}>-</button>
            </div>
        );
    }
}

export default Upvote;
