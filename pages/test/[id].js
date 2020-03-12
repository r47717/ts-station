import Layout from "../../components/Layout";
import data from "../../data";

function Test({test}) {
    const {id, title, category} = test;

    return (
    <Layout title='Test'>
        <div>
            <table className='table table-bordered table-striped mt-5 mb-5'>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{id}</td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td>{title}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Runs</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <button className='btn btn-success' onClick={() => {}}>Submit</button>
        </div>
    
    </Layout>
  )
}

export const getStaticProps = async ({params: {id}}) => {
    const {tests} = data;

    const test = tests.find(test => test.id == id);

    return {
        props: {
            test
        }
    }
};

export const getStaticPaths = async () => {
    const {tests} = data;

    return {
        paths: tests.map(test => ({
            params: {id: '' + test.id}
        })),
        fallback: false // 404 if wrong param
    };
};

export default Test;
