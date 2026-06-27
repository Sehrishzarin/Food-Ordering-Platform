import React from 'react'
import { Button } from './ui/button'

export default function MainNav() {
  return (
    <div>
      <Button variant="ghost" className="hover:text-orange-500 font-bold  hover:bg-white">
        Login
      </Button>
    </div>
  )
}
