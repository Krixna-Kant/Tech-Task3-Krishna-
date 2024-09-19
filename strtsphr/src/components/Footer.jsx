const Footer = () => {
    return (
      <footer className="mt-20 border-t py-10 border-neutral-700">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center text-center">
          <div>
            <h3 className="text-md font-semibold mb-4"></h3>
            <ul className="space-y-2">
              <li>
                <a
                  href='#joinus'
                  className="text-neutral-300 hover:text-white"
                >
                  Join Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4"></h3>
            <ul className="space-y-2">
              <li>
                <a
                  href='#newone'
                  className="text-neutral-300 hover:text-white"
                >
                  Your Ideas
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4"></h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hello"
                  className="text-neutral-300 hover:text-white"
                >
                  Members
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  