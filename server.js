import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});