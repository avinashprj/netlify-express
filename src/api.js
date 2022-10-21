import express, { Router } from "express";
import serverless from "serverless-http";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.get("/test", (req, res) => {
  res.json({
    hello: "test!",
  });
});

router.post("/testpost", (req, res) => {
  res.json({
    hello: "hit the POST!",
  });
});

app.use(`/.netlify/functions/api`, router);

export { router as api };
