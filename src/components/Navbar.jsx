export default function Navbar({ setCategory }) {
    return (
        <div className="navbar">
            <h2>News Explorer</h2>
            <div className="nav-buttons">
                <button onClick={() => setCategory("")}>All</button>
                <button onClick={() => setCategory("technology")}>Tech</button>
                <button onClick={() => setCategory("sports")}>Sports</button>
                <button onClick={() => setCategory("business")}>Business</button>
                <button onClick={() => setCategory("health")}>Health</button>


            </div>
        </div>
    );
}