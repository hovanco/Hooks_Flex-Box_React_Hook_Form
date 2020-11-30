import React from "react";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import "./style.scss";

function FormLogin() {
  // required: true, validation enter data required
  // maxLength: 20,  validation max size
  // minLength: 3,  validation min size
  // pattern: /^[A-Za-z]+$/i, don't use space
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="show-infor">
            <div className="address-icon">
              <h1>
                <i className="fa fa-map-marker" aria-hidden="true"></i> ADDRESS
              </h1>
              <h1>321, Street Name, Country</h1>
            </div>
            <div className="email-icon">
              <h1>
                <i className="fa fa-envelope" aria-hidden="true"></i> EMAIL
              </h1>
              <h1>yourmail@domain.com</h1>
            </div>
          </div>

          <div className="required-infor">
            <div className="register-user">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Get in Touch</h2>
                <input
                  name="firstName"
                  placeholder="Address"
                  ref={register({
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/,
                  })}
                />
                {_.get("firstName.type", errors) === "required" && (
                  <p className="p-tag-of-input">This field is required</p>
                )}
                {_.get("firstName.type", errors) === "maxLength" && (
                  <p>First name cannot exceed 20 characters</p>
                )}
                {_.get("firstName.type", errors) === "pattern" && (
                  <p>Alphabetical characters only</p>
                )}

                <input
                  name="lastName"
                  placeholder="Email"
                  ref={register({
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {_.get("lastName.type", errors) === "required" && (
                  <p className="p-tag-of-input">This field is required</p>
                )}

                {_.get("lastName.type", errors) === "maxLength" && (
                  <p>First name cannot exceed 20 characters</p>
                )}
                {_.get("lastName.type", errors) === "pattern" && (
                  <p>Alphabetical characters only</p>
                )}

                <textarea
                  name="age"
                  type="number"
                  placeholder="Your Query"
                  ref={register({
                    required: true,
                    maxLength: 20,
                    minLength: 3,
                    // pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {_.get("age.type", errors) === "required" && (
                  <p className="p-tag-of-textarea">This field is required</p>
                )}
                {_.get("age.type", errors) === "minLength" && (
                  <p className="p-tag-of-textarea">
                    First name cannot exceed 3 characters
                  </p>
                )}
                {_.get("age.type", errors) === "maxLength" && (
                  <p className="p-tag-of-textarea">
                    First name cannot exceed 20 characters
                  </p>
                )}
                {_.get("age.type", errors) === "pattern" && (
                  <p className="p-tag-of-textarea">
                    Alphabetical characters only
                  </p>
                )}

                <button
                  type="submit"
                  defaultValue="Submit"
                  className="btn-submit"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormLogin;
