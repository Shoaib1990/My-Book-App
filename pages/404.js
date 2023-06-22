import { useEffect } from 'react'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.css';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div className='my-5 not-found'>
            <h1 className="card-text text-body-secondary">Sorry ☹️, no page found</h1>
        </div>
    )
}

export default NotFound;