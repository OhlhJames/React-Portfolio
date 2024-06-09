import Project from "../components/Project"
export default function PortfolioPage() {
    const projectData = [
        {
            title: "Crop Club",
            github: "https://github.com/OhlhJames/Crop-Club",
            link: "https://cropclub-5cbdffda2ae5.herokuapp.com/",
            img: "../../images/corn.jpeg"
        },
        {
            title: "CorknFork",
            github: "https://github.com/kleppy/corknfork",
            link: " ",
            img: "../../images/sharp-cheddar-baby-swiss-edited.jpg "
        },
        {
            title: "Honkai Calculator",
            github: "https://github.com/OhlhJames/HSR-Calculator",
            link: "https://ohlhjames.github.io/HSR-Calculator/",
            img: "../../images/calculations.jpg "
        },
    ]

    return (
        <div>
            <div>
                <h2>My Projects</h2>
                <Project projects={projectData} />
            </div>
        </div>
    )
}