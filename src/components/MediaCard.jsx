import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const useStyles1 = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 400,
	},
});
export default function MediaCard(props) {
	const classes = useStyles1();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={props.image}
					title={props.name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.name}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{props.descrpiton}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<a href={props.github} target="_blank">
					<IconButton size="small" aria-label="GitHub">
						<GitHubIcon />
					</IconButton>
				</a>
				<a href={props.linkedin} target="_blank">
				<IconButton size="small" aria-label="LinkedIn">
					<LinkedInIcon />
				</IconButton>
				</a>
				<a href={props.mail} target="_blank">
				<IconButton size="small" aria-label="Mail">
					<AlternateEmailIcon />
				</IconButton>
				</a>
			</CardActions>
		</Card>
	);
}
