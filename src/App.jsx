import Navbar from './components/Navbar'
// import Hero from './components/Hero'
import Card from './components/Card'
import Data from './components/Data'
console.log("first",Data)


function App() {

  const DataFun = Data.map((item) => {
    return (
       <Card key={item.id}
              //  item ={item}
        /// Using Spread Operateo its esy to pass down the object
        {...item}
             />
    )
  })
  console.log(DataFun)
 

  return (
    <>
      <div className='App'>

      <Navbar />
      {/* <Hero /> */}
               <div className='CardMain'>

        {DataFun}
 
        </div>
        


      </div>
     
    </>
  )
}

export default App
