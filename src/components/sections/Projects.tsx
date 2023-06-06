import ProjectCard from "../ProjectCard";

export const Projects = () => {
	return (
		<section id="projects" className="projects section is-medium">
			<div className="projects-container">
				<h1>Projects</h1>
				<div className="columns">
					<div className="column is-multiline is-6">
						<ProjectCard username="DarkerMatter" repository="dimitrishepherd.com" />
						<ProjectCard username="DarkerMatter" repository="EndReset" />
					</div>
					<div className="column is-multiline is-6">
						<ProjectCard username="DarkerMatter" repository="school-docs" />
						<ProjectCard username="DarkerMatter" repository="EvoLands-Music" />
					</div>
				</div>
				<h1>Hosting</h1>
				<div className="columns">
					<div className="column is-full">
						<p
							style={{
								textAlign: "center",
								fontSize: "1.2rem"
							}}
						>
							Do you need something hosted?.
							<br />
							Feel free to join my discord server and shot me a message{" "}
							<a target="_blank" href="http://darker.systems/discord">here</a>.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
