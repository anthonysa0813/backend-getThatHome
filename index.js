const express = require("express");
const app = express();
const routerApi = require("./routes");
const {
  logsError,
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/error.handler");
const cors = require("cors");

const port = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

routerApi(app);

app.use(logsError);
app.use(boomErrorHandler);
app.use(errorHandler);

// app.get("/properties", (req, res) => {
//   res.json({
//     id: "afvbdna",
//     name: "propiedad 1",
//   });
// });

app.listen(port, () => {
  console.log("the application listening in the port port");
});
