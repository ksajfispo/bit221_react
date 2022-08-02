import React from "react";
import { useRef } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

function Validation() {
  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  console.log(watch("email"));

  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>email</label>
      <input name="email" type='email' {...register('email', { required: true, pattern: /^\S+@\S+$/i })}></input>
      {errors.email && <p>this email field is required</p>}
      <label>name</label>
      <input name="name" type='text' {...register('name', { required: true, maxLength: 10 })}></input>
      {errors.name && errors.name.type === "required" && <p>this field is required</p>}
      {errors.name && errors.name.type === "maxLength" && <p>룰루랄라</p>}

      <label>Password</label>
      <input name="password" type='password' {...register('password', { required: true, minLength:8 })}></input>
      {errors.password && errors.password.type === "required" && <p>this field is required</p>}
      {errors.password && errors.password.type === "minLength" && <p>너무 짧아요$</p>}


      <label>Password confirm</label>
      <input name="password_confirm" type='password' {...register('password_confirm', { required: true, validate:(value)=> value === password.current })}></input>
      {errors.password_confirm && errors.password_confirm.type === "required" && <p>this field is required</p>}
      {errors.password_confirm && errors.password_confirm.type === "validate" && <p>패스워드가 일치하지 않습니다아</p>}

      <input type="submit" value='SUBMIT' />


    </form>
  );
}
export default Validation
