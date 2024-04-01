import NavBar from './NavBar.jsx';
import Body from './Body.jsx';
function Home() {
  
  return (
    <>
    <div className=' sm:overflow-x-hidden bg-black overflow-y-scroll '> 
    <NavBar  />
    <Body/>
    </div>
    </>
  );
}

export default Home