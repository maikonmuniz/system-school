import express from "express";
import { ExpressAdapter } from "../../adapter/ExpressAdapter";
import { SchoolController } from "../../controller/SchoolController";
const app = express();

app.get("/school/:code", ExpressAdapter.create(SchoolController.getSchool));

app.listen(3000)
