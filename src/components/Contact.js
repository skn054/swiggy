import { useState } from "react";
import contact from "../images/Contact-Us.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  const result = message ? (
    <h6>Thanks for contacting us    , We will reply ASAP.</h6>
  ) : (
    <>
      <h3>Contact us</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Type your Message here..." required></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );

  return (
    <div className="contact-container">
      <div className="contact-left">
        <img src={contact} alt="" />
      </div>
      <div className="contact-right">{result}</div>
    </div>
   
  );
};

export default Contact;
