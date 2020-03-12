import Link from 'next/link';
import Layout from "../components/Layout";

function Index({tests, origin}) {
    
    function newTestAdded() {
        window.location.reload();
    }
    
    return (
        <Layout title='Test Application'>
            <div>
                <h2>Выберите тест</h2>
                {
                    tests && tests.length > 0 && (<ul>{
                        tests.map((item) => (
                            <li key={item.id}><Link href={'/test/[id]'} as={`/test/${item.id}`}><a>{ item.title }</a></Link></li>
                        ))
                    }</ul>)
                }
                {
                    tests && tests.length === 0 && <div>No tests found</div>
                }
            </div>
        </Layout>
  )
}

Index.getInitialProps = async ({req}) => {
  const tests = [
      {id: 1, title: 'test 1'},
      {id: 2, title: 'test 2'},
      {id: 3, title: 'test 3'},
      {id: 4, title: 'test 4'},
      {id: 5, title: 'test 5'},
  ];

  return { tests }
};

export default Index;
