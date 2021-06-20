import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import {renderToString} from "react-dom/server";
import App from '../client/components/App';


const port = 4000;

const app = express();
app.use("*", (_, res, next) => {
fs.readFile(path.resolve(__dirname, "../../build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("error");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${renderToString(<App />)} </div>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, '../../build')));

app.listen(port, () => console.log(`app is running on port ${port}`));

export default app;
