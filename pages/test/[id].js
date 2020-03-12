import {useRouter} from "next/router";
import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
import Layout from "../../components/Layout";
import {saveTest, deleteTest} from "../../services/test-service";

function Test({title, description, rating, runs, origin}) {
    const router = useRouter();
    const { id } = router.query;
    
    async function onSubmit() {
        const res = await saveTest(origin, id);
        window.location.reload();
    }
    
    async function onDelete() {
        if (confirm("Are you sure?")) {
            const res = await deleteTest(origin, id);
            window.location = "/";
        }
    }
    
    
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
            <button className='btn btn-success' onClick={onSubmit}>Submit</button>
            <button className='btn btn-danger delete-btn float-right' onClick={onDelete}>Delete</button>
        </div>
    
    </Layout>
  )
}


Test.getInitialProps = async ({req, query: { id }}) => {
  const { origin } = absoluteUrl(req);
  const results = await axios.get(`${origin}/api/test?id=${id}`);
  const { title, description, rating, runs } = results.data.results;
  
  return {
    id, title, description, rating, runs, origin
  }
};


export default Test;