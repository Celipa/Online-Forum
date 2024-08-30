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
import { useRouter } from 'next/navigation'
import { SubmitForm, Thread, ThreadCategory } from '@/types/post'

export const Create = () => {
  const [form, setForm] = useState<SubmitForm>({
    title: '',
    description: ''
  })

  const [selection, setSelection] = useState<ThreadCategory | string>('')
  const router = useRouter()


  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target

    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    try {
      const newSubject:Thread = {
          id:crypto.randomUUID(),
          category:selection as ThreadCategory,
          title:form.title,
          description: form.description,
          creationDate:new Date(new Date().toISOString()),
      }

      const newSubjectString = JSON.stringify(newSubject)

      localStorage.setItem(newSubject.id,newSubjectString)
      
      router.push('/')
    } catch (error) {
      
    }
    

  }

  return (
    <div>
      <form onSubmit={onSubmit} className='w-[300px] bg-slate-300 m-auto mt-10 p-10 rounded-xl'>
        <div className='my-5'>
          <label className='text-lg' htmlFor="">Title</label>
          <Input value={form.title} name='title' placeholder='Title' onChange={onChangeHandler} />
        </div>
        <label className='text-lg'>Thread/QNA</label>
        <Select onValueChange={e => setSelection(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="THREAD">THREAD</SelectItem>
            <SelectItem value="QNA">QNA</SelectItem>
          </SelectContent>
        </Select>
        <div className='my-5'>
          <label className='text-lg'>Description</label>
          <Textarea value={form.description} name='description' onChange={onChangeHandler} className='resize-none' />
        </div>
        <Button className='container'>Submit</Button>
      </form>
    </div>
  )
}
