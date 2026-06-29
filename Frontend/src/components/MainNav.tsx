import React from 'react'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import UsernameMenu from './UsernameMenu'

export default function MainNav() {
  const { loginWithRedirect , isAuthenticated } = useAuth0()
  return (
    <div>
      <span className = "flex spacex-2 item-center">
        {isAuthenticated ? <UsernameMenu /> : <Button variant="ghost" className="hover:text-orange-500 font-bold  hover:bg-white" onClick={async () => await loginWithRedirect()}>
        Login
      </Button>}
      </span>
      {/* */}
    </div>
  )
}