"use client"

import React, { useEffect, useState } from 'react'
import './page.css'
import { fetchGET } from '@/utils/fetch-apis'
import { IProduct } from '@/interfaces/products.interface'

const NOT_RESULTS = () => <h3>NO SE ENCONTRO EL PRODUCTO</h3>

const Product = ({ params }: any) => {
    //const { url } = router.asPath
    const [product, setProduct] = useState<IProduct[] | null>([])

    
    const { url } = params
    
    
    const getFetchProduct = async () => {
        console.log('api 0');
        if (!url) return;

        try {
            const response = await fetchGET(`${process.env.NEXT_PUBLIC_API}/products/${url}`);
            console.log('data ===>', response);
            setProduct(response);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    useEffect(() => {
        getFetchProduct();
    }, [url]);

    if (!product || product.length === 0) {
        return <div>Loading...</div>;
    }

    const PRODUCT_LIST = () => {
        
        return (
            
            <>
                <ul className='route'>
                    <li><a href="https://cartuser.kodepixel.com">Home /</a></li>
                    <li>
                        <a href="https://cartuser.kodepixel.com/category/electronics/4">Electronics
                        </a>
                    </li>
                </ul>
                <div className='product-details-container'>
                    <div className='product-detail-left'>
                        <div className='small-img'>
                            <div className='small-img-item'>
                                {
                                    [1, 2, 3].map((index) => (
                                        <div key={index} className='gallery-sm-img product-gallery-small-img'>
                                            <img src={product.images![0].url} alt="65ddc6b8a60ea1709033144.png" />
                                        </div>
                                    ))

                                }
                            </div>
                        </div>
                        <div className='product-thumbnail-slider'>
                            <div className='magnify-container'>
                                <div className='magnified'>
                                    <img className="qv-lg-image" src={product.images![0].url} alt="65ddc6b8a60ea1709033144.png"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='product-detail-middle'>
                        <h3 className="details-product-title">{product?.name}</h3>
                        <div className='product-price price-section'>
                            <span>S/.{(+product.price).toFixed(2)}</span>
                        </div>
                        <div className='product-item-summery'>
                            <p>
                                <span>{product.description}</span>
                            </p>
                        </div>
                        <form className='attribute-options-form-10040787details10040787 quick-view-form'>
                            <div className='product-colors'>
                                <span>Color Options:</span>
                                <div className='variant'>
                                    <div className='variant-item'>
                                        <label className="btn-outline-success variant-btn">Black</label>
                                    </div>
                                </div>
                            </div>
                            <div className='stock-status'>
                                <div className='instock'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512" fill="none">
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm124.1 167l-184 184c-9.4 9.4-24.6 9.4-33.9 0l-88-88c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L216 307.1l150.1-150.1c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" fill="green" />
                                    </svg>
                                    <p>In Stock</p>
                                </div>
                            </div>
                            <div className='product-actions-type'>
                                <div className='input-step'>
                                    <button type="button" className="update_qty x decrement ">–</button>
                                    <input type="text" className="product-quantity" name="quantity" value="1" id="quantity"></input>
                                    <button type="button" className="update_qty y increment">+</button>
                                </div>
                                <a href="#" data-product_id="93620120details93620120" className="buy-now addtocartbtn">
                                    <img src='/icons/car.svg' alt="" />
                                </a>
                            </div>
                            <div className='product-detail-btn'>
                                <a href="" data-checkout="yes" className="buy-now-btn quick-buy-btn addtocartbtn">
                                    <img src="/icons/card-shop.svg" alt="card shop" />
                                    Buy Now
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }


  /*   useEffect(() => {
        if (url) {
            getFetchProduct();
        }
    }, []);
 */
    /* 
    useEffect(() => {
        getFetchProduct()
    }, []) */


    return (
        <section className='product-details pt-80 pb-80'>
            <div className='Container'>
                {
                    product != null && product?.length <= 0 
                        ? <NOT_RESULTS />
                        : <PRODUCT_LIST />

                }
            </div>
        </section>
    )
}
export default Product