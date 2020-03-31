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

export default function IndexPage(){
  const classes = useStyles();
  return(
    <Container maxWidth="sm">
    <div className={classes.title} >
      <Typography component="span" align="center">Hello Gatsby!</Typography>
    </div>
    <Button component={Link} to="page-2" color="primary" variant="contained">Go to Another Page</Button>
    </Container>
  )
}