import Project from "../components/Project"
export default function PortfolioPage() {
    const projects = []
    const project1 = {
        title: "Crop Club",
        github: " ",
        link: " ",
        img: " "
    }
    const project2 = {
        title: "CorknFork",
        github: " ",
        link: " ",
        img: " "
    }
    const project3 = {
        title: "Honkai Calculator",
        github: " ",
        link: " ",
        img: " "
    }
    projects.push(project1)
    projects.push(project2)
    projects.push(project3)
    return (
        <div className="my-2">
          <h2>Our Products:</h2>
            <div className="flex-row">
              {projects.map((project) => (
                <Project
                  img={project.img}
                  title={project.title}
                  link={project.link}
                  github={project.github}
                />
              ))}
            </div>
        </div>
    )
}