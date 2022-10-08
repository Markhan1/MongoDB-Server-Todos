# MongoDB-Server-Todos

This repo is meant for a docker container.

### After cloning this repo:

1. Go to root directory, open console and type: "npm install" it will install all dependencies.

2. Create a file called: "config.env" and add two variables "ATLAS_URI", "PORT".  
ATLAS_URI has the uri link of your mongodb atlas account.  
PORT any number you want (5000 recommended).  
The 'config.env' will look something like this:  
```
ATLAS_URI=mongodb+srv://<username>:<password>@<cluster>.<id>.mongodb.net/?retryWrites=true&w=majority
PORT=5000
```