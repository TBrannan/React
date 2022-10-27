import { useState } from "react";
import "../App.css";

function Start(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const locationHandler = (event) => {
    setLocation(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const Databoi = {
      Name: name,
      age: age,
      Location: location,
    };
    //Pass Data to Another Component
    props.onBlast(Databoi);

    //Clears Values after Submit, Make sure to add value = {name} in input
    //Called two-way binding
    setName("");
    setAge("");
    setLocation("");
  };

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <label>Name </label>
          <input type="text" value={name} onChange={nameHandler}></input>
          <label>Age </label>
          <input type="text" value={age} onChange={ageHandler}></input>
          <label>Location </label>
          <input
            type="text"
            value={location}
            onChange={locationHandler}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Start;
