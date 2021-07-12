import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div>
        <h1>Want to collaborate?</h1>
        <p>Contact me :)</p>
      </div>

      <form action="" className="contact-form">
        <div>
          <input name="name" type="text" id="name" placeholder="Name" />
        </div>
        <div>
          <input name="email" type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <textarea
            name="message"
            rows="5"
            cols="20"
            id="message"
            placeholder="Message"
          />
        </div>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;
