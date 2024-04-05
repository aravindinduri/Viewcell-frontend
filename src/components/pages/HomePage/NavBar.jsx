// import { PiMagnifyingGlassBold } from "react-icons/pi";
// import Logo from '../../../images/logo.jsx';
// import { Link, useLocation } from "react-router-dom";


// const Header = () => {


//     const { pathname } = useLocation();
//     const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

//     return (
//         <div className="sticky top-0 z-20 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-black dark:bg-black">

//             <div className="flex h-5 items-center">
//                 {pageName !== "video" && (
//                     <div
//                         className="flex md:hidden md:mr-6 mr-4 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#8888]/[0.6]"

//                     >

//                     </div>
//                 )}
//                 <Link to="/" className="flex h-5 items-center mt-4">
//                     <Logo />
//                 </Link>
//             </div>
//             <div className="group flex items-center my-1 mr-7">
//                 <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#888888] rounded-l-3xl group-focus-within:border-blue-500">
//                     <input
//                         type="text"
//                         className="bg-transparent outline-none text-white pr-5 pl-5  md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
//                         placeholder="Search"
//                     />
//                 </div>
//                 <button
//                     className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#888888] rounded-r-3xl bg-white/[0.1] dark:bg-black/[0.1]"
//                 >
//                     <PiMagnifyingGlassBold className='text-white text-xl' />


//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Header;

// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Logo from '../../../images/logo'
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '60%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   width: '100%',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// export default function SearchAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 , bgcolor : 'black'}}  className = 'ml-10'  >
//       <AppBar position="static" style={ {backgroundColor : 'black'} }>
//         <Toolbar>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             <Logo/>
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

import React from 'react';
import { AppBar, Toolbar, InputBase, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../images/logo.jsx'

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between items-center bg-black" >

        <Typography variant="h6" component="div" className="hidden sm:block pl-10">
          <Logo />
        </Typography>

        <div className="flex items-center bg-gray-200 text-white px-2 py-1 rounded-lg ml-9">
          <SearchIcon className='text-gray-500'/>
          <InputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            className="ml-2 text-white"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
