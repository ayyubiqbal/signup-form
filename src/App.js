import Input from "./components/input-group/input/Input";
import Button from "./components/button/Button";

const App = () => {
  return (
    <div style={{
      width: "70%",
      backgroundColor: "#fff",
      padding: "20px",
      margin: "1rem auto 0",
    }}>
      <div style={{
        textAlign: "center",
        lineHeight: "1rem"
      }}>
        <h2 style={{
          fontSize: "36px",
          fontWeight: 500
        }}>Sign Up</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <Input label="Name" type="text" />
      <Input label="Email" type="email" />
      <Input label="Password" type="password" />
      <div style={{
        padding: "0 3rem",
        // margin: "0 auto"
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Button variant="primary" type="submit" name="Submit" />
        <Button variant="warning" type="reset" name="Reset" />
        <Button variant="success" type="button" name="Success" />
      </div>
    </div>
  )
}

export default App;