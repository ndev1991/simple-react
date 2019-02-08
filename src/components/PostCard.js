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

const PostCard = ({ post }) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
            {post.title}
          </Typography>
          <Typography component="p">
            {post.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostCard);