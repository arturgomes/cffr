import React from 'react';

export default function HLinks() {
  return (
    <>
    <>
            {/* <HeaderLinks/> */}

            <List 
            className={useStyles.list}
              //className="list-menu"
              // style={{  }}
              >
                <ListItem //className={useStyles.listItem}
                >
                  <Button
                    href="/blog"
                    // className={useStyles.navLink}
                    // onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Blog
                  </Button>
                </ListItem>
              {isAuthenticated() ?
                (<ListItem //className={useStyles.listItem}
                >
                  <Button
                    href={getTu() === '897316929176464ebc9ad085f31e7284' ? "/customer" : "/retail"}
                    // className={useStyles.navLink}
                    // onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Seu Perfil
                  </Button>
                </ListItem>) :
                (<ListItem //className={useStyles.listItem}
                >
                  <Button
                    href="/login"
                    //className={useStyles.navLink}
                    //  onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Área do cliente
                 </Button>
                </ListItem>)
              }
              <ListItem //className={useStyles.listItem}
              >
                <Button
                  href="/rsignup"
                  // className={useStyles.registerNavLink}
                  // style={{ fontSize: "14px" }}
                  // onClick={e => e.preventDefault()}
                  color="rose"
                  round
                >
                  Quero VENDER MAIS!
                  </Button>
              </ListItem>
            </List></>
    </>
  );
}
