import Layout from "../../components/Layout";
import data from "../../data";
import Test from "../../components/Test";
import { FC } from "react";

interface IProps {
  category: { id: number; title: string; docs: string };
  tests: {
    id: number;
    q: {}[];
    a: { id: number; value: string }[];
    correct: number[];
  }[];
}

const Category: FC<IProps> = ({ category, tests }) => {
  if (!category) {
    return <div>404 - Not Found</div>;
  }

  const { id, title, docs } = category;

  return (
    <Layout
      page="category"
      title={`Tests by Category ${title}`}
      activeCategory={id}
    >
      <div>
        <div className="row">
          <div className="col-6 h-100">
            <div className="card h-100">
              <div className="card-header">Test Yourself</div>
              <div className="card-body">
                {tests.map(test => (
                  <Test key={test.id} test={test} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-6 h-100">
            <div className="card h-100">
              <div className="card-header">Documentation</div>
              <div className="card-body h-100">
                <iframe className="w-100 h-100" src={docs} frameBorder="0" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .row {
          height: 80vh;
        }
      `}</style>
    </Layout>
  );
};

export const getStaticProps: (params: any) => Promise<any> = async ({
  params: { id }
}) => {
  const { categories, tests: allTests } = data;

  const category = categories.find(cat => +cat.id === +id);
  const tests = allTests.filter(test => +test.category === +id);

  return {
    props: {
      category,
      tests
    }
  };
};

export const getStaticPaths = async () => {
  const { categories } = data;

  return {
    paths: categories.map(cat => ({
      params: { id: "" + cat.id }
    })),
    fallback: false // 404 if wrong param
  };
};

export default Category;
