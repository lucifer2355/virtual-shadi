const app = require("./index");

app.listen(process.env.PORT, () => {
  console.log(`app running on port ${process.env.PORT}`);
});
