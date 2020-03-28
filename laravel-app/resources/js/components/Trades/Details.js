import React, {Component} from 'react'
import {isEmpty} from '../../../services/Utilities'
import Header from "./Header";
import Chat from "./Chat";
import MessageSend from "./MessageSend";

class Details extends Component {

    constructor(props) {
        super();

        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        const {trade} = this.props;

        return (!isEmpty(trade) && <div className="content">
                <Header trade={trade}/>
                <hr/>
                <Chat trade={trade}/>
                <MessageSend/>
            </div>
        );
    }
}

export default Details
