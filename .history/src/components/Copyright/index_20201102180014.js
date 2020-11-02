import React from 'react'
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
function Copyright() {
  return (
    <Box mt={8}>

      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://couponfeed.com.br">
          CouponFeed
      </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>

  );
}
