'use client'
import React from 'react'
import DevDynamicStore from '../../libs/utils/BlogDynamicStore';

const HTMLAceEditor = () => {
  const { textData, setTextData } = DevDynamicStore();

  return (
    <p>Hello</p>
  )
}

export default HTMLAceEditor