import Link from "next/link";
import DonutApp from "../components/DonutApp";

export default function About() {
  return (
    <DonutApp>
      <p>We are a family company lalala</p>
      <Link href="/">
        <a title="🏠 Home">🏠 Back home</a>
      </Link>
    </DonutApp>
  );
}
