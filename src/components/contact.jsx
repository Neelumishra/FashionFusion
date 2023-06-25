import React from "react";
import { MyContext } from "../context/authContext";
import { useContext } from "react";
import "./contact.css";
function Contact() {
 

  const { isLogin, setLogin } = useContext(MyContext);
  
 let details = JSON.parse(sessionStorage.getItem("user"));

 console.log(details)
  return (
    <div className="userprofilecard">
      <img src={details.image} alt="User Image" />
      <div>
        <h2>
          {details.firstName} {details.lastName}
        </h2>
        <p>{details.email}</p>
        <p>{details.gender}</p>
      </div>
    </div>
  );
}

export default Contact;
