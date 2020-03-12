import {useRouter} from "next/router";
import Layout from "../../components/Layout";

function Test({title, description, rating, runs}) {
    const router = useRouter();
    const { id } = router.query;
    
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
                        <td>{description}</td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td>{rating}</td>
                    </tr>
                    <tr>
                        <td>Runs</td>
                        <td>{runs}</td>
                    </tr>
                </tbody>
            </table>
            <button className='btn btn-success' onClick={() => {}}>Submit</button>
        </div>
    
    </Layout>
  )
}


Test.getInitialProps = async ({req, query: { id }}) => {
  const { title, description, rating, runs } = {};
  
  return {
    id, title, description, rating, runs
  }
};


export default Test;
