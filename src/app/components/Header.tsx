import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from 'next/image'
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-36 py-4">
      <div>
        <h1 className="text-2xl">Expense Tracker</h1>
      </div>
      <Link href='/' className='cursor-pointer'>
        <AccountCircleIcon className='text-3xl'/>
      </Link>
    </header>
  )
}

export default Header