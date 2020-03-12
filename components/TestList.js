import Link from "next/link";

export default function TestList({tests}) {
    return (
        <table className='table table-bordered table-striped mt-5 mb-5'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {
                tests && tests.map(test =>
                    <tr key={test.id}>
                        <td>{test.id}</td>
                        <td>
                            <Link href={`/test/${test.id}`} as={`/test/${test.id}`}>
                                <a>{test.title}</a>
                            </Link>
                        </td>
                        <td>{test.description}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    )
}


