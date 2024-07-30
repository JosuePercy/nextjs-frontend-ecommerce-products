"use client"

import { useState } from "react";
import "./page.css"

const Page = () => {

    const [compras, setCompras] = useState([
        {
            fecha: '2024-07-28',
            numeroOperacion: '12345',
            productos: ['Producto 1', 'Producto 2'],
            total: '$100.00',
        },
        {
            fecha: '2024-07-28',
            numeroOperacion: '12345',
            productos: ['Producto 1', 'Producto 2'],
            total: '$100.00',
        },
        {
            fecha: '2024-07-28',
            numeroOperacion: '12345',
            productos: ['Producto 1', 'Producto 2'],
            total: '$100.00',
        },
        // Agrega más compras aquí
    ]);

  return (
      <table className="compras-table">
          <thead>
              <tr>
                  <th>Fecha de Compra</th>
                  <th>Número de Operación</th>
                  <th>Productos</th>
                  <th>Total</th>
              </tr>
          </thead>
          <tbody>
              {compras.map((compra, index) => (
                  <tr key={index}>
                      <td>{compra.fecha}</td>
                      <td>{compra.numeroOperacion}</td>
                      <td>{compra.productos.join(', ')}</td>
                      <td>{compra.total}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  )
}

export default Page
