## Project Requirements:

1) Should Have Docker Desktop Installed
2) 2) Should download a zip or close this NestJs-Graghql App.


### Docker Installation

a) For the installion guide on windows visit https://docs.docker.com/docker-for-windows/install/

b) For the installation guide on Linux visit
https://docs.docker.com/install/linux/docker-ce/ubuntu/

c) For the installation guide on macOs visit https://docs.docker.com/docker-for-mac/


### NestJs Application Installation
Clone or download the zip of this project and open it in your preferred editor.
Run the following command in your project terminal to download and install project dependencies
```
npm install
```

### Build and Run Docker Container Locally
With your docker setup complete and the Nestjs project dependencies installed, now you're ready to build and run the project. 

To BUILD the docker container, run the following command:
```
docker build -t haggle-x-test .
```
kindly note that the "." at the end of the command is necessary.
The command will build the docker project and attatch a tag to it.

The build would take a while to complete. patience is required.

Once the build process is complete, run the following command to RUN the docker project:
```
docker run haggle-x-test
```

### Project Deployed on Heroku For Testing.
In order to test the project and as requested, here's the link to the delpoyed project on heroku for testing:

https://nestjs-graghql-staging.herokuapp.com/graphql


### Route testing parameters:

In the graphQL playground that appears, paste the following query object to test the route as specified:
```
query {
  web(pageUrl: "https://nestjs.com/") {
    pageUrl
  	title
  	description
  	largestImage
  }
}
```

Now change the pageUrl: "https://nestjs.com/", with other urls to have the meta data of the web page url returned.

To run NestJS application locally without docker, run 'npm run start'

Best regards!
