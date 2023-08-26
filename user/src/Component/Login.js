import React from 'react'

const Login = () => {
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
        <div className='p-3 bg-white w-25' >
            <form action="">
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter your email' className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter your password' className='form-control'/>
                </div>
                <button className='btn btn-success'> Login </button>
            </form>
        </div>
    </div>
  )
}

export default Login
