import express from 'express';
import dbSetup from './src/db/dbSetup.js';
import userRout from "./src/routs/user.js";

const app = express();
const port = process.env.port || 3000;

dbSetup();

app.use(express.json());
app.use("/", userRout);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
