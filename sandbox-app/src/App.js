import './App.css';
import ParentToChild from "./components/ParentToChild/ParentToChild";
import DefaultHeader from "./components/DefaultHeader/DefaultHeader";
import Hooks from "./components/Hooks/Hooks";
import Effects from "./Effects/Effects";
import ProviderContext from "./components/ProviderContext/ProviderContext";

function App() {

  const menu = [
    {
      title: 'React Welcome',
      component: <DefaultHeader />,
      visible: false
    },
    {
      title: 'ParentToChild',
      component: <ParentToChild />,
      visible: true
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
    }
  ]
  const select = (index) => {
    menu.map(item => item.visible = false);
    menu[index].visible = true;

    console.log('selected', menu[index].title);
    console.log('menu', menu);
  }



  return (
    <div className="App">
      <ul
        className="menu">
        {menu && menu.map((item, index) => {
          return <li key={index} className={item.visible ? 'selected' : ''} onClick={() => select(index)}>{item.title}</li>
        })}
      </ul>
      {menu.map((item) => {
        return item.visible && <div key={item.title}>{item.component}</div>;
      })}
    </div>
  );
}

export default App;
