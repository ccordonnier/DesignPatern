import React from 'react';
import Discount from './Discount';
import Reviews from './Reviews';
import AddToCartButton from './AddToCartButton';

interface ShopCardType {
    title: String;
    price: Number;
    image: String | undefined;
    alt: String | undefined;
    icon: String | undefined;
    review: 0 | 1 | 2 | 3 | 4 | 5 | undefined;
    color1: String | undefined;
    color2: String | undefined;
    discountedPrice: Number | null | undefined;
    backgroundColor: String | undefined;
    boxShadow: String | undefined;
    border: String | undefined;
}

const ShopCard: React.FC<ShopCardType> = ({ title, price, image = undefined, alt = undefined, icon = "stars", review = 5, color1 = "lightGrey", color2 = "yellow", discountedPrice = null, backgroundColor = "white", boxShadow = "0px 1px 3px rgba(3, 0, 71, 0.09)", border = "none" }) => {

    const style = {
        card: {
            backgroundColor,
            boxShadow,
            border,
        }
    }

    return (
        <div style={style.card} className='rounded-lg flex flex-col'>

            <Discount value={20} currency="%" word={"promo"} position="absolute" />

            {/* <IconsGroup icons={["view", "like"]} direction="column" /> */}
            <div>
                <img src={image} alt={alt} className='rounded-t-lg'/>
            </div>
            <div className='flex justify-between p-4'>
                <div>
                    <h3 className='mb-2 mt-0 text-lg'>{title}</h3>
                    <div className='mb-2'>
                        <Reviews value={4} basicColor="#b7b7b7" activeColor="#faaf00" />
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            {discountedPrice &&
                                <div className='mr-1 font-semibold' style={{ color: "#D23F57"}}>{"" + discountedPrice}€</div>
                            }
                            <div className='mr-1 font-semibold' style={{ textDecoration: discountedPrice ? "line-through" : "none", color: discountedPrice ? "#b7b7b7" : "#D23F57" }}>{price}€</div>
                        </div>
                        {/*  */}

                    </div>
                </div>            
                <AddToCartButton></AddToCartButton>
            </div>
        </div>
    );
};

export default ShopCard;