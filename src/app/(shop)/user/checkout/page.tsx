import "./page.css"

const Cart = () => {
    return (
        <div className="row g-4 d-flex justify-content-center">
            <div className="col-xxl-4 col-xl-5 col-lg-4 mt-10">
                <div className="card checkout-product">
                    <div className="card-header">
                        <div className="d-flex">
                            <div className="flex-grow-1">
                                <h5 className="card-title fs-18 mb-0">
                                    Order Summary
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-body order-summary">
                        <div className="table-responsive table-card position-relative order-summary-table">
                            <table className="table table-borderless align-middle mb-0 w-100">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col" className="fs-14">
                                            Product
                                        </th>
                                        <th scope="col" className="text-end fs-14 nowrap">
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-start">
                                            <div className="d-flex align-items-start gap-4 nowrap">
                                                <div className="checkout-pro-img m-0 position-relative">
                                                    <img className="m-0" src="https://cartuser.kodepixel.com/assets/images/backend/product/featured/65ed5d59109291710054745.webp" alt="Wired Black-Red Gaming Headphone" />
                                                </div>
                                                <div className="check-item">
                                                    <h4 className="product-title pb-1">
                                                        <a href="https://cartuser.kodepixel.com/product/wired-black-red-gaming-headphone/157">
                                                            Wired Black-Red...
                                                        </a>
                                                    </h4>
                                                    <p className="text-muted fs-12 lh-1">$13.50 x 1  (Plastic) </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-end nowrap">$13.50</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">
                                            <div className="d-flex align-items-start gap-4 nowrap">
                                                <div className="checkout-pro-img m-0 position-relative">
                                                    <img className="m-0" src="https://cartuser.kodepixel.com/assets/images/backend/product/featured/65ed667177a691710057073.webp" alt="Puzzle Game Ribiks Cube - Multicolor" />
                                                </div>
                                                <div className="check-item">
                                                    <h4 className="product-title pb-1">
                                                        <a href="https://cartuser.kodepixel.com/product/puzzle-game-ribiks-cube---multicolor/158">
                                                            Puzzle Game...
                                                        </a>
                                                    </h4>
                                                    <p className="text-muted fs-12 lh-1">$25.00 x 1  (Plastic) </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="text-end nowrap">$25.00</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="order-summary-loader loader-spinner d-none ">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden"></span>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li className="d-flex align-items-center justify-content-between gap-4 subtotal">
                                <span className="fw-semibold ps-4 py-4  fs-14 nowrap">
                                    Sub Total:</span>
                                <span className="fw-semibold text-end pe-4 py-3  fs-14 nowrap">$40.00</span>
                            </li>

                            <li className="order-coupon-item d-flex align-items-center justify-content-between gap-4  d-none ">
                                <span className="ps-4 py-2 nowrap fs-14">
                                    Nombre del comprador
                                </span>
                                <span className="text-end pe-4 py-2 nowrap fs-14">Josue</span>
                            </li>

                            <li className="order-cost-item order-shipping-cost d-none d-flex align-items-center justify-content-between gap-4">
                                <span className="ps-4 py-3 nowrap fs-14">Shipping Charge :</span>
                                <span className="text-end pe-4 py-3 nowrap fs-14">
                                    $<span id="shipping_cost">0</span>
                                </span>
                            </li>


                            <li className="table-active d-flex align-items-center justify-content-between gap-4" data-sub="58.5" id="subtotalamount">
                                <h6 className="ps-4 py-3 nowrap fs-14 fw-bold">Total :</h6>
                                <span className="text-end pe-4 py-3 nowrap fs-14">
                                    <span id="totalamount" className="fw-bold">

                                        $58.50
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;