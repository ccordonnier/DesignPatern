import { useEffect, useState } from 'react'
import LeftBar from "./components/LeftBar"
import './App.css'
import ShopCard from './components/ShopCard';
import PopableSidebar from './components/PopableSidebar';

function App() {
  const [activeComponent, setActiveComponent] = useState<string>("Card");
  const [modaleSidebarIsOpen, setModaleSidebarIsOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(activeComponent);

  }, []);

  return (
    <div className="flex flex-row">
      <div className='w-1/5'>
        <LeftBar activeComponent={activeComponent} setActiveComponent={setActiveComponent}></LeftBar>
      </div>
      <div className='w-4/5 flex pl-4' style={{ height: "100vh", backgroundColor: "#F6F9FC", }}>
        {
          activeComponent == "Card" && (
            <div>
              <h3 className='text-xl mt-10 mb-4'>ShopCard Component</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                <ShopCard title="Card Title" price={250} image="https://picsum.photos/seed/picsum/200/200" alt="image random from lorem picsum" discountedPrice={187.50} />
                <ShopCard title="Card Title" price={250} image="https://picsum.photos/seed/picsum/200/200" alt="image random from lorem picsum" discountedPrice={187.50} />
                <ShopCard title="Card Title" price={250} image="https://picsum.photos/seed/picsum/200/200" alt="image random from lorem picsum" discountedPrice={187.50} />
              </div>
            </div>
          )
        }

        {
          activeComponent == "Popable Sidebar" && (
            <div>
              <h3 className='text-xl mt-10 mb-4'>Popable Sidebar<button type='button' onClick={()=>setModaleSidebarIsOpen(true)}>Open</button></h3>
              <button className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' type='button' onClick={()=>setModaleSidebarIsOpen(true)}>Open</button>

                <div>
                  <PopableSidebar modaleSidebarIsOpen={modaleSidebarIsOpen} setModaleSidebarIsOpen={setModaleSidebarIsOpen}>
                    <div className='mt-20 ml-20 '>
                    <h2 className='text-lg flex items-center'><img src="./src/assets/react.svg" alt="" />React Sidebar</h2>
                    <ul  className='mt-10' >
                      <li><a href="#">Link 1</a></li>
                      <li><a href="#">Link 2</a></li>
                      <li><a href="#">Link 3</a></li>
                      <li><a href="#">Link 4</a></li>
                      <li><a href="#">Link 5</a></li>
                    </ul>
                    </div>
                  </PopableSidebar>
                </div>
              
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App
