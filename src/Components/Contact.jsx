import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_idocti9", "template_0xkr02v", form.current, {
        publicKey: "hQoPW6BHGH3wZmvCg",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setName("");
          setEmail("");
          setMessage("")
  })}
  return(

    <div id="contact">
      {console.log(form)}
      <h1 className="section-title">Contact Me</h1>
      <form id="form-container" ref={form} onSubmit={sendEmail}>
        <input className="cm-input" type="text" placeholder="Name" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input className="cm-input" type="email" placeholder="Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <textarea placeholder="Message" name="message" rows="5" cols="55" value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <button type="submit" >Send</button>
      </form>
    </div>
  )

}
export default Contact