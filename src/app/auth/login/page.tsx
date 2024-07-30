
"use client"


import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/navigation"


import { FormEvent, useEffect, useState } from "react"



function Login() {
    
    
    const [correo, setCorreo ] = useState("")
    const [password, setPassword ] = useState("")
    const router = useRouter()

    const apiurl = process.env.HOST_LOCAL_BACKEND


    /* const url = process.env.HOST_LOCAL_BACKEND */

    const login = async (e: FormEvent<HTMLButtonElement>) => {

        e.preventDefault()
    
        console.log({ correo , password })

        try {
            const response = await fetch(`${apiurl}/auth/login`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }),
                body: JSON.stringify({
                    correo: correo,
                    password: password
                })
            })
            
            const data = await response.json()
            console.log('User Data:', data)
            localStorage.setItem("loginUser", JSON.stringify(data));
            router.push("/products")

            if(!response.ok){
                throw new Error('Error en la authenticacion')
            }

        } catch(error){
            console.log(error)
        }

    }

    return (
        <div className="container">
            <Head>
                <title>Login</title>
            </Head>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card p-5 shadow-lg" style={{ width: '36rem' }}>
                    <h1 className="text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Login</h1>
                        <div className="form-group">
                            <label htmlFor="email" style={{ fontSize: '1.5rem' }}>Email address</label>
                            <input 
                                onChange={(e) => setCorreo(e.target.value)}
                                /* type="email" */
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                style={{ fontSize: '1.5rem', height: '3.5rem', borderRadius: '0.5rem' }}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="password" style={{ fontSize: '1.5rem' }}>Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                /* type="password" */
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                style={{ fontSize: '1.5rem', height: '3.5rem', borderRadius: '0.5rem' }}
                            />
                        </div>
                        <button
                            onClick={login}
                            type="submit"
                            className="btn btn-primary btn-block mt-4"
                            style={{ fontSize: '1.5rem', height: '3.5rem', borderRadius: '0.5rem', width: "100%" }}
                        >
                            Login
                        </button>
                    <div className="text-center mt-4">
                        <Link style={{ fontSize: '1.5rem' }} href="/auth/new-account">
                            Create an Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login