import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout(props) {
    return (
        <>
            <div className="container">
                <Head>
                    <title>{props.title}</title>
                    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
                </Head>
                <img src="/img/test.jpeg" style={{ width: "300px" }} alt=""/>
                <nav>
                    <Link href={'/'}><a><div className="nav-item">Home</div></a></Link>
                    <Link href={'/about'}><a><div className="nav-item">About</div></a></Link>
                </nav>
                <div>
                    {props.children}
                </div>
            </div>
            <style jsx>{`
                nav {
                    display: flex;
                    justify-content: flex-start;
                }
                .nav-item {
                    margin: 5px;
                    background: gray;
                    padding: 10px 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                a {
                    text-decoration: none;
                    color: #FFFFFF;
                }
            `}</style>
    
            <style jsx global>{`
                button {
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}

export default Layout;
