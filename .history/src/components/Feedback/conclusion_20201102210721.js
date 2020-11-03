import React from 'react';
import { Link } from 'react-router-dom';
// import { PHigh, PSmall } from './styles'
import { Button, Typography } from "@material-ui/core";
import LoginSocial from '../Button'

import {
  setFeedbackTmp,
  // login, 
  getUser, isAuthenticated
} from "../../services/auth";
export default function Conclusion(props) {

  return (<>
    <Typography variant="body1" component="body1" style={{ marginBottom: 16 }}>
      Obrigado! Pela sua participação, você acumulou 1 FeedCoin.
      </Typography>
      Faça login ou se cadastre agora mesmo para começar a coletar pontos. Quanto mais feedbacks você der, mais chances você tem de ganhar prêmios e descontos!
    <form style={{ marginTop: 16 }}>
      <label htmlFor=""></label>


      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Link to={`/signup/${props.fid}`}>
          <Button type="submit"
            style={{ marginBottom: 16 }}
            fullWidth
            variant="contained"
            color="primary">Cadastre-se e acumule FeedCoins!</Button>
        </Link>
        <LoginSocial caption="Entre rápido com " fid={props.fid} />
        <Link to={`/login/${props.fid}`}>
          <Button type="submit"
            style={{ marginBottom: 16 }}
            fullWidth
            // variant="contained"
            color="primary"> Fazer login</Button>
        </Link>
      </div>

      <Link to={`/login/${props.fid}`}>
        <Button type="submit"
          style={{ marginBottom: 16 }}
          fullWidth
          // variant="contained"
          color="primary">Cadastre-se usando Facebook ou Google</Button>
      </Link>

      {/* <button className='btn1'>
            Fazer login
          </button> */}
    </form>
  </>)


}
