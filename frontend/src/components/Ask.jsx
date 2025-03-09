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
      <div className='border mt-4 rounded-lg h-full text-center p-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla dolor dignissimos! Odio ipsam placeat reiciendis earum. Aliquam, illum eaque. Inventore sed rem doloremque laudantium ipsum molestiae, exercitationem quas sequi?
        Tempora velit corporis nisi ad nihil deserunt ipsa perferendis laborum aut architecto culpa quibusdam rerum, quod natus. Nobis rerum vel reiciendis praesentium mollitia, nemo consectetur. A minus dicta recusandae quaerat.
        Eum ipsam, maiores laborum mollitia et nesciunt pariatur adipisci eligendi? Animi cumque neque architecto numquam accusamus, delectus quam amet molestias, voluptatum excepturi adipisci tenetur aut voluptatibus dolorum. Totam, libero dolorem.
        Consequuntur, sequi culpa quis officia soluta veniam quo cumque aperiam explicabo quisquam asperiores consectetur vitae magnam deleniti accusamus itaque nobis assumenda deserunt error vel quod? Necessitatibus sequi similique voluptates maxime?
        Itaque aut animi unde deserunt sapiente deleniti eligendi odio officia in nisi, ipsum placeat numquam? Suscipit sunt omnis adipisci necessitatibus ullam a, soluta odit beatae harum exercitationem, quam tempora. Facere?
        Consequuntur, hic mollitia soluta iste eos minima modi numquam molestias omnis error autem dignissimos. Voluptatum iure dolor laborum debitis beatae ab, blanditiis sapiente perferendis rem? Reiciendis earum est ab aut.
        Eos aspernatur ut earum dolore sapiente pariatur quidem nam porro repellat explicabo ad quos quod debitis nemo cumque et, aut quia nulla ullam, nihil quis. Consequuntur cupiditate fuga vel quod?
        Eum, facilis nostrum, ad magnam odit dignissimos voluptatum obcaecati saepe voluptatem eaque perferendis corporis ullam dolorum minus dolorem deleniti earum quasi ipsa, laborum rerum nemo eligendi alias tenetur aut? Ipsam?
        Eius aliquam esse asperiores facere cum! Quibusdam fugit sunt deleniti eligendi odit perferendis fuga, minus enim consequatur blanditiis at ab laborum sed velit, accusamus amet voluptatem quo saepe iste natus!
        Amet autem nam minima laborum quae, vel quas excepturi cumque architecto, culpa veritatis quam nostrum aliquid debitis reiciendis, nobis dignissimos. Temporibus ipsam repellendus odit eligendi dolores quos. Debitis, expedita enim.
      </div>
      <Button className="mt-4 p-5 cursor-pointer w-full bg-blue-500 hover:bg-blue-600">Add This Recipe</Button>
    </div>
  )
}

export default Ask
