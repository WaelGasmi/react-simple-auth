import { PORT } from "./config/index.js";
import app from "./app.js";
import { connect } from "./db/dbConnection.js";

async function startServer() {
  try {
    console.clear();
    await connect();
    console.log("database connecting");

    app.listen(PORT, () => {
      console.log(`server running at ${PORT}`);
    });
  } catch (error) {
    console.log(`server failed to connect ${error.message}`);
  }
}

startServer();
