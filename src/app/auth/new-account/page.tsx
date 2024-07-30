import Head from "next/head"
import Link from "next/link"

const Register = () => {
    return (
        <div className="container">
            <Head>
                <title>Sign Up</title>
            </Head>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card p-5 shadow-lg" style={{ width: '36rem' }}>
                    <h1 className="text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Sign Up</h1>
                    <form>
                        <div className="form-group mt-4">
                            <label htmlFor="email" style={{ fontSize: '1.5rem' }}>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Nombre"
                                style={{ fontSize: '1.5rem', height: '3.5rem', borderRadius: '0.5rem' }}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="email" style={{ fontSize: '1.5rem' }}>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                style={{ fontSize: '1.5rem', height: '3.5rem', borderRadius: '0.5rem' }}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="password" style={{ fontSize: '1.5rem' }}>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                style={{ fontSize: '1.5rem', height: '3.5rem', borderRadius: '0.5rem' }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary btn-block mt-4"
                            style={{ fontSize: '1.5rem', height: '3.5rem', borderRadius: '0.5rem', width: "100%" }}
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <Link style={{ fontSize: '1.5rem' }} href="/auth/login">
                           Already have an account? Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register