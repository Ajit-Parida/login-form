import "./styles.css";
import Button from "./component/Button";
export default function App() {
  return (
    <div id="container">
      <div className="from-wrap">
        <h1>Login</h1>

        <form action="">
          <div className="from-group">
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Enter email" />
          </div>

          <div className="from-group">
            <label for="password">Password</label>
            <input type="password" name="password" />
          </div>

          {/* button component */}
          <Button text="login" />
        </form>
      </div>
    </div>
  );
}
