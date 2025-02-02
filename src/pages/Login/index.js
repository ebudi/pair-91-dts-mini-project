import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [sandi, setSandi] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !sandi) {
      setError("Isi Semua Kolom");
      return;
    }

    const res = signin(email, sandi);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <div>
      <C.Logo>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"></img>
      </C.Logo>
      
      <C.Container>
        <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/61216e4c-b2b3-40e1-85d6-2b13eb86ef2b/BR-pt-20220606-popsignuptwoweeks-perspective_alpha_website_medium.jpg" className="backGround"></img>
        <C.Content>
          <C.Label>Sign In</C.Label>
          <Input
            type="email"
            placeholder="Ketik e-mail anda"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Kata sandi"
            value={sandi}
            onChange={(e) => [setSandi(e.target.value), setError("")]}
          />
          <C.labelError>{error}</C.labelError>
          <Button Text="Sign In" onClick={handleLogin} />
          <C.LabelSignup>
            Pelanggan Baru?
            <C.Strong>
              <Link to="/Register"> Register</Link>
            </C.Strong>
          </C.LabelSignup>
        </C.Content>
      </C.Container>
    </div>
  );
};

export default Signin;