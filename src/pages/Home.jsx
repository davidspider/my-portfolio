







import React, { useRef, useState, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Edges, useGLTF, Environment, Html, Line } from '@react-three/drei';

import myImage from '../assets/picture.png'; // 1. Import
import myImage2 from '../assets/picture2.png'; // 2. Import
import myImage3 from '../assets/picture3.png'; // 2. Import



function Bottle(props) {
  const { scene } = useGLTF('/modified_thermos_1k.gltf');
  
  // 1. Use useMemo and .clone() to create a unique copy for EACH bottle
  const clonedScene = React.useMemo(() => scene.clone(), [scene]);
  
  const meshRef = useRef();

  useFrame((state, delta) => {
    // 2. Safety check: make sure the mesh exists before rotating
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <primitive 
      ref={meshRef}
      object={clonedScene} // 3. IMPORTANT: Use the clonedScene, not the original scene
      {...props} 
      scale={20} // Make sure they are big enough to see!
    />
  );
}
function Box({ position, labelOffset = [1.9, 1.9, 0], title = "The Cube", description = "A 3D solid object.", ...props }) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    //meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group position={position}>
      {/* 1. THE MESH */}
      <mesh
        ref={meshRef}
        scale={active ? 1.4 : 1}
        onClick={(e) => {
          e.stopPropagation();
          setActive(!active);
        }}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={active || hovered ? 'hotpink' : 'orange'} />
        <Edges scale={1} threshold={15} color="black" />
      </mesh>

      {/* 2. THE BLUEPRINT LABEL & LINE */}
      {active && (
        <group>
          {/* Connector Line from center [0,0,0] to the labelOffset */}
          <Line
            points={[[0, 0, 0], labelOffset]} 
            color="white"
            lineWidth={1}
            transparent
            opacity={0.5}
          />
          
          <Html 
            distanceFactor={10} 
            position={labelOffset} 
            center 
            zIndexRange={[100, 0]} // Ensures active labels stay on top
          >
            <div style={{
              width: '180px',
              padding: '12px',
              background: 'rgba(255, 255, 255, 0.95)',
              border: '2px solid black',
              borderRadius: '8px',
              fontFamily: 'sans-serif',
              pointerEvents: 'none',
              boxShadow: '4px 4px 0px black',
              whiteSpace: 'normal'
            }}>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '14px' }}>{title}</h4>
              <p style={{ margin: 0, fontSize: '11px', lineHeight: '1.4' }}>
                {description}
              </p>
            </div>
          </Html>
        </group>
      )}
    </group>
  );
}


function Home() {

  // 1. Define an array of unique IDs for your bottles
  const bottleData = [1, 2, 3, 4, 5, 6]; 
  
  // 2. Track which bottle is at the start of the row
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    // Only slide if there are at least 3 items left to show
    if (startIndex < bottleData.length - 3) {
      setStartIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };


  return (
    <main>
      {/* Employee Section */}
      <section className="employee">
        <h1> <em>Hello!</em> I’m David Flores</h1>
        <p>I build websites that collect data that is used to train machine learning models 
	that are deployed to help website users. </p>
      </section>


       
       {/* --- CUBE SECTION --- */}
      <div style={{ 
        width: '100vw', 
        height: '50vh', 
        background: 'linear-gradient(135deg, #0f3460, #16213e)', // Dark Blue
        marginBottom: '0px' 
      }}>
        <Canvas camera={{ position: [0, 0, 9], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} />

          {/* Inside your Canvas in the Home function */}
<Suspense fallback={null}>
  {/* FIRST BOX */}
  <Box 
    position={[-4, 0, 0]} 
    labelOffset={[-1.5, 1.8, 0]} 
    title="Data Capture" // <-- CHANGE THIS TITLE
    description="I build systems that collect raw data for processing." // <-- CHANGE THIS TEXT
  />

  {/* SECOND BOX */}
  <Box 
    position={[0, 0, 0]} 
    labelOffset={[0, 2.2, 0]} 
    title="Machine Learning" // <-- CHANGE THIS TITLE
    description="Training neural networks to solve user problems." // <-- CHANGE THIS TEXT
  />

  {/* THIRD BOX */}
  <Box 
    position={[4, 0, 0]} 
    labelOffset={[1.5, 1.8, 0]} 
    title="Web Deployment" // <-- CHANGE THIS TITLE
    description="Scaling apps to reach thousands of users worldwide." // <-- CHANGE THIS TEXT
  />


 {/* FOURTH BOX */}
  <Box 
    position={[8, 0, 0]} 
    labelOffset={[1.5, 1.8, 0]} 
    title="Web Deployment" // <-- CHANGE THIS TITLE
    description="Scaling apps to reach thousands of users worldwide." // <-- CHANGE THIS TEXT
  />

</Suspense>



          <OrbitControls enableZoom={false} enableRotate = {true} enablePan={false}  />
        </Canvas>
      </div>

       {/* --- BOTTLE SECTION WITH TOGGLE ARROWS --- */}
      <div style={{ 
        width: '100vw', 
        height: '40vh', 
        background: 'blue', 
        position: 'relative' // Required for absolute positioning of buttons
      }}>
        
        {/* Left Toggle Arrow */}
        <button 
          onClick={prevSlide}
          disabled={startIndex === 0}
          style={{
            position: 'absolute', left: '5vw', top: '45%', zIndex: 10,
            padding: '15px', background: 'white', borderRadius: '50%', border: 'none', cursor: 'pointer',
            opacity: startIndex === 0 ? 0.3 : 1
          }}
        >
          ←
        </button>

        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            {/* 3. Slice the array to only show 3 bottles at a time */}
            {bottleData.slice(startIndex, startIndex + 3).map((id, index) => (
              <Bottle 
                key={id} 
                // index 0 is left (-5), 1 is center (0), 2 is right (5)
                position={[(index - 1) * 5, -1.5, 0]} 
              />
            ))}
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>

        {/* Right Toggle Arrow */}
        <button 
          onClick={nextSlide}
          disabled={startIndex >= bottleData.length - 3}
          style={{
            position: 'absolute', right: '5vw', top: '45%', zIndex: 10,
            padding: '15px', background: 'white', borderRadius: '50%', border: 'none', cursor: 'pointer',
            opacity: startIndex >= bottleData.length - 3 ? 0.3 : 1
          }}
        >
          →
        </button>
      </div>


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