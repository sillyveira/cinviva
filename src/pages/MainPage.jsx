import { useState } from 'react'

export default function MainPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-primary-light text-secondary-dark outline-1 rounded-lg p-4 w-fit'>Página inicial com o tailwindcss funcionando uhu</h1>
    </>
  )
}
