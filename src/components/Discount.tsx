import React from 'react';

interface DiscountProps {
    value: Number | undefined;
    currency: String | undefined;
    word: String | undefined;
    position: "relative" | "absolute" | "fixed"
} 

const Discount: React.FC<DiscountProps> = ({value,currency, word=null, position}) => {
    
    return (
        <div className="rounded-full py-1 px-2" style={{backgroundColor:"#D23F57", width:"fit-content", color: "white", margin:10, position:position??"relative" }}>
            <span>{word} -{value}{currency}</span>
        </div>
    );
};

export default Discount;