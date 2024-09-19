import logo from "../assets/logo.jpg";

const Navbar = () => {

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text font-bold">Startup Sphere</span>
            </div>
            <div className="hidden md:flex space-x-6 ml-10">
            <a href="#about" className="hover:text-gray-400">About Us</a>
            <a href="#achievements" className="hover:text-gray-400">Achievements</a>
            <a href="#team" className="hover:text-gray-400">Our Team</a>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="#join-us"
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Join Us
            </a>
            </div>
            </div>
          </div>
    </nav>
  );
};

export default Navbar;