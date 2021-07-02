# Introduction

This repository contains two folders: Client and Server_API, each of them should be run on separate terminals and they must run simultanously since one depends on the other (client makes requests to the server app). 

The technology used to solve the exercice given is node.js for the server application and React for making the browser application and show the stats generated in the server.

There are plenty of options that are equally valid such as making a non-framework website or using other technologies but these are the ones that I have been using more frequently and feel more comfortable with.

# Server Application

As said before, this part of the solution is made with the Node JavaScript framework and is powered with Express. Essentially this folder has two key sources: **app.js** and **statsRoute.js**. The first one is the main file that runs the server with Express and listens for requests and the second one is responsible of handling and answering requests to the /stats route of the server. 

### statsRoute.js
In this last file there are some important considerations to take account of such as the way that we handle the stats (in this case an array of stats since we know the exact amount of isos there are).

It's also relevant how we manage the fact that the API this server is fetching is failing quite a lot (75% of the times) and in a first aproach it has been decided to iterate over and over until the response received from the API is valid (there might be a better way of handling this). So the user never should be given a non-valid response but the response times are being notably higher than with a correctly functional API.

It's also important to comment the fact that we are fetching each iso separately and doing that iteratively so the method of fetching all of them should also be asynchronous as well.

## Requirements for this part

 - node.js
 - Router
 - cors
 - express
 - node-fetch
 - nodemon (**for development, not mandatory**)
 - sha1

# Browser Application

On this other side of the application we are just going to fetch the server we'll have running on the side and display the corresponding stats. As said before I've chosen React for this part since I'm familiarized with this framework.

On one hand there is the service worker called stats.js that will fetch the server and return the data that is sending (the stats array itself) 'JSONized'.

On the other hand there is the main component defined: the Stat component.

### Stat component

As it's name describes, this component represents a Stat object obtained from the server application and it is formed by the flag of the country (the iso), the average score of the hotels as well as the top three hotels of that country.

In general and from a high abstraction point of view we map over the array of stats that is fetched every time the page renders and we render the Stat component for each of these stats.

There has been added a loading indicator to show the user whether the data is getting fetched or not.

## Requirements for this part

 - react
 - react-dom
 - react-service-tracker
