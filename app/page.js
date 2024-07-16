"use client"

import React, { useState } from 'react'

const page = () => {
  const [marks, setMarks] = useState(80)
  return (
    <>
    <h1>My Marks were {marks}</h1>
    <button onClick={() => {
      setMarks(60)
    }}> Update </button>
    </>
  )
}

export default page