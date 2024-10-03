import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href='/' className="md:flex-1 font-semibold text-xl">
        Google Docs
      </Link>
      {children}
    </div>
  )
}

export default Header