// 开发测试用这个文件
import dotenv from "dotenv";
import path from "node:path";
dotenv.config({
  path: path.resolve(__dirname, "./.env"),
});
import serve from "./app";
import config from "./config/config";
serve(config.port);
