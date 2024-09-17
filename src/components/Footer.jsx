import React from 'react'
const navItems = ['HOME', 'CIGARS', 'EMPEREUR JACQUES 1ER', 'RETAIL LOCATOR', 'NEWS', 'CONTACT US']
function Footer() {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <img
            src="/Logo.png"
            alt="Papadog Cigars Logo"
      
            className=" w-72 "
          />
        </div>
        
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-wrap justify-center gap-4">
            {navItems.map((item) => (
              <li key={item} className="hover:text-gray-300 text-sm">
          
                  {item}
            
              </li>
            ))}
          </ul>
        </nav>
        
        {/* <div className="flex gap-4">
          <Link href="#" className="hover:text-gray-300">
            <Facebook size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <Twitter size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <Instagram size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <Youtube size={20} />
          </Link>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer