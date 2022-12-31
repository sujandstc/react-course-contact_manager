import { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const onFormSubmitHandler = (e) => {
    // Prevent default form submit behaviour..
    e.preventDefault();

    // Creating an object with data..
    // id  will have unique value as Math.random will always return random decimals

    const contactData = { id: Math.random(), name, number: mobile, location };

    // Validations
    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert("Please fill all the fields!");
    } else {
      // Run functions and reset field values
      props.onContactAdded(contactData);
      setName("");
      setMobile("");
      setLocation("");
    }
  };

  return (
    <>
      <div className="simpleAdder">
        <h3>Contact adder:</h3>
        <form onSubmit={onFormSubmitHandler}>
          <input
            type="text"
            value={name}
            placeholder="Contact name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            value={mobile}
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
          ></input>
          <input
            type="text"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <br />
          <br />
          <button>Add Contact</button>
        </form>
      </div>
    </>
  );
};

export default ContactAdder;
