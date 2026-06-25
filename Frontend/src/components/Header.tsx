import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <div>
      <div className="border-b-2 border-b-orange-500 py-6">
        <div className="container mx-auto flex items-center justify-between">
            <Link className="text-3xl font-bold text-orange-500 tracking-tight" to="/">Food Ordering Platform</Link>
          
          
        </div>
      </div>
    </div>
  )
}
