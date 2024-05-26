import './Baneer.css'

export default function Banner() {
    return (
        <div className="breadcrumb-banner">
            <div className='breadcrumb-banner-img'>
                <img src="https://cartuser.kodepixel.com/assets/images/frontend/65e0484ec4fc71709197390.png" alt="breadcrumb" />
            </div>
            <div className='page-Breadcrumb'>
                <div className='Container'>
                    <div className='breadcrumb-container'>
                        <h1 className="breadcrumb-title">Smart Devices all products</h1>
                        <nav>
                            <ol className='breadcrumb mb-0'>
                                <li className="breadcrumb-item">
                                    <a href="https://cartuser.kodepixel.com">
                                        Home
                                    </a>
                                </li>
                                <li className='breadcrumb-item active'>
                                    Smart Devices all products
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}