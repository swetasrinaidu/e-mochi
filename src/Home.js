import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img className="home__image" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/b83abadd-48d9-4df9-93fa-6a0d090d5ee31652015784857-Trendy-Heels_Desk.jpg" alt="image on home"/>

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="STRET FASHION: woman and girl casual sandal"
                        price={499}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/71etjnJkgoL._AC_UL320_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="CATWALK STORE: Women's Peep Toe Criss Cross Booties"
                        price={1836}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81eI0crFvNL._AC_UL320_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="DO BHAI:Women's Fashion Sandal"
                        price={799}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/71iX4IWKMWL._AC_UL320_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="FOOTRENDZ: womens Rsnch-3152 Footwear Flip Flop"
                        price={279}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71wt1fopVVL._AC_UL320_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="FOOTRENDZ: Women's Designer Cosy Fabric Faux Leather Heels"
                        price={999}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/911ekj4d5jL._AC_UL320_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="BATA: Women Pippi Slippers"
                        price={531}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/71zefQ4a8cL._AC_UL320_.jpg"
                    />
                </div>
            </div>   
        </div> 
    )
}

export default Home
