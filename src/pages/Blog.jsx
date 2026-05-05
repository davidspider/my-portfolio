








import React, { Suspense } from 'react';
import { useGLTF, Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'


import arizonaImg1 from '../assets/picture4.png';
import texasImg2 from '../assets/picture5.png';
import carlsbadImg3 from '../assets/picture6.png';


// Reuse your SkinModel component (ensure it's in the same file or imported)
function SkinModel(props) {
  const { scene } = useGLTF('/anatomy_of_the_skin.glb');
  return <primitive object={scene} {...props} />;
}


function Blog() {
  return (
    <main className="section">
      <h2>My Blog</h2>
      <p>
        Welcome to my blog! This is where I’ll document
        my spring break adventures.
      </p>

      <article className="blog-post">
        <h3>Spring Break 2026</h3>

	{/* --- FLEX CONTAINER --- */}
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', gap: '20px' }}>
          
          {/* LEFT SIDE: Text (25%) */}
          <div style={{ flex: '0 0 25%' }}>
            <p>
              Welcome to my blog! This is where I’ll document my spring break adventures.
              Road Trip to Dallas Texas total of 3,200 miles there and back.
            </p>
          </div>

          {/* RIGHT SIDE: 3D Model (75%) */}
          <div style={{ flex: '0 0 75%', height: '500px', background: 
			'#cccccc', borderRadius: '10px' }}>

            
		<Canvas camera={{ position: [0, 0, 2] }}>
  			<ambientLight intensity={1.5} />
  			<Environment preset="studio" />
  
 			 <Suspense fallback={null}>
   				 <SkinModel scale={.16} position={[0, -1, 0]} />
  			 </Suspense>


 		 <OrbitControls 
    		enableZoom={true} 
    		enablePan={true} 
		 />
		</Canvas>




          </div>
        </div>

 


        <p>Road Trip to Dallas Texas total of 3,200 miles there and back. First We drove
	7 hours from San Diego to a hotel in Tucson Arizona, it was very windy there. The next
	moning we drove through sagurao National park, an 8 mile one way loop. After that we 
       drove to Carlsbad New Mexico passing through the many stoplight of El Paso. We arived 
      at the dusty city of Carlsbad enjoyed free tea and coffee at the hotel. The next 
      mornig we saw the Carlsbad Caverns. Walking for 2 hours downhill we ent deep into the cave
	and were amazed to find a giftshop and bathrooms at the bottom.  </p>




	<img src= {arizonaImg1} alt="saguro"/>
	<img src= {texasImg2} alt="texas"/>
	<img src= {carlsbadImg3} alt="cave"/>
      </article>
    </main>
  );
}


export default Blog;