import React, { useState } from "react";
import "./DisplayName.css";

const DisplayName = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
  });

  const [showName, setShowName] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setShowName(true);
  };

  return (
    <div className="container">
      <h1>Full Name Display</h1>
      <form className="form_container" onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleOnChange}
            id="fname"
            required
          />
        </div>
        <div>
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleOnChange}
            id="lname"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p className="display">
        {showName
          ? ` Full Name : ${formData.firstname} ${formData.lastname}`
          : ""}
      </p>
    </div>
  );
};

export default DisplayName;
