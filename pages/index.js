import Link from "next/link";

export default function Index() {
  return (
    <>
      <p>This project is in progress<br />
      You are on the index page.<br />
      You can see the following pages</p>
      <ul>
        <li><Link target="_blank" href="https://linkedin-lemon-xi.vercel.app/">LinkedIn Clone (Mobile, Tablet, Desktop)</Link></li>

        <br />
        <li><Link target="_blank" href="/product">EShop | Product Page (Desktop Only)</Link></li>
        <li><Link target="_blank" href="/authentication/login">EShop | Login</Link></li>
        <li><Link target="_blank" href="/authentication/register">EShop | Register</Link></li>
        <li><Link target="_blank" href="/authentication/forgot-password">EShop | Forgot Password</Link></li>
        <li><Link target="_blank" href="/authentication/password-sent">EShop | Password Sent</Link></li>
      </ul>
      
    </>
  );
}