import React, { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";


interface ModaleSidebarProps extends PropsWithChildren{
    modaleSidebarIsOpen: boolean;
    setModaleSidebarIsOpen: (isOpen: boolean) => void;
    side: "left" | "right" | undefined;
    children: ReactElement;
}

const ModaleSidebar: React.FC<ModaleSidebarProps>= ({modaleSidebarIsOpen, setModaleSidebarIsOpen, side="left", children}) => {
    const [isOpen, setIsOpen] = useState(modaleSidebarIsOpen);
    const [changeBg, setChangeBg] = useState(modaleSidebarIsOpen);
    const [translate, setTranslate] = useState(modaleSidebarIsOpen);
    
    const handleClickClose = () => {
        setChangeBg(false);
        setTranslate(false);
        setTimeout(()=>{
            setModaleSidebarIsOpen(false);
        },200)
        

    }

    useEffect(()=>{
            setIsOpen(modaleSidebarIsOpen);
            setTimeout(()=>{
                setTranslate(modaleSidebarIsOpen);
            },100)
            setTimeout(()=>{
                setChangeBg(modaleSidebarIsOpen);
            },200)
    },[modaleSidebarIsOpen])
    return (
        <div className={'absolute left-0 top-0 w-full h-full z-10 '+(isOpen?' block ':' hidden')} >
            <div className={`absolute w-1/4 h-full z-10 ${side}-0`+ (!translate ?' -translate-x-full':'')+" transition-transform"} style={{backgroundColor:"rgb(246, 249, 252"}}>
                <div onClick={()=>handleClickClose()} className='absolute right-1 z-20 cursor-pointer'><IoClose  size={"2rem"}/></div>
                <div>{children}</div>
            </div>
            <div onClick={()=>handleClickClose()} className={`absolute w-3/4 h-full z-10`+(changeBg?' bg-black/60':' bg-black/0')+(side=="left"?' left-1/4':' right-1/4') +' transition-colors cursor-pointer'}></div>
        </div>
    );
};

export default ModaleSidebar;