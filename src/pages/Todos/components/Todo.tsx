import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { Todo as TodoType } from "../../../generated/graphql";
import { memo } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import { useState } from "react";
import { useUpdateToDoMutation } from "../../../generated/graphql";

interface TodoProps {
  todo: Pick<TodoType, "title" | "id" | "complete" | "description">;
}

const useStyles = makeStyles({
  link: {
    cursor: "pointer",
  },
  check: {
    float: "right",
    marginTop: "-2.2em",
    width: "10%",
  },
});

/**
 * Display an individual todo in the list.
 */
export const Todo = memo(({ todo }: TodoProps) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(todo.complete);

  const [update, { loading }] = useUpdateToDoMutation({
    variables: {
      id: todo.id,
      todo: {
        complete: checked,
        description: todo.description,
        id: todo.id,
        title: todo.title,
      },
    },
  });

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    await setChecked(!checked);
    try {
      await update();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Grid direction="row" key={todo.id}>
      <Paper elevation={5} className={classes.link}>
        <Box p={2}>
          <Link href={`/todo/${todo.id}`}>
            <Typography
              style={{
                textDecoration: todo.complete ? "line-through" : "none",
                color: todo.complete ? "grey" : "black",
              }}
              variant="h5"
            >
              {todo.title}
            </Typography>
          </Link>
        </Box>
      </Paper>
      <Checkbox
        className={classes.check}
        checked={checked}
        onChange={handleChange}
      />
    </Grid>
  );
});
