import app from "./app.js";
import DBConnect from "./database/db.js";

DBConnect()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is also running on port 3000!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
