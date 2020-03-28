import React, {PureComponent} from 'react'

class MessageSend extends PureComponent {
    render() {
        return (<div className="message-input">
                <div className="wrap">
                    <input type="text" placeholder="Type your message..."/>
                    <button className="submit" >SEND</button>
                </div>
            </div>
        );
    }
}

export default MessageSend
