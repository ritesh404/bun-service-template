import { setGetRoute } from "@/server";

export default function setupRouting() {
  setGetRoute("/health", async function (req) {
    return { status: 200, body: { status: "alive" } };
  });

  // setup additional routes here
}
