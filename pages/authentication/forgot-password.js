import AuthLayout from "../../components/auth/auth-layout";
import styles from "../../styles/utils.module.css";
import Link from "next/link";

const title = "StandR: Login";
export default function Login() {
  return (
    <>
      <AuthLayout>
        <h4>Forgot Password</h4>
        <p className={styles.lead}>Please provide email to continue</p>
        <br />

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-bounding-box"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            </svg>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="d-grid gap-2">
          <Link
            className="btn btn-primary"
            href="/authentication/password-sent"
            type="button"
          >
            Request password reset
          </Link>
        </div>
      </AuthLayout>
    </>
  );
}
