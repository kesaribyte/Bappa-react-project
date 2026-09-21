function Navbar() {
    return (
      <nav className="bg-white px-10 py-5 flex items-center justify-between shadow-sm">
        
        <h1 className="text-2xl font-bold">
          Bappa<span className="text-orange-500">Lens</span>
        </h1>
  
        <div className="flex gap-8">
          <a href="#" className="text-orange-500">
            Home
          </a>
  
          <a href="#" className="hover:text-orange-500">
            Explore
          </a>
  
          <a href="#" className="hover:text-orange-500">
            Gallery
          </a>
  
          <a href="#" className="hover:text-orange-500">
            Stories
          </a>
  
          <a href="#" className="hover:text-orange-500">
            About
          </a>
        </div>
  
        <button className="bg-orange-500 text-white px-5 py-2 rounded-full">
          Sign In
        </button>
  
      </nav>
    )
  }
  
  export default Navbar