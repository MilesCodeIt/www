import React, { Component } from 'react'

export default class ContactUs extends Component {
    render() {
        return (
            <div className="contactUsComp">
                <input type="email" id="mail" placeholder="enter your mail" className="inputMail"/>
                <textarea id="textarea" placeholder="enter your demande" className="textarea"></textarea>
                <input type="submit" value="Send a mail" className="submit"/>
            </div>
        )
    }
}
