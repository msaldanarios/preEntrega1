import style from './App.module.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Welcome to Mosita Clothes" />
    </div>
  )
}

export default App
