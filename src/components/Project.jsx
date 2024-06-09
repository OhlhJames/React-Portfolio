
const Project = ({ projects }) => {
    return ( 
        <div class = "container" >
            {projects.map((project => (
                <div key = {project.title} class="piccard">
                    <h2>{project.title}</h2> 
                    <img src = {project.img} class = "portfolio-image"/>
                </div>
            )))}
        </div> 
    );
}
  
  export default Project;