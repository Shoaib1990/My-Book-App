import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';
import Layout from "components/Layout"

const Categories = () => {

    return (

        <>
            <Layout />
            <Link className="d-flex align-items-center" href="/"></Link>
            <main className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">

                    <h1 className="display-5 fw-bold">New York Times</h1>
                    <p className="col-md-8 fs-4">This site provides information about book reviews and The New York Times Best Sellers lists</p>
                    <Link className="btn btn-primary btn-lg" href="/category/">NY Books Categories</Link>
                </div>
            </main>
        </>
    );
}
export default Categories;