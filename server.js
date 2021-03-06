const app = require("./app");
const { syncAndSeed } = require("./db");

const port = process.env.PORT || 3000;

const init = async () => {
  try {
    await syncAndSeed();
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

init();
