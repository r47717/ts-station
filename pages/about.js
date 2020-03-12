import Layout from "../components/Layout";

function About() {
    return (
        <Layout page="about" title='Test Station'>
            <div>
                <div className="card w-50">
                    <div className="card-header">About</div>
                    <div className="card-body d-flex flex-column align-items-center">
                        <div>Copyright &copy; 2020 Mikhail Chernorutsky</div>
                        <div><a href="https://github.com/r47717" target="_blank">https://github.com/r47717</a></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About;
