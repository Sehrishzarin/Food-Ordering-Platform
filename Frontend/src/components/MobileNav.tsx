import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from './ui/sheet'
import { Separator } from '@radix-ui/react-separator'
import { Button } from './ui/button'

export default function MobileNav() {
  return (
    <div>
    <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500" />
        </SheetTrigger>
    <SheetContent className = "space-y-3 bg-white">
            <SheetTitle><span>Welcome to Food Ordering Platform</span></SheetTitle>
            <Separator/>
            <SheetDescription className = "flex">
                <Button className ="flex-1 font-bold bg-orange-500 text-white">
                    Login
                </Button>
            </SheetDescription>
    </SheetContent>
    </Sheet>
    </div>
  )
}
