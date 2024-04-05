// import LandingPage from './components/pages/LandingPage/LandingPage.jsx'

// function App() {
//   return (
//     <>
//    <LandingPage/>
//     </>
//   )
// }




import React , {useState}from 'react'

export default function App() {
  const [value,setvalue] = useState('')
  
  return (
    <div>
      <div className="w-24 h-23 bg-blue-gray-200">
        <p id='input' onChange={(e)=> {
          setvalue(e.value)
        }}> {value}</p>
      </div>
      <div>
        <p>{value}</p>
      </div>
       
    </div>
  )
}

