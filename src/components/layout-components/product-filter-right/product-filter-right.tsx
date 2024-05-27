import React from 'react'
import "./product-filter-right.css"

const ProductFilterRight = () => {
    return (
        <div className='product-filter-right'>
            <div className='flex-grow-1'>
                <div className='d-flex align-items-center gap-4'>
                    <button className='filter-btn d-lg-none'>
                        <svg version="1.1" x="0" y="0" viewBox="0 0 25 25" xmlSpace="preserve"><g><g data-name="Layer 28"><path d="M2.54 5H15v.5A1.5 1.5 0 0 0 16.5 7h2A1.5 1.5 0 0 0 20 5.5V5h2.33a.5.5 0 0 0 0-1H20v-.5A1.5 1.5 0 0 0 18.5 2h-2A1.5 1.5 0 0 0 15 3.5V4H2.54a.5.5 0 0 0 0 1ZM16 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5ZM22.4 20H18v-.5a1.5 1.5 0 0 0-1.5-1.5h-2a1.5 1.5 0 0 0-1.5 1.5v.5H2.55a.5.5 0 0 0 0 1H13v.5a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5V21h4.4a.5.5 0 0 0 0-1ZM17 21.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5ZM8.5 15h2a1.5 1.5 0 0 0 1.5-1.5V13h10.45a.5.5 0 1 0 0-1H12v-.5a1.5 1.5 0 0 0-1.5-1.5h-2A1.5 1.5 0 0 0 7 11.5v.5H2.6a.5.5 0 1 0 0 1H7v.5A1.5 1.5 0 0 0 8.5 15ZM8 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5Z" data-original="#000000"></path></g></g></svg>
                    </button>
                    <div>
                        <h5 className="card-title">Smart Devices all products</h5>
                    </div>
                </div>
            </div>
            <div className='flex-shrink-0'>
                <div className='d-flex align-items-start align-items-md-center flex-column flex-sm-row  gap-lg-5 gap-3'>
                    <p className="fs-14">Showing 1 Of 5 Of 5 Results</p>
                </div>
            </div>
        </div>
    )
}

export default ProductFilterRight
