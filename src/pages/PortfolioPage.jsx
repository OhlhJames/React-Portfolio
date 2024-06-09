import Project from "../components/Project"
export default function PortfolioPage() {
    const projectData = [
        {
            title: "Crop Club",
            github: "https://github.com/OhlhJames/Crop-Club",
            link: "https://cropclub-5cbdffda2ae5.herokuapp.com/",
            img: "../../public/images/corn.jpeg"
        },
        {
            title: "CorknFork",
            github: "https://github.com/kleppy/corknfork",
            link: " ",
            img: "../../public/images/sharp-cheddar-baby-swiss-edited.jpg "
        },
        {
            title: "Honkai Calculator",
            github: "https://github.com/OhlhJames/HSR-Calculator",
            link: "https://ohlhjames.github.io/HSR-Calculator/",
            img: "../../public/images/calculations.jpg "
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