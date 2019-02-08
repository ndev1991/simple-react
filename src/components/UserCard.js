import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
};

const UserCard = ({ person }) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {person.name}
          </Typography>
          <Typography component="p" color="textSecondary">
            Username: {person.username}
          </Typography>
          <Typography component="p" color="textSecondary" gutterBottom>
            Email: {person.email}
          </Typography>
          <Typography className="title" color="textSecondary">
            Address: {person.address.suite} {person.address.street} {person.address.city}
          </Typography>
          <Typography className="title" color="textSecondary">
            Zipcode: {person.address.zipcode}
          </Typography>
          <Typography className="title" color="textSecondary">
            Location: Lat {person.address.geo.lat} Lon {person.address.geo.lng}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

UserCard.propTypes = {
  person: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserCard);