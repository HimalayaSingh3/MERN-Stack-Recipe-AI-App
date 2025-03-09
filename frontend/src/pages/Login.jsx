import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='p-10 flex justify-center '>
      <form className='mt-20 border shadow-lg p-10 flex  flex-col gap-4 w-96 rounded-lg'>
        <h1 className='font-bold text-2xl'>Login</h1>
        <Input type="text" placeholder="Enter Your Email . . ." className="p-5"/>
        <Input type="text" placeholder="Enter Your Password . . ." className="p-5"/>
        <Button className="p-5 cursor-pointer bg-blue-500 hover:bg-blue-600">Login</Button>
        <p className='text-center'>Don't have an account ? <Link to="/register" className='text-red-600 underline font-semibold'>Register</Link></p>
      </form>
    </div>
  )
}

export default Login
