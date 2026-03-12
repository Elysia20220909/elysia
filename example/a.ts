import html from "../example/index.html";
import { Elysia, t } from "../src";

const app = new Elysia().get("/", html).listen(3000);
