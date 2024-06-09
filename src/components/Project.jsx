
const Project = ({ projects }) => {
    return ( 
        <div class = "container" >
            {projects.map((project => (
                <div key = {project.title} class="piccard">
                    <a href = {project.link}>{project.title}</a>
                    <p><a href = {project.github}><img src = "../../images/github.svg" class = "logo"/></a></p>
                    <img src = {project.img} class = "portfolio-image"/>
                </div>
            )))}
        </div> 
    );
}
  
  export default Project;