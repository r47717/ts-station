import Layout from "../../components/Layout";
import data from "../../data";
import TestList from "../../components/TestList";

function Category({category, tests}) {
    if (!category) {
        return <div>404 - Not Found</div>;
    }

    const {id, title} = category;

    return (
        <Layout page="category" title={`Tests by Category ${title}`} activeCategory={id}>
            <h1>Tests by Category <strong><i>{title}</i></strong></h1>
            {
                tests.length > 0
                    ? <TestList tests={tests}/>
                    : <div className="mt-4"><i>No tests found for this category</i></div>
            }
        </Layout>
    )
}

export const getStaticProps = async ({params: {id}}) => {
    const {categories, tests: allTests} = data;

    const category = categories.find(cat => cat.id == id);
    const tests = allTests.filter(test => test.category == id);

    return {
        props: {
            category,
            tests
        }
    }
};

export const getStaticPaths = async () => {
    const {categories} = data;

    return {
        paths: categories.map(cat => ({
            params: {id: '' + cat.id}
        })),
        fallback: false // 404 if wrong param
    };
};

export default Category;
