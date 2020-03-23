import Layout from "../components/Layout";

function Index() {
  return (
    <Layout page="home" title="Test Station">
      <div className="wrapper">
        <div className="card card-resources">
          <div className="card-header">Major Web Resources</div>
          <div className="card-body">
            <a href="https://github.com/Microsoft/TypeScript">Official site</a>
            <a href="https://www.typescriptlang.org/play/index.html">
              Playground
            </a>
            <a href="https://en.wikipedia.org/wiki/TypeScript">Wikipedia</a>
            <a href="https://github.com/Microsoft/TypeScript">Github</a>
            <a href="https://github.com/Microsoft/TypeScript/wiki/Roadmap">
              Roadmap
            </a>
          </div>
        </div>
        <div className="card card-hejlsberg">
          <div className="card-header">Anders Hejlsberg about TS</div>
          <div className="card-body">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ET4kT88JRXs"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="card card-blog">
          <div className="card-header">Developers Blog</div>
          <div className="card-body">
            <iframe
              className="w-100 h-100"
              src="https://devblogs.microsoft.com/typescript/"
              frameBorder="0"
            />
          </div>
        </div>
      </div>

      {/* language=CSS */}
      <style jsx>{`
        .wrapper {
          height: 80vh;
          display: grid;
          grid-template-columns: 16% 16% 16% 16% 16%;
          grid-template-rows: 25% 25% 25% 25%;
          grid-gap: 20px;
        }

        .card a {
          display: block;
        }

        .card-resources {
          grid-area: 1 / 1 / 3 / 2;
        }

        .card-blog {
          grid-area: 1 / 5 / 5 / 7;
        }

        .card-hejlsberg {
          grid-area: 1 / 2 / 3 / 5;
        }

        .card-hejlsberg iframe {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </Layout>
  );
}

export default Index;
