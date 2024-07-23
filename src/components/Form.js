import React from "react"
import './Form.css'


// https://www.w3schools.com/react/react_forms.asp


const Form = (props) => {
  return (
    <div className="Form">
      <form>
        <label className="Form-Header"><input type="email" placeholder="Enter a email address"/>
        </label>
        <label className="Form-Body"><input type="email" placeholder="Confirm email address"/>
        </label>
        <label className="Form-Body"><input type="password" placeholder="Enter a password"/>
        </label>
        <label className="Form-Body"><input type="password" placeholder="Confirm password"/>
        </label>
        <button className="Form-Button">Submit</button>
      </form>
    </div>
  )
}

export default Form
