import React from 'react'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'

export default function MainNav() {
  const { loginWithRedirect } = useAuth0()
  return (
    <div>
      <Button variant="ghost" className="hover:text-orange-500 font-bold  hover:bg-white" onClick={async () => await loginWithRedirect()}>
        Login
      </Button>
    </div>
  )
}