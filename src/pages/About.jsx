import {useEffect} from "react";
function About() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

    return (
      <>
        <h1 className="text-6xl mb-4">GitHub App</h1>
        <p className="mb-4 text-2xl font-light">
          An app developed using ReactJS and GitHub API to search users and view their profile details.
        </p>
        <p className="text-lg text-gray-500">
          Version <span>1.0</span>
        </p>
        <p className="text-lg text-gray-500">
          Developed By:
          <a href="https://www.linkedin.com/in/devesh-pandey-019b46ab/"> Devesh Pandey</a>
        </p>
        {/* <p className="text-lg text-gray-500">
          <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" 
            data-theme="light" data-type="HORIZONTAL" data-vanity="devesh-pandey-019b46ab" 
            data-version="v1">
          </div>
        </p> */}
      </>
    );
  }
  export default About;