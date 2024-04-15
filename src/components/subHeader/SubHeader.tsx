import { Link } from "react-router-dom";

export default function SubHeader() {
  return (
    <section className="w-full flex justify-center pr-10 lg:pr-16 py-3 bg-secondary">
      <nav className="container flex justify-end items-center gap-4 text-sm">
        <Link to={"/"}>Login</Link>
        <p>|</p>
        <Link to={"/"}>Sign Up</Link>
        <p>|</p>
        <Link to={"/"}>Contact us</Link>
      </nav>
    </section>
  );
}
