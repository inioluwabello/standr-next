import Link from "next/link";

export default function Index() {
  return (
    <>
      <br />
      <div
        style={{
          padding: "1rem",
          width: "800px",
          background: "#fff",
          margin: "0px auto",
          borderRadius: "10px",
          boxShadow: "rgb(204, 204, 204) 0px 3px 3px 0px",
        }}
      >
        <h5>Welcome!</h5>
        <p>
          This project is in progress and you are on the index page.
          <br />
          You can see the following pages
        </p>
        <ul>
          <li>
            <Link target="_blank" href="https://linkedin-two-chi.vercel.app/">
              LinkedIn Clone (Mobile, Tablet, Desktop)
            </Link>
          </li>

          <br />
          <li>
            <Link target="_blank" href="/product">
              EShop | Product Page (Desktop Only)
            </Link>
          </li>
          <li>
            <Link target="_blank" href="/authentication/login">
              EShop | Login
            </Link>
          </li>
          <li>
            <Link target="_blank" href="/authentication/register">
              EShop | Register
            </Link>
          </li>
          <li>
            <Link target="_blank" href="/authentication/forgot-password">
              EShop | Forgot Password
            </Link>
          </li>
          <li>
            <Link target="_blank" href="/authentication/password-sent">
              EShop | Password Sent
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
