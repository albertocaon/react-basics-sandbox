import React, { useState } from 'react';
import './App.css';
import ParentToChild from "./components/ParentToChild/ParentToChild";
import DefaultHeader from "./components/DefaultHeader/DefaultHeader";
import Hooks from "./components/Hooks/Hooks";
import Effects from "./Effects/Effects";
import ProviderContext from "./components/ProviderContext/ProviderContext";

function App() {

  const [menu, setMenu] = useState([
    {
      title: 'React Welcome',
      component: <DefaultHeader />,
      visible: true
    },
    {
      title: 'Data Flow',
      component: <ParentToChild />,
      visible: false
    },
    {
      title: 'Hooks',
      component: <Hooks />,
      visible: false
    },
    {
      title: 'Effects',
      component: <Effects />,
      visible: false
    },
    {
      title: 'Provider & Context',
      component: <ProviderContext />,
      visible: false
    },
    {
      title: 'Workshop Exercise',
      component: <p>Workshop Exercise</p>,
      visible: false
    }
  ]);
  const select = (index) => {
    const updatedMenu = menu.map((item, i) => ({
      ...item,
      visible: i === index
    }));
    setMenu(updatedMenu);
    document.title = menu[index].title;
  }



  return (
    <div className="App">
      <ul
        className="menu">
        {menu && menu.map((item, index) => {
          return <li key={index} className={item.visible ? 'selected' : ''} onClick={() => select(index)}>{item.title}</li>
        })}
      </ul>
      {menu.find((item) => item.visible).component}
    </div>
  );
}

export default App;
