import Project from "../components/Project"
export default function PortfolioPage() {
    const projectData = [
        {
            title: "Crop Club",
            github: " ",
            link: " ",
            img: "../../public/images/corn.jpeg"
        },
        {
            title: "CorknFork",
            github: " ",
            link: " ",
            img: "../../public/images/sharp-cheddar-baby-swiss-edited.jpg "
        },
        {
            title: "Honkai Calculator",
            github: " ",
            link: " ",
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