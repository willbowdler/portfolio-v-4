import emailjs from "emailjs-com";

function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lrwfbvj",
        "template_v0cs6zs",
        e.target,
        "RvFH5l3JwJlC-6W_z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-flex">
      <div className="contact-head">
        <h1 className="subheader">Contact Me</h1>
        <h4>Phone: 601.519.7970</h4>
        <h4>Email: callowaybowdler@gmail.com</h4>
      </div>
      <form onSubmit={sendEmail} className="contact-form" action="">
        <label htmlFor="from_name">Name</label>
        <input name="from_name" type="text" placeholder="Name" />
        <label htmlFor="email">Email</label>
        <input name="email" type="Email" placeholder="Email" />
        <label htmlFor="message">Type your message here</label>
        <textarea name="message" placeholder="Message"></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
