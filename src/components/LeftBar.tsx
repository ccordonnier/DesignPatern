import React, { MouseEventHandler } from "react";

interface LeftBarProps {
    activeComponent: String;
    setActiveComponent: (component:String) => void;
}

interface Component {
    name: String;
}

const components: Array<Component> = [
    { name: "Card" },
    { name: "Cart" },
    { name: "Popable Sidebar" },
];

const LeftBar: React.FC<LeftBarProps> = ({activeComponent, setActiveComponent}) => {

    const selectComponent:MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();
        let component = event.target.dataset.component;
        setActiveComponent(component);
    }

    return (
        <aside className="flex flex-col p-4 pt-10">
            <h2 className="text-xl">Composants</h2>
            {components.map(component=>{
                return <a key={component.name} href="#" onClick={(e)=>selectComponent(e)} data-component={component.name} style={{color: activeComponent==component.name?"red":"blue"}}>{component.name}</a>
            })}
            
        </aside>
    );
};



export default LeftBar;