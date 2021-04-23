import {memo} from "react";
import {makeStyles} from "@material-ui/styles";
import {AppTheme} from "../../theme";
import {Box, BoxProps, Grid, GridProps} from "@material-ui/core";

const useStyles = makeStyles((theme: AppTheme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.default
  },
  content: {
    width: '100%',
    maxWidth: 600,
  }
}))

export const Layout = memo((props: GridProps) => {
  const classes = useStyles();

  return (
    <Grid className={classes.wrapper} {...props} container justify="center">
      <Grid item className={classes.content}>
        {props.children}
      </Grid>
    </Grid>
  )
});