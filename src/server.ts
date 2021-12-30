import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const router = express();

const port: string | number = process.env.PORT || 1337;

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("<h1>Home</h1>");
});

router.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
