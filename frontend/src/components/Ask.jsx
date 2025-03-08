import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const Ask = () => {
  return (
    <div className='p-10'>
       <h1 className="text-3xl font-bold mb-10">Ask AI</h1>
      <div className='flex'>
        <Input type="text" placeholder="Ask AI To Create Dishes ..." className="p-5"/>
        <Button variant="destructive" className="cursor-pointer p-5"><Search/></Button>
      </div>
    </div>
  )
}

export default Ask
