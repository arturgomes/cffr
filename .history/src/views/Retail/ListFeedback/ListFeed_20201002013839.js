import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {format,parseISO} from "date-fns";
import pt from 'date-fns/locale/pt';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { FeedItem } from "./FeedbackItem";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListFeed() {
  const classes = useStyles();
    const listItems = Object.keys(this.state.fb).map(key => {
      const shop = this.state.fb[key];
      const { f, shop_name } = shop;
      const listShops = Object.keys(f).map(g => {
        const { nps_value, date, comment_optional } = f[g];
        let avatar = this.getAssets(nps_value);
        let date1 = format(parseISO(date), "dd ' de ' MMMM  ' de '  y", { locale: pt })
        //new Date(date).toLocaleDateString("pt-BR");
        // date1 = date1.toLocaleDateString()
        return (
          <FeedItem
            key={f}
            store={shop_name}
            nps={nps_value}
            comment={comment_optional}
            avatar={avatar}
            date={date1}
          />
        );
      });
      return listShops;
    });
  // }

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}