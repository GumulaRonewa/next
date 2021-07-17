import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { DELIVERY } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'
export default function AddressForm() {
  var details=[];
       const dispatch = useDispatch();
   var user = useSelector((state) => state.delivery);

  var info ={
    firstName:"",
    lastName:"",
    address1:"",
    address2:"",
    city:"",
    zip:"",
    country:"",

  }
  const handleText = (e) => {
            const { name, value } = e.target;
            switch(name){
              case "firstName":
                info.firstName=value;
                dispatch(DELIVERY(info))
                return;
              case "lastName":
                info.lastName=value;
                dispatch(DELIVERY(info))
                return;
              case "address1":
                info.address1=value;
                dispatch(DELIVERY(info))
                return;
              case "address2":
                info.address2=value;
                dispatch(DELIVERY(info))
                return;
              case "city":
                info.city=value;
                dispatch(DELIVERY(info))
                return;
              case "zip":
                info.zip=value;
                dispatch(DELIVERY(info))
                return;
              case "country":
                info.country=value;
                dispatch(DELIVERY(info))
                return;
              default:
                return;

            }
 
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            defaultValue={user.firstName}
            id="firstName"
            onChange={handleText}
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName",
            defaultValue={user.lastName}
            name="lastName"
            label="Last name"
            onChange={handleText}
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            defaultValue={user.address1}
            label="Address line 1"
            onChange={handleText}
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            defaultValue={user.address2}
            label="Address line 2"
            onChange={handleText}
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            defaultValue={user.city}
            onChange={handleText}
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            defaultValue={user.zip}
            onChange={handleText}
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            defaultValue={user.country}
            onChange={handleText}
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}