import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import { TableContainer, TableHead } from "@material-ui/core";
import { Todo as TodoType } from "../../../generated/graphql";
import { Todo } from "./Todo";

interface TodoProps {
  todo: Pick<TodoType, "title" | "id" | "complete" | "description">[];
}

export const TableContent = (props: TodoProps) => {
  const { todo } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setPage(0);
  };

  return (
    <>
      <TableContainer>
        <Table>
          {todo
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((t) => {
              return (
                <TableRow key={t.id}>
                  <TableCell>
                    <Todo todo={t} />
                  </TableCell>
                </TableRow>
              );
            })}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3, 5]}
        component="div"
        count={todo?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};
