import AddForm from '@/components/products/form';
import React from 'react'

async function ediProductById(params) {
  const {ProductId} = await params;
  return (
    <AddForm />
  )
}

export default ediProductById