# Crowd Lector

A web tool to allow the crowd to choose which phrases generated by Lector are correct or not to represent a Freebase relation.

Used tecnologies:
- Node.js + express
- MongoDB + Mongoose

## Instructions
- Run `npm install` while pointing to the project folder.
- To populate the database run `node init` once. It requires MongoDB running, so run "start_mongo_service" (bat or sh depending on your OS) before.
- Rename "config.example.js" in "config.js" and change inside data according to your needings.
- Run "start_node_service" (bat or sh depending on your OS) or type `npm start`, then go to [http://localhost:3000](http://localhost:3000).
- run `node finalResults` to print results to standard output.
