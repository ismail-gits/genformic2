"use client"

import { useParams } from 'next/navigation'
import React from 'react'

export default function EditForm() {
  const params = useParams()

  return (
    <div>
      Edit Form
      {params.formId}
    </div>
  )
}