import arizonaImg1 from '../assets/picture4.png';
import texasImg2 from '../assets/picture5.png';
import carlsbadImg3 from '../assets/picture6.png';

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