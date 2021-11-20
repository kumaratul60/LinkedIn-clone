import { makeStyles } from "@material-ui/core/styles";

import Animation from "../../components/Animation/Animation";
import LottieRelaxing from "../relaxing.json";
import Login from "./Login";

const Style = makeStyles((theme) => ({
  login: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    flex: 1,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& > *": {
      height: 550,
    },
  },
  loginCard: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 50px",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
}));

const SignIn = () => {
  const classes = Style();
  return (
    <div className={classes.login}>
      <div className={classes.banner}>
        <Animation src={LottieRelaxing} />
      </div>
      <div className={classes.loginCard}>
        <Login />
      </div>
    </div>
  );
};

export default SignIn;
