import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [sandi, setSandi] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !sandi) {
      setError("Isi Semua Kolom");
      return;
    } else if (email !== emailConf) {
      setError("e-mails tidak sama");
      return;
    }

    const res = signup(email, sandi);

    if (res) {
      setError(res);
      return;
    }

    alert("Pengguna berhasil terdaftar!");
    navigate("/");
  };

  return (
    <div>
      <C.Logo>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"></img>
      </C.Logo>

      <C.Container>
        <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/61216e4c-b2b3-40e1-85d6-2b13eb86ef2b/BR-pt-20220606-popsignuptwoweeks-perspective_alpha_website_medium.jpg" className="backGround"></img>
        <C.Content>
          <C.Label>Register</C.Label>
          <Input
            type="email"
            placeholder="Ketik E-mail Anda"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="email"
            placeholder="Konfirmasi E-mail Anda"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Masukkan sandi"
            value={sandi}
            onChange={(e) => [setSandi(e.target.value), setError("")]}
          />
          <C.labelError>{error}</C.labelError>
          <Button Text="Register" onClick={handleSignup} />
          <C.LabelSignin>
            Sudah memiliki akun?
            <C.Strong>
              <Link to="/">&nbsp;Sign In</Link>
            </C.Strong>
          </C.LabelSignin>
        </C.Content>
      </C.Container>
    </div>
  );
};

export default Signup;