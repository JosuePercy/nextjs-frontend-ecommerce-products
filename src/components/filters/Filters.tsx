import './Filters.css'
import Product from './Product';

interface Category {
    name: string;
    price: number;
}

const CATEGORY_NAME: Category[] = [
    {
        name: 'Electronics',
        price: 21
    },
    {
        name: 'Clothing and Fashion',
        price: 14
    },
    {
        name: 'Home and Kitchen',
        price: 18
    },
    {
        name: 'Books',
        price: 10
    },
    {
        name: 'Sports and Outdoors',
        price: 25
    },
    {
        name: 'Health and Beauty',
        price: 19
    },
    {
        name: 'Toys and Games',
        price: 12
    }
];

export default function Filters() {
    return (
        <section className="pb-80">
            <div className='Container'>
                <div className='row g-4 flex-items-lg-start categories-container'>
                    <div className='col-xl-3 col-lg-4 d-none d-lg-block'>
                        <div className='card sticky-side-div filter-sidebar'>
                            <div className='card-header px-25 py-15'>
                                <div className='d-flex'>
                                    <div className='flex-grow-1'>
                                        <h5 className='card-title'>Filter</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-accordion'>
                                <div className='px-25 py-15 border-bottom'>
                                    <div>
                                        <p className="text-uppercase fs-13 fw-semibold filter-by">
                                            Category
                                        </p>
                                        <ul className='list-unstyled mb-0 mt-3 filter-list'>
                                            {
                                                CATEGORY_NAME.map(category => (
                                                    <li>
                                                        <a className='d-flex cate-menu-active align-items-center position-relative' href="https://cartuser.kodepixel.com/category/electronics/4">
                                                            <div className='flex-grow-1'>
                                                                <h5 className="listname">{category.name}</h5>
                                                            </div>
                                                            <span className="flex-shrink-0 ms-2 badge bg-light text-muted fs-12">
                                                                {category.price}
                                                            </span>
                                                        </a>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-9 col-lg-8'>
                        <div className='category-product'>
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
                            <div className='row g-2 g-md-4'>
                                <Product />                                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}