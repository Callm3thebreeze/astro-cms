import { Client, Databases, Storage, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.PUBLIC_PROJECT_ID);

const databases = new Databases(client);
const storage = new Storage(client);

export { client, databases, storage, ID };
