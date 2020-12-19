import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Project Name:
        </Typography>
        <Typography variant="h5" component="h2">
          Project
        </Typography>
		<br/>
        <Typography className={classes.pos} color="textSecondary">
          Project Files:
        </Typography>
        <Typography variant="body2" component="p">
          <ul>
			  <li>Project Files</li>
			  <li>Project Files</li>
			  <li>Project Files</li>
		  </ul>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">OPen Project</Button>
      </CardActions>
    </Card>
  );
}
