import myImage from '../assets/picture.png'; // 1. Import
import myImage2 from '../assets/picture2.png'; // 2. Import
import myImage3 from '../assets/picture3.png'; // 2. Import

function Home() {
  return (
    <main>
      {/* Employee Section */}
      <section className="employee">
        <h1> <em>Hello!</em> I’m David Flores</h1>
        <p>I build websites that collect data that is used to train machine learning models 
	that are deployed to help website users. </p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I’m a student learning web development. I like to finish 
          building applications with code and research necessary 
          technologies to finish the job. Currently I am studying at Cal State San Marcos.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <ProjectCard 
	    img={myImage}
            title="Medicinal and Nutritious Plant" 
            desc="Trained a Machine Learning Model using 5-6 values from a dattaset 
		containing 27 attributes to predict the medicinal and nutritional 
		contents of a plant."
          />
          <ProjectCard 
	    img={myImage2}
            title="Servers With Express" 
            desc="Using an Express API a server is created to support data storage and 
		retrival from a website." 
          />
          <ProjectCard 
	    img={myImage3}
            title="Pore Fection" 
            desc="A poretfolio website used to reccomend skincare products for users
		of limited distinct skin qualities." 
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <a href="mailto:hello@example.com">Send me an email</a>
        <p>GitHub: ://github.com</p>
      </section>
    </main>
  );
}

function ProjectCard({img, title, desc }) {
  return (
    <div className="project-card">
      <img src={img} alt={title}/>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Home;