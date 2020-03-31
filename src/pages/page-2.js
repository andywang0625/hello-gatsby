import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core"

const useStyles = makeStyles((theme) =>
  createStyles({
      title:{
        width:"100%",
      }
  }),
);

export default function SecondPage(){
  const classes = useStyles();
  return(
    <Container maxWidth="sm">
    <div className={classes.title} >
      <Typography component="span" align="center">This is Page Two</Typography>
    </div>
    <Button component={Link} to="/" color="primary" variant="contained">Back to Home Page</Button>
    </Container>
  )
}