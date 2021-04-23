import { memo, useCallback, useState } from "react";
import { CircularProgress, TextField } from "@material-ui/core";
import { useCreateToDoMutation } from "../../../generated/graphql";
import { Box, Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

/**
 * A form which allows the user to submit a new todo.
 */
export const TodoForm = memo(() => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [create, { loading }] = useCreateToDoMutation({
    variables: {
      todo: {
        title,
        complete: false,
        description,
      },
    },
  });

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await create();
        setTitle("");
        setDescription("");
      } catch (e) {
        console.log(e);
      }
    },
    [create]
  );

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <form onSubmit={onSubmit}>
      <Box p={1}>
        <TextField
          required
          label="What do you need to do?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box p={1}>
        <TextField
          required
          label="Enter Description"
          value={description}
          multiline
          rows={4}
          onChange={(e) => setDescription(e.target.value)}
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          style={{ fontWeight: "bold", width: "70%" }}
          type="submit"
          variant="outlined"
          startIcon={<CloudUploadIcon />}
        >
          Add
        </Button>
      </Box>
    </form>
  );
  5;
});
