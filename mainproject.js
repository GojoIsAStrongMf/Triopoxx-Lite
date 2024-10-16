import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import basicAuth from "express-basic-auth";
import mime from "mime";
import fetch from "node-fetch";
// some inspiration from interstellar but not directly copying lol

const __dirname = process.cwd();
const server = http.createServer();
const app = express();
const PORT = process.env.PORT || 8080;
const cache = new Map();
