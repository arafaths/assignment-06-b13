
import './App.css'
import Header from './component/header/Header'
import Navbar from './component/navbar/Navbar'
import Pricing from './component/pricing/Pricing'
import Section from './component/section/Section'
import Status from './component/status/status'
import Steps from './component/steps/Steps'

const getModels = async () => {
  const res = await fetch('/data.json')
  return res.json();
}

const posmisModels = getModels();

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Status />
      <Section posmisModels={posmisModels} />
      <Steps />
      <Pricing />
    </>
  );
}

export default App
