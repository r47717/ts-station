import axios from 'axios';
import Link from 'next/link';
import absoluteUrl from 'next-absolute-url';
import Layout from "../components/Layout";
import NewTest from "../components/NewTest";
import {deleteAllTests} from "../services/test-service";

function Index({tests, origin}) {
    
    function newTestAdded() {
        window.location.reload();
    }
    
    async function onDeleteAll() {
        if (confirm("Are you sure?")) {
            await deleteAllTests(origin);
            window.location.reload();
        }
    }
    
    return (
        <Layout title='Test Application'>
            <div>
                <h2>Выберите тест</h2>
                {
                    tests.length > 0 && (<ul>{
                        tests.map((item) => (
                            <li key={item.id}><Link href={'/test/[id]'} as={`/test/${item.id}`}><a>{ item.title }</a></Link></li>
                        ))
                    }</ul>)
                }
                {
                    tests.length === 0 && <div>No tests found</div>
                }
            </div>
            <div>
                <NewTest origin={origin} newTestAdded={newTestAdded}/>
            </div>
            <div>
                <button className='btn btn-danger' disabled={tests.length === 0} onClick={onDeleteAll} style={{marginTop: "50px"}}>Delete all</button>
            </div>
        </Layout>
  )
}

Index.getInitialProps = async ({req}) => {
  const { origin } = absoluteUrl(req);
  const res = await axios.get(`${origin}/api`);
  const tests = res.data.results;

  return { tests, origin }
};

export default Index;
