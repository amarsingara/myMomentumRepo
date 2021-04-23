import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars["Boolean"]>;
  _gt?: Maybe<Scalars["Boolean"]>;
  _gte?: Maybe<Scalars["Boolean"]>;
  _in?: Maybe<Array<Scalars["Boolean"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Boolean"]>;
  _lte?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Scalars["Boolean"]>;
  _nin?: Maybe<Array<Scalars["Boolean"]>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: "comments";
  comment: Scalars["String"];
  created_at?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  todo?: Maybe<Todo>;
  todo_id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  on_conflict?: Maybe<Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Comments_Bool_Exp>>>;
  _not?: Maybe<Comments_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Comments_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  todo?: Maybe<Todo_Bool_Exp>;
  todo_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint */
  CommentsPkey = "comments_pkey",
}

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  comment?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  todo?: Maybe<Todo_Obj_Rel_Insert_Input>;
  todo_id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: "comments_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Comments>;
};

/** input type for inserting object relation for remote table "comments" */
export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input;
  on_conflict?: Maybe<Comments_On_Conflict>;
};

/** on conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns: Array<Comments_Update_Column>;
  where?: Maybe<Comments_Bool_Exp>;
};

/** ordering options when selecting data from "comments" */
export type Comments_Order_By = {
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  todo?: Maybe<Todo_Order_By>;
  todo_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "comments" */
export type Comments_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  Comment = "comment",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  TodoId = "todo_id",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  comment?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  todo_id?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  Comment = "comment",
  /** column name */
  Id = "id",
  /** column name */
  TodoId = "todo_id",
}

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "todo" */
  delete_todo?: Maybe<Todo_Mutation_Response>;
  /** delete single row from the table: "todo" */
  delete_todo_by_pk?: Maybe<Todo>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "todo" */
  insert_todo?: Maybe<Todo_Mutation_Response>;
  /** insert a single row into the table: "todo" */
  insert_todo_one?: Maybe<Todo>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update data of the table: "todo" */
  update_todo?: Maybe<Todo_Mutation_Response>;
  /** update single row of the table: "todo" */
  update_todo_by_pk?: Maybe<Todo>;
};

/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_TodoArgs = {
  where: Todo_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Todo_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: Maybe<Comments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input;
  on_conflict?: Maybe<Comments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_TodoArgs = {
  objects: Array<Todo_Insert_Input>;
  on_conflict?: Maybe<Todo_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Todo_OneArgs = {
  object: Todo_Insert_Input;
  on_conflict?: Maybe<Todo_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _set?: Maybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _set?: Maybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_TodoArgs = {
  _set?: Maybe<Todo_Set_Input>;
  where: Todo_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Todo_By_PkArgs = {
  _set?: Maybe<Todo_Set_Input>;
  pk_columns: Todo_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** query root */
export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
};

/** query root */
export type Query_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};

/** query root */
export type Query_RootComments_By_PkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};

/** query root */
export type Query_RootTodo_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
};

/** subscription root */
export type Subscription_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootComments_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTodo_By_PkArgs = {
  id: Scalars["uuid"];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "todo" */
export type Todo = {
  __typename?: "todo";
  /** An array relationship */
  comments?: Array<Comments>;
  complete?: Maybe<Scalars["Boolean"]>;
  created_at?: Scalars["timestamptz"];
  description?: Maybe<Scalars["String"]>;
  id?: Scalars["uuid"];
  title?: Scalars["String"];
  updated_at?: Scalars["timestamptz"];
};

/** columns and relationships of "todo" */
export type TodoCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};

/** input type for inserting array relation for remote table "todo" */
export type Todo_Arr_Rel_Insert_Input = {
  data: Array<Todo_Insert_Input>;
  on_conflict?: Maybe<Todo_On_Conflict>;
};

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type Todo_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todo_Bool_Exp>>>;
  _not?: Maybe<Todo_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todo_Bool_Exp>>>;
  comments?: Maybe<Comments_Bool_Exp>;
  complete?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "todo" */
export enum Todo_Constraint {
  /** unique or primary key constraint */
  TodoPkey = "todo_pkey",
}

/** input type for inserting data into table "todo" */
export type Todo_Insert_Input = {
  comments?: Maybe<Comments_Arr_Rel_Insert_Input>;
  complete?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "todo" */
export type Todo_Mutation_Response = {
  __typename?: "todo_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Todo>;
};

/** input type for inserting object relation for remote table "todo" */
export type Todo_Obj_Rel_Insert_Input = {
  data: Todo_Insert_Input;
  on_conflict?: Maybe<Todo_On_Conflict>;
};

/** on conflict condition type for table "todo" */
export type Todo_On_Conflict = {
  constraint: Todo_Constraint;
  update_columns: Array<Todo_Update_Column>;
  where?: Maybe<Todo_Bool_Exp>;
};

/** ordering options when selecting data from "todo" */
export type Todo_Order_By = {
  complete?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "todo" */
export type Todo_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "todo" */
export enum Todo_Select_Column {
  /** column name */
  Complete = "complete",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "todo" */
export type Todo_Set_Input = {
  complete?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
};

/** update columns of table "todo" */
export enum Todo_Update_Column {
  /** column name */
  Complete = "complete",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Title = "title",
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
};

export type CreateCommentMutationVariables = Exact<{
  comment: Comments_Insert_Input;
}>;

export type CreateCommentMutation = { __typename?: "mutation_root" } & {
  insert_comments_one?: Maybe<
    { __typename?: "comments" } & Pick<Comments, "id" | "todo_id" | "comment">
  >;
};

export type CreateToDoMutationVariables = Exact<{
  todo: Todo_Insert_Input;
}>;

export type CreateToDoMutation = { __typename?: "mutation_root" } & {
  insert_todo?: Maybe<
    { __typename?: "todo_mutation_response" } & {
      returning: Array<{ __typename?: "todo" } & Pick<Todo, "id">>;
    }
  >;
};

export type MarkTodoMutationVariables = Exact<{
  id: Scalars["uuid"];
  complete: Scalars["Boolean"];
}>;

export type MarkTodoMutation = { __typename?: "mutation_root" } & {
  update_todo_by_pk?: Maybe<
    { __typename?: "todo" } & Pick<Todo, "id" | "complete">
  >;
};

export type UpdateToDoMutationVariables = Exact<{
  id: Scalars["uuid"];
  todo: Todo_Set_Input;
}>;

export type UpdateToDoMutation = { __typename?: "mutation_root" } & {
  update_todo_by_pk?: Maybe<{ __typename?: "todo" } & Pick<Todo, "id">>;
};

export type SingleToDoQueryVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type SingleToDoQuery = { __typename?: "query_root" } & {
  todo_by_pk?: Maybe<
    { __typename?: "todo" } & Pick<
      Todo,
      "id" | "title" | "description" | "complete" | "created_at" | "updated_at"
    >
  >;
};

export type TodoCommentsSubscriptionVariables = Exact<{
  todoId: Scalars["uuid"];
}>;

export type TodoCommentsSubscription = { __typename?: "subscription_root" } & {
  comments: Array<
    { __typename?: "comments" } & Pick<Comments, "id" | "comment" | "todo_id">
  >;
};

export type ToDoListSubscriptionVariables = Exact<{
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
}>;

export type ToDoListSubscription = { __typename?: "subscription_root" } & {
  todo: Array<
    { __typename?: "todo" } & Pick<Todo, "id" | "title" | "complete">
  >;
};

export const CreateCommentDocument = gql`
  mutation CreateComment($comment: comments_insert_input!) {
    insert_comments_one(object: $comment) {
      id
      todo_id
      comment
    }
  }
`;
export type CreateCommentMutationFn = ApolloReactCommon.MutationFunction<
  CreateCommentMutation,
  CreateCommentMutationVariables
>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useCreateCommentMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(CreateCommentDocument, baseOptions);
}
export type CreateCommentMutationHookResult = ReturnType<
  typeof useCreateCommentMutation
>;
export type CreateCommentMutationResult = ApolloReactCommon.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateCommentMutation,
  CreateCommentMutationVariables
>;
export const CreateToDoDocument = gql`
  mutation CreateToDo($todo: todo_insert_input!) {
    insert_todo(objects: [$todo]) {
      returning {
        id
      }
    }
  }
`;
export type CreateToDoMutationFn = ApolloReactCommon.MutationFunction<
  CreateToDoMutation,
  CreateToDoMutationVariables
>;

/**
 * __useCreateToDoMutation__
 *
 * To run a mutation, you first call `useCreateToDoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateToDoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createToDoMutation, { data, loading, error }] = useCreateToDoMutation({
 *   variables: {
 *      todo: // value for 'todo'
 *   },
 * });
 */
export function useCreateToDoMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateToDoMutation,
    CreateToDoMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateToDoMutation,
    CreateToDoMutationVariables
  >(CreateToDoDocument, baseOptions);
}
export type CreateToDoMutationHookResult = ReturnType<
  typeof useCreateToDoMutation
>;
export type CreateToDoMutationResult = ApolloReactCommon.MutationResult<CreateToDoMutation>;
export type CreateToDoMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateToDoMutation,
  CreateToDoMutationVariables
>;
export const MarkTodoDocument = gql`
  mutation MarkTodo($id: uuid!, $complete: Boolean!) {
    update_todo_by_pk(pk_columns: { id: $id }, _set: { complete: $complete }) {
      id
      complete
      description
    }
  }
`;
export type MarkTodoMutationFn = ApolloReactCommon.MutationFunction<
  MarkTodoMutation,
  MarkTodoMutationVariables
>;

/**
 * __useMarkTodoMutation__
 *
 * To run a mutation, you first call `useMarkTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markTodoMutation, { data, loading, error }] = useMarkTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      complete: // value for 'complete'
 *   },
 * });
 */
export function useMarkTodoMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    MarkTodoMutation,
    MarkTodoMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    MarkTodoMutation,
    MarkTodoMutationVariables
  >(MarkTodoDocument, baseOptions);
}
export type MarkTodoMutationHookResult = ReturnType<typeof useMarkTodoMutation>;
export type MarkTodoMutationResult = ApolloReactCommon.MutationResult<MarkTodoMutation>;
export type MarkTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<
  MarkTodoMutation,
  MarkTodoMutationVariables
>;
export const UpdateToDoDocument = gql`
  mutation UpdateToDo($id: uuid!, $todo: todo_set_input!) {
    update_todo_by_pk(pk_columns: { id: $id }, _set: $todo) {
      id
    }
  }
`;
export type UpdateToDoMutationFn = ApolloReactCommon.MutationFunction<
  UpdateToDoMutation,
  UpdateToDoMutationVariables
>;

/**
 * __useUpdateToDoMutation__
 *
 * To run a mutation, you first call `useUpdateToDoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateToDoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateToDoMutation, { data, loading, error }] = useUpdateToDoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      todo: // value for 'todo'
 *   },
 * });
 */
export function useUpdateToDoMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateToDoMutation,
    UpdateToDoMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateToDoMutation,
    UpdateToDoMutationVariables
  >(UpdateToDoDocument, baseOptions);
}
export type UpdateToDoMutationHookResult = ReturnType<
  typeof useUpdateToDoMutation
>;
export type UpdateToDoMutationResult = ApolloReactCommon.MutationResult<UpdateToDoMutation>;
export type UpdateToDoMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateToDoMutation,
  UpdateToDoMutationVariables
>;
export const SingleToDoDocument = gql`
  query SingleToDo($id: uuid!) {
    todo_by_pk(id: $id) {
      id
      title
      description
      complete
      created_at
      updated_at
    }
  }
`;

/**
 * __useSingleToDoQuery__
 *
 * To run a query within a React component, call `useSingleToDoQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleToDoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleToDoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleToDoQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    SingleToDoQuery,
    SingleToDoQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<SingleToDoQuery, SingleToDoQueryVariables>(
    SingleToDoDocument,
    baseOptions
  );
}
export function useSingleToDoLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    SingleToDoQuery,
    SingleToDoQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    SingleToDoQuery,
    SingleToDoQueryVariables
  >(SingleToDoDocument, baseOptions);
}
export type SingleToDoQueryHookResult = ReturnType<typeof useSingleToDoQuery>;
export type SingleToDoLazyQueryHookResult = ReturnType<
  typeof useSingleToDoLazyQuery
>;
export type SingleToDoQueryResult = ApolloReactCommon.QueryResult<
  SingleToDoQuery,
  SingleToDoQueryVariables
>;
export const TodoCommentsDocument = gql`
  subscription TodoComments($todoId: uuid!) {
    comments(where: { todo_id: { _eq: $todoId } }) {
      id
      comment
      todo_id
    }
  }
`;

/**
 * __useTodoCommentsSubscription__
 *
 * To run a query within a React component, call `useTodoCommentsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTodoCommentsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoCommentsSubscription({
 *   variables: {
 *      todoId: // value for 'todoId'
 *   },
 * });
 */
export function useTodoCommentsSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    TodoCommentsSubscription,
    TodoCommentsSubscriptionVariables
  >
) {
  return ApolloReactHooks.useSubscription<
    TodoCommentsSubscription,
    TodoCommentsSubscriptionVariables
  >(TodoCommentsDocument, baseOptions);
}
export type TodoCommentsSubscriptionHookResult = ReturnType<
  typeof useTodoCommentsSubscription
>;
export type TodoCommentsSubscriptionResult = ApolloReactCommon.SubscriptionResult<TodoCommentsSubscription>;
export const ToDoListDocument = gql`
  subscription ToDoList($limit: Int, $offset: Int) {
    todo(order_by: { created_at: desc }, limit: $limit, offset: $offset) {
      id
      title
      complete
      description
    }
  }
`;

/**
 * __useToDoListSubscription__
 *
 * To run a query within a React component, call `useToDoListSubscription` and pass it any options that fit your needs.
 * When your component renders, `useToDoListSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToDoListSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useToDoListSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    ToDoListSubscription,
    ToDoListSubscriptionVariables
  >
) {
  return ApolloReactHooks.useSubscription<
    ToDoListSubscription,
    ToDoListSubscriptionVariables
  >(ToDoListDocument, baseOptions);
}
export type ToDoListSubscriptionHookResult = ReturnType<
  typeof useToDoListSubscription
>;
export type ToDoListSubscriptionResult = ApolloReactCommon.SubscriptionResult<ToDoListSubscription>;
