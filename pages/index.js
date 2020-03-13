import Layout from "../components/Layout";
import Link from 'next/link';
import data from "../data";
import {countTestsRun, countTestsSuccessful, restore} from "../services";

function Index({categories, tests}) {
    const results = restore();

    return (
        <Layout page="home" title='Test Station'>
            {
                categories.map(cat => <div key={cat.id} className="card single-category-card">
                    <div className="card-header">
                        <h3>
                            <Link href={`/category/${cat.id}`} as={`/category/${cat.id}`}><a>{cat.title}</a></Link>
                        </h3>
                    </div>
                    <div className="card-body">
                        <table className={'table table-condensed table-borderless table-hover'}>
                            <tbody>
                            <tr>
                                <td>Tests Available:</td>
                                <td>
                                    <span
                                        className={'badge badge-pill badge-warning'}
                                    >
                                        {tests.reduce((acc, test) => test.category == cat.id ? acc + 1 : acc, 0)}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>Tests Run:</td>
                                <td>
                                    <span
                                        className={'badge badge-pill badge-warning'}
                                    >
                                        {countTestsRun(results, cat.id)}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>Tests Passed:</td>
                                <td>
                                    <span
                                        className={'badge badge-pill badge-warning'}
                                    >
                                        {countTestsSuccessful(results, cat.id)}
                                    </span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>)
            }
            { /* language=CSS */}
            <style jsx>{`
                .single-category-card {
                    display: inline-block;
                    min-width: 300px;
                    min-height: 200px;
                    margin: 0 20px 20px 0;
                }

                span.badge {
                    padding: 7px 10px;
                    font-size: 90%;
                }
            `}</style>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const {categories, tests} = data;

    return {
        props: {
            categories,
            tests
        }
    }
};

export default Index;
