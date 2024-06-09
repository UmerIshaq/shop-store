import Image from 'next/image'
import Link from 'next/link';
import CartIcon from './CartIcon';
const Navbar = () => {
  return (
    <div className=''>
        <nav className='flex justify-between items-center fixed top-0 left-0 right-0 z-10 py-3 px-3 md:px-20 bg-[rgb(22,104,148)]'>
            <div className=' relative w-[8rem] h-[3rem] cursor-pointer'>
                <Link href={"/"}>
                    <Image src={"/images/logo.png"} alt=' barnd logo' fill/>
                </Link>
            </div>
            <CartIcon/>
            
        </nav>
    </div>
  )
}

export default Navbar