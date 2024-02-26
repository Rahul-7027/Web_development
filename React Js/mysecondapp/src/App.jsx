import Card from "./component/Card"
import Navbar from "./component/Navbar"
import Footer from "./component/footer"

function App() {


  return (
    <>
      <Navbar />
      <Card title={"CARD TITLE"} desc={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}/>
      <Card title={"CARD TITLE"} desc={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}/>
     
      <Footer />
    </>
  )
}

export default App
