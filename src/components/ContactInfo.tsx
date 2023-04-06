import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import * as Yup from 'yup';

type FormValues = {
  id: number;
  email: string;
  name: string;
  phone: string;
};

export default function ContactInfo() {

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('First Name is required')
      .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
    phone: Yup.string()
      .required('Phone is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
  })

  const api = axios.create({
    baseURL: 'http://localhost:3004/feedback'
  })
  const
    { register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
    } = useForm<FormValues>({
      mode: "onBlur"
    });
  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {

      let res = await api.post('http://localhost:3004/feedback', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      })

      console.log(res)
    } catch (e) {
      console.error(e)
    }
    console.log(JSON.stringify(data));
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input type="text" {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
        </label>
        <div className="invalid-feedback">{errors.name?.message}</div>
        <label>
          Phone:
          <input type="tel" {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
        </label>
        <div className="invalid-feedback">{errors.name?.message}</div>
        <div >
          <label>Email</label>
          <input type="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        <input type="submit" disabled={!isValid} />
      </form >
    </>
  );
}