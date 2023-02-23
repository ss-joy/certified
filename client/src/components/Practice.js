import React, { useEffect, useState } from "react";

export default function Practice() {
  const [name, setName] = useState("");
  //   const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = name.trim() !== "";
  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("searching for a movie");
    }
  }, [enteredNameIsValid]);
  function handleSubmission(e) {
    e.preventDefault();
    setEnteredNameTouched(true);

    if (name.trim() === "") {
      return setEnteredNameIsValid(false);
    }
    setEnteredNameIsValid(true);
  }
  function handleNameChange(e) {
    setName(e.target.value);
    if (e.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  }
  function inputBlurHandler(e) {
    setEnteredNameTouched(true);

    if (name.trim() === "") {
      setEnteredNameIsValid(false);
    }
  }
  const inputInvalid = !enteredNameIsValid && enteredNameTouched;

  return (
    <div>
      <form action="/" onSubmit={handleSubmission}>
        <div>
          <label htmlFor="name">Enter Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            onBlur={inputBlurHandler}
          />
        </div>
        {inputInvalid && <p>Name must not be empty</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
