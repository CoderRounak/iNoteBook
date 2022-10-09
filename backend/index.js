const connectToMogo = require("./db");
connectToMogo();

const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

// available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
