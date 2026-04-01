
import { useState } from 'react'
import './App.css'
import Header from './component/header/Header'
import Navbar from './component/navbar/Navbar'
import Pricing from './component/pricing/Pricing'
import Section from './component/section/Section'
import Status from './component/status/status'
import Steps from './component/steps/Steps'
import Ctasection from './component/CTAsection/Ctasection'
import Footer from './component/footer/Footer'
import { ToastContainer } from 'react-toastify'

const getModels = async () => {
  const res = await fetch('/data.json')
  return res.json();
}

const posmisModels = getModels();

function App() {

  const [addedIds, setAddedIds] = useState([]);
  const [activeModel, setActiveModel] = useState('products');

  return (
    <>
      <Navbar
        addedIds={addedIds}
        setActiveModel={setActiveModel}
      />
      <Header />
      <Status />
      <Section
        posmisModels={posmisModels}
        addedIds={addedIds}
        setAddedIds={setAddedIds}
        activeModel={activeModel}
        setActiveModel={setActiveModel}
      />
      <Steps />
      <Pricing />
      <Ctasection />
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App
