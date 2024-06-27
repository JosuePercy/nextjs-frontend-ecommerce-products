"use client"

import { IProduct } from '@/interfaces/products.interface'
import React, { useContext, useEffect } from 'react'
import './Product.css'
import ButtonLigthIcon from '@/components/ui/button/button-ligth-icon'
import { UIContext } from '@/context/ui/UIContext'

interface Props {
    product: IProduct
}

const Product = ({ product }: Props) => {
    const { setLocalStorageProduct } = useContext(UIContext)

    const getImage = () => {

        if (product && product.images && product.images.length > 0) {

            return <img src={product.images[0].url} alt="Video Game Joy Stick" />

        }
        else {
            return <><img src={'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png'} alt="Video Game Joy Stick" /></>
        }
    }


    const addToCart = () => {
        setLocalStorageProduct(product)
    }


    return (
        <>
            <div className="col-xl-3 col-md-4 col-6">
                <div className="product-item">
                    <div className="product-img">
                        <a href="https://cartuser.kodepixel.com/product/video-game-joy-stick/30">
                            {
                                getImage()
                            }
                        </a>
                        <div className="quick-view">
                            <button className="quick-view-btn quick--view--product" data-product_id="30">
                                <svg version="1.1" width="18" height="18" x="0" y="0" viewBox="0 0 519.644 519.644" xmlSpace="preserve"><g><path d="M259.822 427.776c-97.26 0-190.384-71.556-251.854-145.843-10.623-12.839-10.623-31.476 0-44.314 15.455-18.678 47.843-54.713 91.108-86.206 108.972-79.319 212.309-79.472 321.492 0 50.828 36.997 91.108 85.512 91.108 86.206 10.623 12.838 10.623 31.475 0 44.313-61.461 74.278-154.572 145.844-251.854 145.844zm0-304c-107.744 0-201.142 102.751-227.2 134.243a2.76 2.76 0 0 0 0 3.514c26.059 31.492 119.456 134.243 227.2 134.243s201.142-102.751 227.2-134.243c1.519-1.837-.1-3.514 0-3.514-26.059-31.492-119.456-134.243-227.2-134.243z" data-original="#000000"></path><path d="M259.822 371.776c-61.757 0-112-50.243-112-112s50.243-112 112-112 112 50.243 112 112-50.243 112-112 112zm0-192c-44.112 0-80 35.888-80 80s35.888 80 80 80 80-35.888 80-80-35.888-80-80-80z" data-original="#000000"></path></g></svg>
                                Quick View
                            </button>
                        </div>
                        <span className="offer-tag">Off  10 %</span>
                    </div>
                    <div className="product-info">
                        <h4 className="product-title">
                            <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/product/${product.url}`}>
                                {product.name}
                            </a>
                        </h4>
                        <div className="priceAndRatting">
                            <div className="product-price">
                                <span> S/.{(+product.price).toFixed(2) }</span>
                            </div>

                        </div>
                        <div className="product-action">
                            <ButtonLigthIcon text='Add to cart' onCLickButton={() => addToCart()} />
                        </div>

                        <form className="attribute-options-form-prod-4787001">
                            <input type="hidden" name="id" value="30" />
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
