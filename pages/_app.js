import { LoginProvider } from "@/packages/login/LoginContext";
import "./_app.css";

export default function App({ Component, pageProps }) {
  return (
    <LoginProvider>
      <Component {...pageProps} />
    </LoginProvider>
  );
}
