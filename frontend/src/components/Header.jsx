import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <header className="pt-6 sm:pt-6">
          <div className="flex justify-between group/row relative isolate pt-[calc(theme(spacing.2)+1px)] last:pb-[calc(theme(spacing.2)+1px)]">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
            ></div>

            <div className="relative flex gap-6">
              <div className="py-3 group/item relative">
                <div>
                <a title="Home" onClick={() => navigate("/")} className="flex items-center cursor-pointer">
                  <p className="font-semibold text-3xl">FrontDev</p>
                  </a>
                </div>
     
              </div>
            </div>

            {/* Navigation */}
            <nav className="relative hidden lg:flex">
              {[
                { label: "Servicios", href: "/services" },
                { label: "Proyectos", href: "/projects" },
                { label: "Sobre Nosotros", href: "/about" },
                { label: "Contacto", href: "/contact" },
              ].map((link, index) => (
                <div key={index} className="relative flex group/item">
                  <a
                    className="flex items-center px-4 py-3 text-base font-light text-gray-950 bg-blend-multiply data-[hover]:bg-black/[2.5%] cursor-pointer"
                    onClick={() => navigate(link.href)}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden"
              aria-label="Open main menu"
              type="button"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
