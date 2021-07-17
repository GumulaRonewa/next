import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { PAYMENT } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'

export default function PaymentForm() {
         const dispatch = useDispatch();

  var payments = [
  { name: 'Card holder', detail: '' },
  { name: 'Card number', detail: '' },
  { name: 'Expiry date', detail: '' },
  ];
  const handleText = (e) => {
            const { name, value } = e.target;
            switch(name){
              case "name":
                payments[0].detail=value;
                dispatch(PAYMENT(payments))
                return;
              case "cardNo":
                payments[1].detail=value;
                dispatch(PAYMENT(payments))
                return;
              case "exp":
                payments[2].detail=value;
                dispatch(PAYMENT(payments))
                return;
              
              default:
                return;

            }
 
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField onChange={handleText} required id="cardName" name="name" label="Name on card" fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            onChange={handleText}
            id="cardNumber"
            name="cardNo"
            onChange={handleText}
            label="Card number"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField onChange={handleText} name="exp" required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}