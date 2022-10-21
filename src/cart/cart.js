import express from "express";
const app = express();
const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    res.status(200).json({ cart: { HELLO: "WORLD" } });
  } catch (error) {
    res.status(400).json({
      message: "There was some problem while retriving your cart",
      error,
    });
  }
});

app.use(`/.netlify/functions/products`, router);

export default app;
export const handler = serverless(app);
