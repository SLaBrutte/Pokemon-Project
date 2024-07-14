import React from "react"


// https://www.w3schools.com/react/react_forms.asp


const Form = (props) => {
  return (
    <div>
      <form>
        <label>
            Enter a valid email address:
            <input type="email"/>
        </label>
        <label>
            Confirm email address:
            <input type="email"/>
        </label>
        <label>
            Enter a password:
            <input type="password" />
        </label>
        <label>
            Confirm password:
            <input type="password" />
        </label>
      </form>
    </div>
  )
}

export default Form
