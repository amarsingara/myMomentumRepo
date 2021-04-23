import Head from "next/head";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { Title } from "../../common/components/Title";
import { useToDoListSubscription } from "../../generated/graphql";
import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TableContent } from "./components/TableContent";

/**
 * List the todos.
 * @constructor
 */
const ToDos = () => {
  const limit = 10;
  const [offset, setOffset] = useState(0);

  const { data } = useToDoListSubscription({
    variables: {
      limit,
      offset,
    },
  });

  return (
    <>
      <Head>
        <title>ToDos</title>
      </Head>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Title>ToDo</Title>
        </Grid>
        <Grid item>
          <TodoForm />
        </Grid>
        <TableContent todo={data?.todo} />
      </Grid>
    </>
  );
};

export default ToDos;
