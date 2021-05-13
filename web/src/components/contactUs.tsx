import React, { useState } from 'react'


export default function ContactUs() {
    let [from, setFrom] = useState("");
    let [subject, setSubject] = useState("");
    let [text, setText] = useState("");

    const onFromChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setFrom(e.target.value);
    const onSubjectChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setSubject(e.target.value);
    const onTextChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setText(e.target.value);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const data = { from, subject, text };
        const requestOpts:any = {
            method: "POST",
            mode: 'no-cores',
            headers: { "Content-Type": "application/x-www-form-urlencoded","Access-Control-Allow-Origin":"http://localhost:3000/mail/"},
            body: JSON.stringify(data)
        };
        fetch("http://localhost:3000/mail/", requestOpts)
            .then(response => response.json())
            .then(res => console.log(res));
    };

    return (
        <div className="contactUsComp">
            <input type="email" id="mail" placeholder="enter your mail" className="inputMail" onChange={onFromChange}/>
            <input type="text" id="subject" placeholder="enter your subject" className="inputSubject" onChange={onSubjectChange}/>
            <textarea id="textarea" placeholder="enter your demande" className="textarea" onChange={onTextChange}></textarea>
            <input type="submit" value="Send a mail" className="submit" onClick={handleSubmit} />
        </div>
    )
}
