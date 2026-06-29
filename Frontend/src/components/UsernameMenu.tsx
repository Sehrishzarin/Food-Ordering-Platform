
import { useAuth0 } from '@auth0/auth0-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { CircleUserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

export default function UsernameMenu() {
  const { user, logout } = useAuth0()

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2 focus:outline-none">
          <CircleUserRound className="text-orange-500" />
          {user?.email}
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white rounded-md shadow-lg p-2 min-w-[150px] flex flex-col gap-2 z-50">
          <DropdownMenuItem className="font-bold hover:text-orange-500 outline-none cursor-pointer">
            <Link to="/user-profile" className="w-full block">
              User Profile
            </Link>
          </DropdownMenuItem>

          <Separator/>

          <DropdownMenuItem className="outline-none">
            <Button 
              className="flex flex-1 w-full font-bold bg-orange-500 text-white hover:bg-orange-600" 
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              Logout
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}