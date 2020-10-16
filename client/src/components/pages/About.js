import React from 'react';
import { GitHubIcon} from '../icons'

const About = () => {
    
    return ( 
      <div title="About" description="This is the About page" >
            <div className="text-center mt-5">
                <h1>About</h1>
                <p>This project was built for practice purposes using React JS &amp; Redux JS
        integrated with mongoDB</p>

                <a className="btn btn-primary" href="https://github.com/wahidtaamallah/projet-2020">
                    <GitHubIcon width={"18px"}/> <span className="ml-2 mr-4">Visit github</span></a>
            </div>
         </div>
     );
}
 
export default About;