import Link from "next/link";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/common.scss";
import data from "../data";

function Layout(props) {
  const { categories } = data;
  const { title, page, activeCategory } = props;

  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>{title}</title>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className="wrapper">
          <nav>
            <Link href={"/"}>
              <a>
                <div
                  className={page === "home" ? "nav-item active" : "nav-item"}
                >
                  Home
                </div>
              </a>
            </Link>
            {categories &&
              categories.length > 0 &&
              categories.map(cat => (
                <Link key={cat.id} href={`/category/${cat.id}`}>
                  <a>
                    <div
                      className={
                        page === "category" && activeCategory == cat.id
                          ? "nav-item active"
                          : "nav-item"
                      }
                    >
                      {cat.title}
                    </div>
                  </a>
                </Link>
              ))}
            <Link href={"/about"}>
              <a>
                <div
                  className={page === "about" ? "nav-item active" : "nav-item"}
                >
                  About
                </div>
              </a>
            </Link>
          </nav>
          <div className="children">{props.children}</div>
        </div>
      </div>
      {/* language=CSS */}
      <style jsx>{`
        .wrapper {
          display: flex;
          justify-content: stretch;
          height: 100%;
        }

        nav {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 50px;
        }

        .nav-item {
          margin: 5px;
          color: #333333;
          font-size: 19px;
        }

        .nav-item:hover {
        }

        .nav-item.active {
          text-decoration: underline;
          font-size: 25px;
        }

        .children {
          padding: 50px;
          margin: 0 0 0 30px;
          flex: 1 1 auto;
        }
      `}</style>

      {/* language=CSS */}
      <style jsx global>{`
        html,
        body {
          height: 100%;
        }
        body {
          font-family: Roboto, sans-serif;
          background: url("/img/ts.jpg") center / cover no-repeat;
        }
        button {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default Layout;
