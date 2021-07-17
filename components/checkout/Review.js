import { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'



const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
   var count = useSelector((state) => state.counter);
     const [address, setAddress] = useState([]);

   var user = useSelector((state) => state.delivery);
   var payments = useSelector((state) => state.payment);
  var sub = useSelector((state) => state.total);
  var tax =sub*0.15;
  sub =sub*0.85;
  var ship= sub===0 ? 0:100;
  var total =ship+tax+sub;
   count=count.cartItems;
      count =count.reverse()
  useEffect(() => {
    var userinfo=[];
    userinfo.push(user.address1)
    userinfo.push(user.address1)
    userinfo.push(user.city)
    userinfo.push(user.zip)
    userinfo.push(user.country)
    setAddress(userinfo)
  },[]);
  
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {count.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={`Size:${product.size}`} />
            <Typography variant="body2">{product.Price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ZAR {total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{address.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}