'use client'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'


const defaultForm:SubmitForm = {
  title:'',
  description:''
}

 const [form, setForm] = useState<SubmitForm>(defaultForm)

 const [selection, setSelection] = useState<ThreadCategory | string>('')
  
 function onChangeHandler(e:React.ChangeEvent<HTMLInputElement>){
      const {name,value} = e.target
      
      setForm((prev => {
        return {
          ...prev,
          [name]:value
        }
      }))
 }



export const Create = () => {
  return (
    <div>
      <form className='w-[300px] bg-slate-300 m-auto mt-10 p-10 rounded-xl'>
          <div className='my-5'>
            <label className='text-lg' htmlFor="">Title</label>
            <Input value={form.title} name='title' placeholder='title' onChange={onChangeHandler}/>
          </div>
         <label className='text-lg'>Thread/QNA</label>
            <Select onValueChange={e => setSelection(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="thread">THREAD</SelectItem>
                <SelectItem value="qna">QNA</SelectItem>
              </SelectContent>
            </Select>
            <div className='my-5'>
              <label className='text-lg'>Description</label>
              <Textarea className='resize-none'/>
            </div>
            <Button className='container'>Submit</Button>
      </form>
    </div>
  )
}
