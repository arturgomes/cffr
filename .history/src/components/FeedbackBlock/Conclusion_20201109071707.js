import React from 'react'
import { Link } from 'react-router-dom';
// import { PHigh, PSmall } from './styles'
import { Button, Typography } from "@material-ui/core";
import LoginSocial from '../Button'


function Conclusion(props) {
  console.log(props);
  return (<>
    <Typography >
      Obrigado! Pela sua participação, você acumulou 1 FeedCoin.
      </Typography>

    <Typography >
      Faça login ou se cadastre agora mesmo para começar a coletar pontos. Quanto mais feedbacks você der, mais chances você tem de ganhar prêmios e descontos!
      </Typography>
    <form style={{ marginTop: 16 }}>
      {/* <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <LoginSocial caption="Entre rápido com " />
        <Link to={`/signup/`}>
          <Button type="submit"
            style={{ marginBottom: 16 }}
            fullWidth
            variant="contained"
            color="primary">
            Cadastre-se e acumule FeedCoins!
          </Button>
        </Link>
        <Link to={`/login/`}>
          <Button type="submit"
            style={{ marginBottom: 16 }}
            fullWidth
            // variant="contained"
            color="primary"> Fazer login</Button>
        </Link>
      </div> */}

      <Link to={`/signup/${props.fid}`}>
        {/* <Link to={`/login/${props.fid}`}> */}
        <Button type="submit"
          style={{
            marginBottom: 16,
            backgroundColor: '#1DB954',
            color: '#fff',
          }}
          fullWidth
          // variant="contained"
          color="primary">Cadastre-se ou faça login rápido com Facebook ou Google</Button>
      </Link>
    </form>
  </>)
}

export default Conclusion

