
import './App.css'
import Header from './component/header/Header'
import Navbar from './component/navbar/Navbar'
import Pricing from './component/pricing/Pricing'
import Section from './component/section/Section'
import Status from './component/status/status'
import Steps from './component/steps/Steps'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Status />
      <Section />
      <Steps />
      <Pricing/>
    </>
  )
}

export default App
