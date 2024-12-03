import React from 'react'
import {useFormik} from 'formik'
import { validation } from './Schema';

function Signup() {

    const {values,errors,touched,handleChange,handleSubmit,handleBlur} =useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            cpassword:'',
        },
        validationSchema:validation
        
        // onSubmit((value)=>{
        //     console.log("value",value);
            
                
        // })
    }) 

    console.log("fomik",errors);
    
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <br />
            <input
             type="text"
             name='name'
             placeholder='Name....'
             value={values.name}
             onChange={handleChange}
             onBlur={handleBlur}
              />
              <p>{errors.name && touched.name ?errors.name:null}</p>
        </div>
        <div>
            <label>Email</label>
            <br />
            <input
             type="email"
             name='email'
             placeholder='Email....'
             value={values.email}
             onChange={handleChange}
             onBlur={handleBlur}
              />
                            <p>{errors.email && touched.email ?errors.email:null}</p>

        </div>
        <div>
            <label>Password</label>
            <br />
            <input
             type="password"
             name='password'
             placeholder='password....'
             value={values.password}
             onChange={handleChange}
             onBlur={handleBlur}
              />
              <p>{errors.password && touched.password ?errors.password:null}</p>
        </div>
        <div>
            <label>Conform Password</label>
            <br />
            <input
             type="password"
             name='cpassword'
             placeholder='cpassword....'
              />
             <p>{errors.cpassword && touched.cpassword ?errors.cpassword:null}</p>
        </div>
        <button>submit</button>
      </form>
    </div>
  )
}

export default Signup
