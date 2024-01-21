# Personal MERN Template

## Motivation
Tired of constantly repeating the same steps for starting my MERN stack projects, I chose to create a template that I can modify whenever I want to. Hopefully, I can save some time with this.

## Tech Stack

### Full Stack
- <a href="https://www.mongodb.com/">MongoDB</a>
- <a href="https://expressjs.com/">Express</a>
- <a href="https://react.dev/">React</a>
- <a href="https://nodejs.org/en">Node</a>
### Testing
- <a href="https://jestjs.io/">Jest</a>
- <a href="https://www.npmjs.com/package/supertest">SuperTest</a>
- <a href="https://www.npmjs.com/package/cross-env">Cross-env</a>
### Environment Variables
- <a href="https://github.com/dotenv-org/dotenv-vault">Dotenv-vault</a>

## Hosting

### Frontend
- <a href="https://www.netlify.com/">Netlify</a>
### Backend
- <a href="https://render.com/">Render</a>
### Database
- <a href="https://www.mongodb.com/">Free MongoDB Cluster</a>

## How to copy template

- <a href="https://app.tango.us/app/workflow/Utilizing-GitHub-Template-to-Create-a-New-Repository-e309c6d4040944f38353eaf75582b6d9">Demo</a>

## Development Resources

### MongoDB Compass
<a href="https://www.mongodb.com/try/download/compass">MongoDB Compass</a> is a GUI to see all the actions occuring with your MongoDB database. Just as a side note we will probably use a test database and production database. I don't really mean anything serious when I say production.

### Postman
<a href="https://www.postman.com/downloads/">Postman</a> is another great GUI for testing HTTP requests to your RESTful APIs. It basically performs curl commands for you. Just to be clear though I am probably going to prefer using Jest unless its not worth the time.

### Docker
1. Install <a href="https://docs.docker.com/get-docker/">Docker Desktop</a> for Mac or Windows
    - If you are on windows remember to enable the "Use the WSL 2 based engine" setting
2. Run the following command in the root directory to launch the application

    > docker-compose up --build -d
3. Run the following command to close the applicatio

    > docker-compose down

### Environment Variables
I haven't gotten around to implementing dotenv-vault yet so you either have to ask me or create your own <a href="https://www.mongodb.com/basics/clusters/mongodb-cluster-setup">MongoDB cluster</a> (its free) then fill in the credentials in a .env file in the server directory

## Learning Resources

### Pull Requests
- <a href="https://www.youtube.com/watch?v=8lGpZkjnkt4&t=1s">How to make a pull request</a>

### HTML
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">List of elements and properties</a>

### CSS
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">List of properties</a>
- <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox Guide</a>
- <a href="https://www.w3schools.com/css/css3_transitions.asp">CSS Transitions</a>
- <a href="https://www.w3schools.com/css/css3_animations.asp">CSS Animations</a>
- <a href="https://cubic-bezier.com/#.17,.67,.83,.67">Cubic Bezier</a>

### TypeScript
- <a href="https://www.typescriptlang.org/docs/handbook/basic-types.html">Basic Types</a>

### React
- <a href="https://medium.com/@andrea.chiarelli/the-functional-side-of-react-229bdb26d9a6">Functional Aspects of React</a>
- <a href="https://react.dev/reference/react/hooks">React Hooks</a>
    - useState & useEffect are the most important if you want to focus on those
- <a href="https://dev.to/antdp425/react-fetch-data-from-api-with-useeffect-27le">Fetching data with useEffect</a>

### Express
- <a href="https://expressjs.com/en/5x/api.html">Documentation</a>
- <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes">Routes & Controllers</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">Status Codes</a>

### Mongoose
- <a href="https://mongoosejs.com/docs/guide.html">Documentation</a>

### Jest
- <a href="https://jestjs.io/">Documentation</a>
- <a href="https://www.twilio.com/blog/unit-integration-end-to-end-testing-difference">Unit vs Integration vs E2E Testing</a>