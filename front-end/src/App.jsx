// import React from "react";
// function App() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold text-blue-500">Real Estate App</h1>
      
//     </div>
//   );
// }

// export default App;

import React from 'react'
import Register from './components/Register'
import PropertyList from './components/PropertyList'
import AddProperty from './components/AddProperty'

const App = () => {
  return (
    <div className="bg-gray-400 p-10">
    <Register/>
    <AddProperty/>
    <PropertyList/>
    </div>
  )
}

export default App
