import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import https from "https";
import fs from "fs";
import path from "path";
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(express.static('dist'));

// Listen both http & https ports
const httpServer = http.createServer(app);
// const httpsServer = https.createServer({
//   key: fs.readFileSync('./ssl/privkey.pem'),
//   cert: fs.readFileSync('./ssl/fullchain.pem'),
// }, app);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, "dist",'index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

httpServer.listen(PORT, () => {
    console.log(`HTTP Server running on port ${PORT}`);
});

// httpsServer.listen(443, () => {
//     console.log('HTTPS Server running on port 443');
// });

