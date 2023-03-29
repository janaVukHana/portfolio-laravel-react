import Project from "../components/Project";

export default function Dashboard() {
    return (
        <main id="dashboard" className="dark-section" style={{flex: '1 1 auto'}}>
            <div className="inner-container row">
                <div className="col">
                    <Project />
                </div>
            </div>
        </main>
    )
}