import Layout from "../components/Layout";
import Link from "next/link";
import data from "../data";
import {
  countTestsAvailable,
  countTestsRun,
  countTestsSuccessful,
  restore
} from "../services";

function Index({ categories, tests }) {
  const results = restore();
  const summary = [];

  for (let category of categories) {
    summary.push({
      category,
      available: countTestsAvailable(tests, category.id),
      run: countTestsRun(data, results, category.id),
      passed: countTestsSuccessful(data, results, category.id)
    });
  }

  function onClearResults(catid) {}

  return (
    <Layout page="home" title="Test Station">
      {summary.map(
        item =>
          item.available > 0 && (
            <div key={item.category.id} className="card">
              <div className="card-header">
                <h3>
                  <Link
                    href={`/category/${item.category.id}`}
                    as={`/category/${item.category.id}`}
                  >
                    <a>{item.category.title}</a>
                  </Link>
                </h3>
              </div>
              <div className="card-body">
                <table
                  className={
                    "table table-condensed table-borderless table-hover"
                  }
                >
                  <tbody>
                    <tr>
                      <td>Tests Available:</td>
                      <td>
                        <span className={"badge badge-pill badge-warning"}>
                          {item.available}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Tests Run:</td>
                      <td>
                        {item.run > 0 && (
                          <span className={"badge badge-pill badge-warning"}>
                            {item.run}
                          </span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Tests Passed:</td>
                      <td>
                        {item.run > 0 && (
                          <span className={"badge badge-pill badge-warning"}>
                            {item.passed}
                          </span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => onClearResults(item.category.id)}
                >
                  Clear results
                </button>
              </div>
            </div>
          )
      )}
      {/* language=CSS */}
      <style jsx>{`
        .card {
          display: inline-block;
          min-width: 300px;
          min-height: 200px;
          margin: 0 20px 20px 0;
          box-shadow: 10px 10px 10px #777777;
        }
        span.badge {
          padding: 7px 10px;
          font-size: 90%;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { categories, tests } = data;

  return {
    props: {
      categories,
      tests
    }
  };
};

export default Index;
