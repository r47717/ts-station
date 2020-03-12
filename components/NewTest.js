import {insertTest} from "../services/test-service";
import {useState} from "react";

function NewTest(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('0');
    const [runs, setRuns] = useState('0');

    async function onSave() {
        await insertTest(props.origin, title, description, rating, runs);
        setTitle('');
        setDescription('');
        setRating('0');
        setRuns('0');
        props.newTestAdded();
    }

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className='row mb-3'>
                        <div className="col">
                            <label htmlFor="title">Title</label>
                            <input className='form-control' type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className="col">
                            <label htmlFor="description">Description</label>
                            <input className='form-control' type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className="col">
                            <label htmlFor="rating">Rating</label>
                            <input className='form-control' type="text" name="rating" value={rating} onChange={(e) => setRating(e.target.value)}/>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className="col">
                            <label htmlFor="runs">Runs</label>
                            <input className='form-control' type="text" name="runs" value={runs} onChange={(e) => setRuns(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className='btn btn-info' onClick={() => onSave()} disabled={!title.trim().length}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NewTest;