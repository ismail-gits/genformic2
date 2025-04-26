import { FieldSchemaType, FormSchemaType } from '@/lib/zod'
import { Loader } from 'lucide-react'
import React from 'react'

type FormUiType = {
  form: FormSchemaType | null
}

export default function FormUi({form}: FormUiType) {
  
  if (!form) {
    return <div><Loader className='animate-spin'/></div>
  }

  return (
    <div className='border p-5'>
      <h2 className='font-bold text-center text-2xl'>{form.title}</h2>
      <h2 className='text-sm text-gray-500 text-center'>{form.subheading}</h2>
    </div>
  )
}