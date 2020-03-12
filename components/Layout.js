import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data';

function Layout(props) {
    const {categories} = data;
    const {title, page, activeCategory} = props;

    return (
        <>
            <div className="container">
                <Head>
                    <title>{title}</title>
                    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
                </Head>
                <nav>
                    <Link href={'/'}><a>
                        <div className={page === 'home' ? "nav-item active" : "nav-item"}>Home</div>
                    </a></Link>
                    {
                        categories && categories.length > 0 && categories.map(cat =>
                            <Link
                                key={cat.id}
                                href={`/category/${cat.id}`}
                            >
                                <a>
                                    <div
                                        className={page === 'category' && activeCategory == cat.id ? 'nav-item active' : 'nav-item'}>{cat.title}
                                    </div>
                                </a>
                            </Link>
                        )
                    }
                    <Link href={'/about'}><a>
                        <div className={page === 'about' ? "nav-item active" : "nav-item"}>About</div>
                    </a></Link>
                </nav>
                <div>
                    {props.children}
                </div>
            </div>
            { /* language=CSS */}
            <style jsx>{`
                nav {
                    display: flex;
                    justify-content: flex-start;
                    margin: 20px 0 40px 0;
                }

                .nav-item {
                    margin: 5px;
                    background: #666666;
                    padding: 10px 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .nav-item:hover {
                    background: #999999;
                }

                .nav-item.active {
                    background: #999999;
                }

                a {
                    text-decoration: none;
                    color: #FFFFFF;
                }

            `}</style>

            { /* language=CSS */}
            <style jsx global>{`
                button {
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}

export default Layout;
