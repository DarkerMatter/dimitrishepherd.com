# DimitriShepherd.com

This is the source code for my personal website, hosted at https://dimitrishepherd.com.

The site is built using React, a popular JavaScript library for building user interfaces.


## Code Structure

The project follows the standard structure of a React application created using Create React App. The source code is mainly located in the src directory.

### src Directory

The `src` directory contains all the React components, CSS, and JavaScript code that make up the application.

* `src/index.js`: This is the JavaScript file that kickstarts the React application by rendering the root App component.

* `src/App.js`: This is the root component of the application. It usually contains the routing logic and global state management.

* `src/components`: This directory contains all the reusable React components that are used throughout the application. Each component is typically in its own file, with the file name matching the component name.

* `src/assets`: This directory contains static assets like images, icons, and other media that are used in the application.

* `src/styles`: This directory contains all the CSS files. Styles can be global or specific to individual components.

### React Components

React components are the building blocks of a React application. Each component is a JavaScript function or class that optionally accepts inputs called 'props' and returns a React element that describes how a section of the UI should appear.

For example, in AboutMe.js, we have a functional component AboutMe which returns a section of HTML-like JSX code. The JSX returned by the component is a description of what the UI should look like for this part of the application.
Building and Running the Project Locally

Clone the repository:


`git clone https://github.com/DarkerMatter/dimitrishepherd.com.git`

Navigate to the project directory and install the dependencies:

`cd dimitrishepherd.com`
`yarn install`

Start the development server:

`npm start`

The website should now be running at http://localhost:3000.
Contact

If you want to contact me, you can reach me at dimitri@dimitrishepherd.com or on my discord at https://darker.systems/discord
