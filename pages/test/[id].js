import Layout from "../../components/Layout";
import data from "../../data";

function Test({test}) {
    const {id, title, category, q: questions} = test;

    function onClick(qid, answer) {
        console.log(qid, answer);
    }

    return (
    <Layout title='Test'>
        <div>
            <div className="questions">
                {
                    questions.map(q => <div key={q.id} className="card">
                        <div className="card-header">{q.title}</div>
                        <div className="card-body">
                            {
                                q.a.map(answer => <div key={answer}>
                                    <input type="radio" name={q.id} value={answer} onClick={() => onClick(q.id, answer)}/>&nbsp;&nbsp;{answer}
                                </div>)
                            }

                        </div>
                    </div>)
                }
            </div>
            <div className="button-group mt-5">
                <button className='btn btn-success' onClick={() => {}}>Previous</button>
                <button className='btn btn-success float-right' onClick={() => {}}>Next</button>
            </div>
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
