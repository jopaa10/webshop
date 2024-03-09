import Link from "next/link";
import "./loginCard.scss";

export function LoginCard() {
  return (
    <div className="login-container">
      <ul>
        <li>
          <Link href={"/login"}> Sign In / Sign Up</Link>
        </li>
      </ul>
    </div>
  );
}
