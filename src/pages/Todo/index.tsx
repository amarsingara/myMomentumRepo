import { memo } from "react";
import { Title } from "../../common/components/Title";
import {
  useCreateCommentMutation,
  useMarkTodoMutation,
  useSingleToDoQuery,
  useTodoCommentsSubscription,
} from "../../generated/graphql";
import { useRouter } from "next/router";
import Head from "next/head";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, Paper, Box, Switch } from "@material-ui/core";
import { useState } from "react";

/**
 * Display and interact with a single Todo.
 */

const useStyles = makeStyles({
  desc: {
    marginTop: "0.8em",
  },
});

const Todo = memo(() => {
  const classes = useStyles();
  const {
    query: { id },
  } = useRouter();

  const { data: todoResponse, refetch } = useSingleToDoQuery({
    variables: { id },
  });
  const todo = todoResponse?.todo_by_pk;

  const { data: commentsResponse } = useTodoCommentsSubscription({
    variables: { todoId: id },
  });
  const comments = commentsResponse?.comments;

  const [createComment] = useCreateCommentMutation();
  const [markTodo] = useMarkTodoMutation();

  return (
    <>
      <Head>
        <title>A ToDo</title>
      </Head>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Title>{todo?.title}</Title>
        </Grid>
        <Grid>
          <Paper elevation={5}>
            <Box
              p={2}
              display="flex"
              flexDirection="row"
              width="100%"
              m={1}
              justifyContent="space-around"
            >
              <Box p={1}>
                <Typography variant="h6">Description</Typography>
              </Box>
              <Box p={1}>
                <Typography className={classes.desc} variant="body1">
                  {todo?.description}
                </Typography>
              </Box>
            </Box>
            <hr />
            <Box
              p={2}
              display="flex"
              flexDirection="row"
              width="100%"
              m={1}
              justifyContent="space-around"
            >
              <Box p={1}>
                <Typography variant="h6">Status</Typography>
              </Box>
              <Box p={1}>
                <Typography variant="body1">
                  {todo?.complete ? "Completed" : "In Progress"}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
});

export default Todo;
