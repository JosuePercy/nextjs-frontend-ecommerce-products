import './Product.css'

export default function Product() {
    return (
        <>
            {/* <div className="col-xl-3 col-md-4 col-6">
                <div className="product-item">
                    <div className='product-img'>
                        <a href="https://cartuser.kodepixel.com/product/sports-watch-dial-new-model-2024-men-watch/61">
                            <img src="https://cartuser.kodepixel.com/assets/images/backend/product/featured/65df1798259511709119384.png" alt="Sports Watch Dial New Model 2024 Men Watch" />
                        </a>
                        <span className="offer-tag">Off  15 %</span>
                    </div>
                    <div className='product-info'>
                        <h4 className="product-title">
                            <a href="https://cartuser.kodepixel.com/product/sports-watch-dial-new-model-2024-men-watch/61">
                                Sports Watch Dial New Model 2024 Men Watch
                            </a>
                        </h4>
                        <div className='priceAndRatting'>
                            <div className='product-price'>
                                <span> $127.50</span>
                                <del> $150.00</del>
                            </div>
                        </div>
                        <div className='product-action'>
                            <a href="javascript:void(0)" data-product_id="prod-5950234" className="buy-now addtocartbtn">
                                <span className="buy-now-icon"><svg version="1.1" x="0" y="0" viewBox="0 0 511.997 511.997" xmlSpace="preserve"><g><path d="M405.387 362.612c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536c14.083 0 25.536 11.453 25.536 25.536s-11.453 25.536-25.536 25.536zM507.927 115.875a19.128 19.128 0 0 0-15.079-7.348H118.22l-17.237-72.12a19.16 19.16 0 0 0-18.629-14.702H19.152C8.574 21.704 0 30.278 0 40.856s8.574 19.152 19.152 19.152h48.085l62.244 260.443a19.153 19.153 0 0 0 18.629 14.702h298.135c8.804 0 16.477-6.001 18.59-14.543l46.604-188.329a19.185 19.185 0 0 0-3.512-16.406zM431.261 296.85H163.227l-35.853-150.019h341.003L431.261 296.85zM173.646 362.612c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536 25.536 11.453 25.536 25.536-11.453 25.536-25.536 25.536z" opacity="1" data-original="#000000"></path></g></svg></span>
                                Add to cart
                            </a>
                            <button className='heart-btn  wishlistitem'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white" stroke="red" stroke-width="2" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
            {
                [1, 21,1,1,1,1,1,1,1,11].map(() => {
                    return (
                        <>
                            <div className="col-xl-3 col-md-4 col-6">
                                <div className="product-item">
                                    <div className="product-img">
                                        <a href="https://cartuser.kodepixel.com/product/video-game-joy-stick/30">
                                            <img src="https://cartuser.kodepixel.com/assets/images/backend/product/featured/65ddc6b87ee651709033144.png" alt="Video Game Joy Stick" />
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
                                            <a href="https://cartuser.kodepixel.com/product/video-game-joy-stick/30">
                                                Video Game Joy Stick
                                            </a>
                                        </h4>
                                        <div className="priceAndRatting">
                                            <div className="product-price">
                                                <span> $22.50
                                                </span>  <del> $25.00</del>

                                            </div>

                                        </div>


                                        <div className="product-action">
                                            <a href="javascript:void(0)" data-product_id="prod-4787001" className="buy-now addtocartbtn">
                                                <span className="buy-now-icon"><svg version="1.1" x="0" y="0" viewBox="0 0 511.997 511.997" xmlSpace="preserve"><g><path d="M405.387 362.612c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536c14.083 0 25.536 11.453 25.536 25.536s-11.453 25.536-25.536 25.536zM507.927 115.875a19.128 19.128 0 0 0-15.079-7.348H118.22l-17.237-72.12a19.16 19.16 0 0 0-18.629-14.702H19.152C8.574 21.704 0 30.278 0 40.856s8.574 19.152 19.152 19.152h48.085l62.244 260.443a19.153 19.153 0 0 0 18.629 14.702h298.135c8.804 0 16.477-6.001 18.59-14.543l46.604-188.329a19.185 19.185 0 0 0-3.512-16.406zM431.261 296.85H163.227l-35.853-150.019h341.003L431.261 296.85zM173.646 362.612c-35.202 0-63.84 28.639-63.84 63.84s28.639 63.84 63.84 63.84 63.84-28.639 63.84-63.84-28.639-63.84-63.84-63.84zm0 89.376c-14.083 0-25.536-11.453-25.536-25.536s11.453-25.536 25.536-25.536 25.536 11.453 25.536 25.536-11.453 25.536-25.536 25.536z" opacity="1" data-original="#000000"></path></g></svg></span>
                                                Add to cart
                                            </a>
                                            <button data-product_id="30" className="heart-btn  wishlistitem"><i className="                                                     fa-regular
                                                   fa-heart"></i></button>
                                        </div>

                                        <form className="attribute-options-form-prod-4787001">
                                            <input type="hidden" name="id" value="30" />
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}