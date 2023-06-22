import Layout from "components/Layout"
import 'bootstrap/dist/css/bootstrap.css';

const Categories = ({ booksCategories }) => {

    return (
        <>
            <Layout title='Category' />
            <div className="container">
                <h1 className="display-5 fw-bild my-4">Categories</h1>
                <ul className="list-group">
                {booksCategories.map((item, index) => {
                    return (
                        <li className="list-group-item list-group-item-action" key={index}>
                            <a className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-50-hover" href={`/category/${item.list_name_encoded}`}>{item.list_name}</a>
                        </li>)
                        }
                    )}
                </ul>
            </div>
        </>
    );
}

const API_KEY = "Ivryj03hT3u9h2GP5SVmH9TrQOKClUlN";
export const getStaticProps = async () => {
    const URL = `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${API_KEY}`
    const res = await fetch(URL);
    const data = await res.json();
    return {
        props: { booksCategories: data.results.lists }
    }

}


export default Categories;