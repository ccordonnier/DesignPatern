import React, { useState } from 'react';
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

const AddToCartButton:React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const handleClickPlus: ()=>void = () => {
        setCount(count+1);
    }
    const handleClickMinus: ()=>void = () => {
        setCount(count-1);
    }
    return (
        <div className='grid grid-rows-3 justify-items-center items-center'>
            {count > 0 &&
                (<> 
                <CiSquareMinus onClick={handleClickMinus} size={"1.5rem"} cursor={"pointer"}/>
                <div>{count}</div>
                </>)
            }

{count == 0 &&
                (<> 
                <div></div>
                <div></div>
                </>)
            }
            <CiSquarePlus onClick={handleClickPlus} size={"1.5rem"} cursor={"pointer"} />
        </div>
    );
};

export default AddToCartButton;