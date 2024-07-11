import { Client, Databases, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.PUBLIC_PROJECT_ID); // Reemplaza con tu Project ID

const databases = new Databases(client);

export { client, databases, ID };
