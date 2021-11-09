import React, {Fragment} from 'react';
import "./style.css";
import {AppRouter} from './Routers/AppRouter';
import { HeaderMatrix } from './components/HeaderMatrix';
// import * as Realm from "realm-web";

// const app = new Realm.App({ id: "matrix-xlvch" });

// async function loginEmailPassword(email, password) {
//     // Create an anonymous credential
//     const credentials = Realm.Credentials.emailPassword(email, password);
//     try {
//       // Authenticate the user
//       const user = await app.logIn(credentials);
//       // `App.currentUser` updates to match the logged in user
//       assert(user.id === app.currentUser.id)
//       return user
//     } catch(err) {
//       console.error("Failed to log in", err);
//     }
//   }
//   loginEmailPassword("alveirobueno@gmail.com", "matrixstyle2021").then(user => {
//     console.log("Successfully logged in!", user)
//   })

// const express = require("express");
// const morgan = require("morgan");
// const app1 = express();


// //settings
// const port = 3000;
// // app.set("port", process.env.PORT || 3000);

// //middleWares
// app1.use(morgan("dev"));
// app1.use(express.json());

// //Routes
// app1.use("/api/tasks", require("./backend/TaskRoutes"));


// app1.listen(port, () => {
//     console.log(`Server on port ${port}`);
// });

function App() {
  return (
    <Fragment>
      <HeaderMatrix />
      <AppRouter />
    </Fragment>
  );
};

export default App;