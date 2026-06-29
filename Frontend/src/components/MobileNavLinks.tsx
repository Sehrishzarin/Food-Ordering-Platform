import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from './ui/button'

export default function MobileNavLinks() {
  const { logout } = useAuth0()

  return (
    <div className="flex flex-col gap-4 w-full items-start pt-4">
      <Link 
        to="/user-profile" 
        className="flex bg-white items-center font-bold text-orange-500 hover:text-orange-600 w-full"
      >
        User Profile
      </Link>
      
      <Button 
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        className="flex items-center px-3 font-bold bg-slate-950 text-white hover:bg-gray-800 w-full justify-center h-12 rounded-md"
      >
        Log Out
      </Button>
    </div>
  )
}