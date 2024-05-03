import React, { ReactElement } from 'react';
import { FaStar } from "react-icons/fa";



interface ReviewsType {
    value: number;
    basicColor: string;
    activeColor: string;
}


const Reviews: React.FC<ReviewsType> = ({value, basicColor, activeColor}) => {
    let arrayStars : number[] = [1,2,3,4,5];
    
    console.log(arrayStars);
    
    return(
        <div className='flex'>
            {arrayStars.map((starNumber) => starNumber<=value ? <FaStar color={activeColor} /> : <FaStar color={basicColor} />)}
        </div>
    )

};

export default Reviews;