

interface Props {
    children: React.ReactNode
}


export default function AuthLayout ({ children }: Props ){
    <main className="d-flex justify-center">
        <div>
            { children }
        </div>
    </main>

}