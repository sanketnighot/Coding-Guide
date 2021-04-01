import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ProjectCard from './ProjectCard';




const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Projects = () => {
    const classes = useStyles();
    return (

        <>
            <div className="row">
                <div className="mt-5 col-md">
                    <h1 className="text-center mt-5">{"< "}<strong>All Projects</strong>{" />"}</h1>
                </div>
            </div>
            <div className="mt-5 text-center col-md-10">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Create New Project" />
                    <IconButton aria-label="create" size="large" style={{ width: "4%" }}>
                        <AddIcon />
                    </IconButton>
                </form>
            </div>
            <div class="container">
                <div class="row gx-5 p-3">
                    <div class="col gx-5 ml-1">
                        <a style={{ textDecoration: "none" }}>
                            <ProjectCard />
                        </a>
                    </div>
                    <div class="col gx-5 ml-1">
                        <a style={{ textDecoration: "none" }}>
                            <ProjectCard />
                        </a>
                    </div>
                    <div class="col gx-5 ml-1">
                        <a style={{ textDecoration: "none" }}>
                            <ProjectCard />
                        </a>
                    </div>
                </div>
                <div class="row gx-5 p-3">
                    <div class="col gx-5 ml-1">
                        <a style={{ textDecoration: "none" }}>
                            <ProjectCard />
                        </a>
                    </div>
                    <div class="col gx-5 ml-1">
                        <a style={{ textDecoration: "none" }}>
                            <ProjectCard />
                        </a>
                    </div>
                    <div class="col gx-5 ml-1">
                        <a style={{ textDecoration: "none" }}>
                            <ProjectCard />
                        </a>
                    </div>
                </div>
                <div class="row gx-5 p-3">
                    <div class="col gx-5 ml-1">
                        <a style={{ textDecoration: "none" }}>
                            <ProjectCard />
                        </a>
                    </div>
                    <div class="col gx-5 ml-1">
                        <a style={{ textDecoration: "none" }}>
                            <ProjectCard />
                        </a>
                    </div>
                    <div class="col gx-5 ml-1">
                        <a style={{ textDecoration: "none" }}>
                            <ProjectCard />
                        </a>
                    </div>
                </div>
            </div>
        </>)
}

export default Projects;
