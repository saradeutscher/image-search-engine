import type { Route } from "./+types/home";
import { App } from "../App";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Image Search" },
    { name: "description", content: "Image search powered by openAI's CLIP" },
  ];
}

export default function Home() {
  return <App />;
}
