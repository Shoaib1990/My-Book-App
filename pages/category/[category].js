import Layout from "components/Layout"
import Link from "next/link";
import Image from "next/image";
import Img_Not_Avaialble from "../../public/images/no_img_available.jpeg";
import 'bootstrap/dist/css/bootstrap.css';


const API_KEY = "Ivryj03hT3u9h2GP5SVmH9TrQOKClUlN";
export const getServerSideProps = async ({ params }) => {
    const URL = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${API_KEY}`
    const res = await fetch(URL);
    const data = await res.json();

    const lists = data.results.lists.find(item => item.list_name_encoded == params.category);

    return {
        props: { lists }
    }

}


export default function Category({ lists }) {
    return (
        <>
            <Layout title={lists.list_name} description={null} />

            <div className="container">

                <h1 className="display-5 fw-bild my-4">{lists.list_name}</h1>

                <div className="row">
                    {lists.books.map((book, index) => {
                        return (

                            <div className="col-sm-4 mb-5" key={index}>
                                <div className="card mb-3 h-100" >
                                    <div className="row">
                                        {book.book_image 
                                        ? <img className="rounded mx-auto d-block" width='450' height='450' src={book.book_image} alt={book.title} /> 
                                        : <Image className="rounded card-img-top mx-auto d-block" width='450' height='450' src={Img_Not_Avaialble} alt='image not avaialbe' /> 
                                        }
                                        
                                        <div>
                                            <div className="card-body">

                                                <p className="badge bg-danger">{book.rank}</p>
                                                <h4 className="card-title">{book.title}</h4>
                                                <p className="card-text text-body-secondary">by {book.author}</p>
                                                <p className="card-text">{book.description}</p>
                                                <Link className="btn btn-info"
                                                    target="_blank"
                                                    href={book.buy_links[0].url}>
                                                    {book.buy_links[0].name}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
