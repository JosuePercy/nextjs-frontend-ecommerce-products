"use client"

import Link from 'next/link'
import './page.css'
import { useContext, useEffect, useState } from 'react'
import { UIContext } from '@/context/ui'
import { IProduct } from '@/interfaces/products.interface'


const listproducts = ({ images, name, price }: IProduct) => {
  <tr className='fs-14 cart-item'>
    <td>
      <div className='wishlist-product align-items-center'>
        <div className='wishlist-product-img'>
          <img src={images![0].url} alt="Wired Black-Gray Headphones" />
        </div>
        <div className='wishlist-product-info'>
          <h4 className="product-title mb-2">{name}</h4>
        </div>
      </div>
    </td>
    <td className="text-center">
      <span className="item-product-amount">
        {price}
      </span>
    </td>
    <td className="text-end">
      <div className="d-flex align-items-center gap-3 justify-content-end">
        <button className="remove-cart-data badge badge-soft-danger fs-12 pointer"><img src="/icons/delete-trash.svg" /></button>
      </div>
    </td>
  </tr>
}


const Cart = () => {

  const { localStorageProduct, setLocalStorageProduct, setLocalStorageProductArray } = useContext(UIContext)
  const [totalPrice, setTotalPrice] = useState<number>(0)

  const [listProductsLocalStorage, setListProductsLocalStorage] = useState<IProduct[]>([])


  const apiUrl = process.env.HOST_LOCAL_BACKEND


  const registerProduct =  async () => {

    const productos = listProductsLocalStorage.map(product => ({
      id: product.id,
      cantidad: 1 // Ajusta esto según la cantidad real
    }));

    const body = {
      productos: productos,
      usuario: {
        id: "1" // Ajusta el ID del usuario según sea necesario
      }
    };


    console.log("Body a enviar:", body)

    /* return productos */


    try {
      
      const response = await fetch(`${apiUrl}/venta/pedidos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(body)
      })

      if (response.ok) {
        const data = await response.json();
        console.log('Registro exitoso:', data);
      } else {
        console.error('Error en el registro:', response.statusText);
      } 
     } catch (error) {
        
     }

  }

  const sumPrices = () => {
    let result = listProductsLocalStorage
      .reduce((total, product) => total + parseFloat(product.price), 0);
    setTotalPrice(result)
  };

  console.log("localStorageProduct cartytt ==>", localStorageProduct)

  useEffect(() => {
    sumPrices()
  }, [listProductsLocalStorage])

  useEffect(() => {
    setListProductsLocalStorage(listProductsLocalStorage)
  }, [localStorageProduct])

  useEffect(() => {
    setListProductsLocalStorage(JSON.parse(localStorage.getItem("car") ?? "[]"))
  },[])



  console.log("sumprice ==>", totalPrice.toFixed(2))


  console.log("listProductsLocalStorage ==>", listProductsLocalStorage)


  return (
    <section className="pb-80">
      <div className="Container">
        <div className="card mt-10  ">
          {/* card header */}
          <div className="card-header">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <h4 className="card-title">
                  Cart product list
                </h4>
              </div>
            </div>
          </div>
          {/* card body */}
          <div className="card-body cart-list position-relative">
            <div className="cart-table">
              <div className="table-responsive">
                <table className='table table-nowrap align-middle'>
                  <thead className='table-light'>
                    <tr className="text-muted fs-14">
                      <th scope="col" className="text-start">
                        Product
                      </th>
                    
                      <th scope="col" className="text-center">
                        Total Price
                      </th>

                      <th scope="col" className="text-end">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className='border-bottom-0'>
                    {
                      listProductsLocalStorage.map(({ images, name, price }, index) => (
                        <tr key={index} className='fs-14 cart-item'>
                          <td>
                            <div className='wishlist-product align-items-center'>
                              <div className='wishlist-product-img'>
                                <img src={images![0].url} alt="Wired Black-Gray Headphones" />
                              </div>
                              <div className='wishlist-product-info'>
                                <h4 className="product-title mb-2">{name}</h4>
                              </div>
                            </div>
                          </td>
                          <td className="text-center">
                            <span className="item-product-amount">
                              {price}
                            </span>
                          </td>
                          <td className="text-end">
                            <div className="d-flex align-items-center gap-3 justify-content-end">
                              <button className="remove-cart-data badge badge-soft-danger fs-12 pointer"><img src="/icons/delete-trash.svg" /></button>
                            </div>
                          </td>
                        </tr>
                      ))
                     
                    }
                  
                  </tbody>
                </table>
                  <div className="cart-product-total-price">
                      <span>Total: </span>
                  <small>S/ {totalPrice.toFixed(2)}</small>
                  </div>
              </div>
              <div className='d-flex align-items-center justify-content-between mt-4 gap-4 flex-wrapd-flex align-items-center'>
                <button className='btn btn-danger p-3'>
                  <Link href="/products" className="text-white previestab fs-12"> Continue Shopping</Link>
                </button>
                <button className='btn btn-danger p-3'>
                  <Link onClick={registerProduct} href="" className="text-white previestab fs-12">Checkout</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
