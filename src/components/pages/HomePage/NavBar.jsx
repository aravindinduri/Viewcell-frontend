import { PiMagnifyingGlassBold } from "react-icons/pi";
import Logo from '../../../images/logo.jsx';
import { Link, useLocation } from "react-router-dom";


const Header = () => {


    const { pathname } = useLocation();
    const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

    return (
        <div className="sticky top-0 z-20 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-black dark:bg-black">

            <div className="flex h-5 items-center">
                {pageName !== "video" && (
                    <div
                        className="flex md:hidden md:mr-6 mr-4 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#8888]/[0.6]"

                    >

                    </div>
                )}
                <Link to="/" className="flex h-5 items-center mt-4">
                    <Logo />
                </Link>
            </div>
            <div className="group flex items-center my-1 mr-7">
                <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#888888] rounded-l-3xl group-focus-within:border-blue-500">
                    <input
                        type="text"
                        className="bg-transparent outline-none text-white pr-5 pl-5  md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                        placeholder="Search"
                    />
                </div>
                <button
                    className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#888888] rounded-r-3xl bg-white/[0.1] dark:bg-black/[0.1]"
                >
                    <PiMagnifyingGlassBold className='text-white text-xl' />


                </button>
            </div>
        </div>
    );
};

export default Header;
