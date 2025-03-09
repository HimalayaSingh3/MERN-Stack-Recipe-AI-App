import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='p-10 flex justify-center '>
      <form className='mt-20 border shadow-lg p-10 flex  flex-col gap-4 w-96 rounded-lg'>
        <h1 className='font-bold text-2xl'>Register</h1>
        <Input type="text" placeholder="Enter Your Username . . ." className="p-5"/>
        <Input type="text" placeholder="Enter Your Email . . ." className="p-5"/>
        <Input type="text" placeholder="Enter Your Password . . ." className="p-5"/>
        <Button className="p-5 cursor-pointer" variant="destructive">Register</Button>
        <p className='text-center'>Already have an account ? <Link to="/login" className='text-blue-500 underline font-semibold'>Login</Link></p>
      </form>
    </div>
  )
}

export default Register
