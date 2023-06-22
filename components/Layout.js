import Logo from "../public/images/nyt.png";
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Layout({ children, pageMeta, title, description }) {
    const router = useRouter();

    const meta = {
        title: title ? title : 'NYT Best Seller Books',
        description: description ? description : 'The New York Times Best Sellers are up-to-date and authoritative lists of the most popular books in the United States, based on sales in the past week, including fiction, non-fiction, paperbacks, children’s books, audiobooks, graphic books and more.',
        type: 'website',
        ...pageMeta
    };

    if (router.isFallback) {
        <h1>Data is loading</h1>;
      }
    
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
            </Head>
            <header className="px-3 py-3 border-bottom">
                <Link className="d-flex align-items-center" href="/">
                    <Image className="" width="39" height="54.33" src={Logo} alt="logo" />

                    {children}
                </Link>
            </header>
            <div className="container mt-5">
                {router.pathname !== '/' &&
                    <button className="btn btn-outline-dark" onClick={() => router.back()}>Back</button>}
            </div>
        </>

    )
}