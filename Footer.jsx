function Footer() {
    return (
      <footer className="bg-gray-900 text-white px-10 py-12">
  
        <div className="max-w-6xl mx-auto">
  
          <div className="grid grid-cols-3 gap-10">
  
            {/* Brand */}
            <div>
              <h2 className="text-2xl font-bold">
                Bappa<span className="text-orange-500">Lens</span>
              </h2>
  
              <p className="text-gray-400 mt-4 max-w-sm">
                Discover the culture, traditions and iconic Ganpatis
                of Pune through every frame.
              </p>
            </div>
  
            {/* Explore */}
            <div>
              <h3 className="font-semibold text-lg">
                Explore
              </h3>
  
              <div className="flex flex-col gap-3 mt-4 text-gray-400">
                <a href="#" className="hover:text-orange-500">
                  Manache 5
                </a>
  
                <a href="#" className="hover:text-orange-500">
                  Pune Ganpatis
                </a>
  
                <a href="#" className="hover:text-orange-500">
                  Gallery
                </a>
              </div>
            </div>
  
            {/* About */}
            <div>
              <h3 className="font-semibold text-lg">
                BappaLens
              </h3>
  
              <p className="text-gray-400 mt-4">
                A visual guide to Pune's Ganeshotsav.
              </p>
            </div>
  
          </div>
  
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
            © 2026 BappaLens. Made with ❤️ for Pune.
          </div>
  
        </div>
  
      </footer>
    )
  }
  
  export default Footer