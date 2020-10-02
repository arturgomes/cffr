import React from "react";
import "typeface-roboto";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// import { Feed, Item, Divider, Segment } from "semantic-ui-react";

const classes = makeStyles(theme => ({
 
  avatar: {
    borderRadius: "50px",
    border: "1px solid #444",
    width: theme.spacing(3),
    height: theme.spacing(3)
  }
}));

export const FeedItem = ({ nps, store, comment, avatar, date }) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar style={classes.avatar} alt="Remy Sharp" src={avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={comment === "" ? "Sem comentários" : comment}
          secondary={ `NPS: ${nps} - ${date}` }
        />
      </ListItem>
      <Divider/>
      {/* <Divider variant="inset" component="li" /> */}
    </>
  );
};

export default FeedItem;
