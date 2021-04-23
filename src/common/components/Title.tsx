import { memo } from "react";
import { Typography, TypographyProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../theme";

const useStyles = makeStyles((theme: AppTheme) => ({
  title: {
    borderBottom: `5px solid ${theme.palette.primary.main}`,
    paddingBottom: theme.spacing(1),
    textAlign: "center",
  },
}));

export const Title = memo((props: TypographyProps) => {
  const classes = useStyles();
  return (
    <Typography
      variant="h1"
      color="primary"
      className={classes.title}
      {...props}
    >
      {props.children}
    </Typography>
  );
});
