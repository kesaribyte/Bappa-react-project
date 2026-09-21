function Hero() {
    return (
      <section className="px-10 py-16">
        <div className="flex items-center justify-between">
  
          <div className="w-1/2">
            <p className="text-orange-500 font-semibold tracking-widest">
              GANPATI 2026
            </p>
  
            <h1 className="text-6xl font-bold mt-4 leading-tight">
              Bappa in
              <span className="text-orange-500"> Every Frame.</span>
            </h1>
  
            <p className="text-gray-600 text-lg mt-6 max-w-lg">
              Discover the beautiful celebrations, iconic Ganpatis
              and unforgettable moments of Ganeshotsav.
            </p>
  
            <button className="mt-8 bg-orange-500 text-white px-7 py-3 rounded-full hover:bg-orange-600">
              Explore Ganpatis →
            </button>
          </div>
  
          <div className="w-1/2">
                <img
                    src="https://i.pinimg.com/originals/26/5b/2a/265b2a8f768b02efa72095abb51b7c5c.jpg"
                    alt="Dagdusheth Ganpati"
                    className="w-full h-96 object-cover rounded-3xl"
                />
                </div>
  
        </div>
      </section>
    )
  }
  
  export default Hero