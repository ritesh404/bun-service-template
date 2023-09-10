import { setGetRoute } from "../server";

export default function setupRouting() {
  setGetRoute("/health", function (req, res) {
    res.json({ status: "alive" });
  });

  // setup additional routes here
}
