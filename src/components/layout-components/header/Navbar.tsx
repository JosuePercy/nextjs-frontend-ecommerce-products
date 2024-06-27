"use client"
import { useContext, useEffect, useState } from "react"

import "./Navbar.css"
import { stringify } from "querystring"
import { IProduct } from "@/interfaces/products.interface"
import { UIContext } from "@/context/ui/UIContext"



const Navbar = () => {
    const { localStorageProduct, setLocalStorageProduct, setLocalStorageProductArray } = useContext(UIContext)
    const [listProductLocalStorage, setListProductLocalStorage] = useState<IProduct[]>([])
    const [totalPrice, setTotalPrice] = useState<number>(0)

    const sumPrices = () => {
        let result = listProductLocalStorage
            .reduce((total, product) => total + parseFloat(product.price), 0);
        setTotalPrice(result)
    };


    useEffect(() => {
        sumPrices()
    }, [listProductLocalStorage])

    useEffect(() => {
        setListProductLocalStorage(localStorageProduct)


    }, [localStorageProduct])

    useEffect(() => {
        setListProductLocalStorage(JSON.parse(localStorage.getItem("car") ?? "[]"))
    }, [])


    const listProductShoppingCart = () => {
        return (
            <>
                <div className="cart-products">
                    {

                        listProductLocalStorage.map((item: IProduct, index: number) => {
                            const { price } = item
                            let priceSoles = parseFloat(price).toFixed(2)
                            
                            return (
                                <div key={index} className="cart-product">
                                    <div className="cart-product-img">
                                        {
                                            item?.images?.[0]?.url && (
                                                <img src={item.images[0].url} alt={item.name} />
                                            )
                                        }
                                    </div>
                                    <div className="cart-product-info">
                                        <h4 className="cart-product-title">
                                            <a href="">{item.name}</a>
                                        </h4>
                                        <span className="cart-product-price">1 X S./{priceSoles}</span>
                                    </div>
                                    <button
                                        className="remove-product addtocart-remove-btn remove-cart-data"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            onDeleteStorage(item.id)
                                        }}>
                                        <img src="icons/delete-product.svg " alt={item.name} />
                                    </button>
                                </div>

                            ) 
                        })
                    }

                </div>
                <div className="cart-product-total-price">
                    <span>Total: </span>
                    <small>S/ {totalPrice.toFixed(2)} </small>
                </div>
            </>
        )
    }


    const showShoppingCart = () => {
        if (listProductLocalStorage.length <= 0) {
            return (
                <div className="empty-cart">
                    <p className="fs-14 text-muted ">No Product Available In Your Cart</p>
                </div>
            )
        }

        else return listProductShoppingCart()
    }

    const onDeleteStorage = (id: any) => {
        let reuslt: IProduct[] = listProductLocalStorage.filter((item) => item.id !== id)
        setLocalStorageProductArray(reuslt)

    }

    return (
        <header className="sticky">
            <div className="header-bottom">
                <div className="container-fluid">
                    <div className="header-bottom-container">
                        <div className="header-logo">
                            <a href="https://cartuser.kodepixel.com">
                                <img src="https://cartuser.kodepixel.com/assets/images/backend/logoIcon/66688864295721718126692.png" alt="site_logo.png" />
                            </a>
                        </div>
                        <div className="mobile-search">
                            {/* Termine con css puro */}
                            <div className="d-flex align-items-center justify-content-between gap-3">
                                <form className="search-bar w-100">
                                    <div className="live-search-input">
                                        <div className="search">
                                            <img className="fa fa-search" src="/icons/lupa.png" alt="" />
                                            <input type="text"
                                                placeholder="What are you looking for?"
                                                className="form-control"
                                            />
                                        </div>
                                        {/* display none */}
                                        <div className="live-search d-none search-result-box">
                                            <div id="search-result">
                                                <div className="text-center no-products">
                                                    <div className="icon">
                                                        <img src="https://cartuser.kodepixel.com/assets/images/emptyData.png" alt="Empty Data" />
                                                    </div>
                                                    <h3>
                                                        No Data found
                                                    </h3>
                                                </div>
                                                ""
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <span className="mobile-search-close d-md-none">
                                    <button className="badge-soft-danger fs-14"><i className="fa-solid fa-xmark"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="mobile-search-tigger d-md-none">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="header-action d-none d-md-none d-lg-flex">
                            <div className="header-action-item">
                                <div className="header-action-container">
                                    <div className="each-action-item d-lg-flex d-none">
                                        <div className="position-relative">
                                            <div className="header-action-icon">
                                                <svg version="1.1" x="0" y="0" viewBox="0 0 511.728 511.728" xmlSpace="preserve"><g><path d="M147.925 379.116c-22.357-1.142-21.936-32.588-.001-33.68 62.135.216 226.021.058 290.132.103 17.535 0 32.537-11.933 36.481-29.017l36.404-157.641c2.085-9.026-.019-18.368-5.771-25.629s-14.363-11.484-23.626-11.484c-25.791 0-244.716-.991-356.849-1.438L106.92 54.377c-4.267-15.761-18.65-26.768-34.978-26.768H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h56.942a6.246 6.246 0 0 1 6.017 4.592l68.265 253.276c-12.003.436-23.183 5.318-31.661 13.92-8.908 9.04-13.692 21.006-13.471 33.695.442 25.377 21.451 46.023 46.833 46.023h21.872a52.18 52.18 0 0 0-5.076 22.501c0 28.95 23.552 52.502 52.502 52.502s52.502-23.552 52.502-52.502a52.177 52.177 0 0 0-5.077-22.501h94.716a52.185 52.185 0 0 0-5.073 22.493c0 28.95 23.553 52.502 52.502 52.502 28.95 0 52.503-23.553 52.503-52.502a52.174 52.174 0 0 0-5.464-23.285c5.936-1.999 10.216-7.598 10.216-14.207 0-8.284-6.716-15-15-15zm91.799 52.501c0 12.408-10.094 22.502-22.502 22.502s-22.502-10.094-22.502-22.502c0-12.401 10.084-22.491 22.483-22.501h.038c12.399.01 22.483 10.1 22.483 22.501zm167.07 22.494c-12.407 0-22.502-10.095-22.502-22.502 0-12.285 9.898-22.296 22.137-22.493h.731c12.24.197 22.138 10.208 22.138 22.493-.001 12.407-10.096 22.502-22.504 22.502zm74.86-302.233c.089.112.076.165.057.251l-15.339 66.425H414.43l8.845-67.023 58.149.234c.089.002.142.002.23.113zm-154.645 163.66v-66.984h53.202l-8.84 66.984zm-74.382 0-8.912-66.984h53.294v66.984zm-69.053 0h-.047c-3.656-.001-6.877-2.467-7.828-5.98l-16.442-61.004h54.193l8.912 66.984zm56.149-96.983-9.021-67.799 66.306.267v67.532zm87.286 0v-67.411l66.022.266-8.861 67.145zm-126.588-67.922 9.037 67.921h-58.287l-18.38-68.194zm237.635 164.905H401.63l8.84-66.984h48.973l-14.137 61.217a7.406 7.406 0 0 1-7.25 5.767z" data-original="#000000"></path></g></svg>
                                            </div>
                                            <span className="header-action-badge cart-items-count d-none"> </span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="each-action-item-sub">Tu carrito:</span>
                                            <p id="total-cart-amount">S/ {totalPrice.toFixed(2)}</p>
                                        </div>
                                        <div className="cart-dropdown addtocart-dropdown cart--itemlist">
                                            {showShoppingCart()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-menu d-lg-block d-none">
                        <div className="Container">
                            <div className="header-menu-container">
                                <div className="header-menuLeft">
                                    <div className="menu-category">
                                        <div className="menu-category-btn menu-category-tigger collapsed">
                                            <div className="d-flex align-items-center gap-3">
                                                <svg version="1.1" x="0" y="0" viewBox="0 0 24 24" xmlSpace="preserve"><g><g fillRule="evenodd" clipRule="evenodd"><path d="M2.25 4c0-.967.783-1.75 1.75-1.75h5c.967 0 1.75.784 1.75 1.75v5A1.75 1.75 0 0 1 9 10.75H4A1.75 1.75 0 0 1 2.25 9zM4 3.75a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h5A.25.25 0 0 0 9.25 9V4A.25.25 0 0 0 9 3.75zM2.25 15c0-.967.784-1.75 1.75-1.75h5c.967 0 1.75.783 1.75 1.75v5A1.75 1.75 0 0 1 9 21.75H4A1.75 1.75 0 0 1 2.25 20zM4 14.75a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25zM13.25 4c0-.966.783-1.75 1.75-1.75h5c.967 0 1.75.784 1.75 1.75v5A1.75 1.75 0 0 1 20 10.75h-5A1.75 1.75 0 0 1 13.25 9zM15 3.75a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h5a.25.25 0 0 0 .25-.25V4a.25.25 0 0 0-.25-.25zM13.25 15c0-.967.783-1.75 1.75-1.75h5c.967 0 1.75.783 1.75 1.75v5A1.75 1.75 0 0 1 20 21.75h-5A1.75 1.75 0 0 1 13.25 20zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25z" opacity="1" data-original="#000000"></path></g></g></svg>
                                                <p className="d-flex align-items-center gap-3">
                                                    <span>Categories</span>
                                                </p>
                                            </div>
                                            <svg className="fa-solid fa-chevron-down category-dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M4.58594 9.0001L12.0002 16.4143L19.4144 9.0001L18.0002 7.5859L12.0002 13.5859L6.00015 7.5859L4.58594 9.0001Z" fill="white" />
                                            </svg>
                                            {/*  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M4.58594 14.9999L12.0002 7.58569L19.4144 14.9999L18.0002 16.4141L12.0002 10.4141L6.00015 16.4141L4.58594 14.9999Z" fill="white" />
                                            </svg> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="header-menuRight">
                                    <ul className="menus">
                                     {/*    <li className="menu">
                                            <a className="navLink" href="/">HOME</a>
                                        </li> */}
                                        <li className="menu">
                                            <a className="navLink" href={`${process.env.NEXT_PUBLIC_BASE_SERVER}/products`}>PRODUCTS</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-menu d-lg-block d-none"></div>
        </header>
    )
}
export default Navbar