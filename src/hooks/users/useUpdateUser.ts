import { gql, useMutation } from "@apollo/client";

const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUsersInput!) {
    updateUsers(input: $input) {
      id,
      address,
      name,
      description,
    }
  }
`

interface UpdateUserInput {
  variables: {
    input: {
      id: string,
      name?: string,
      dob?: string,
      address?: string,
      description?: string,
    }
  }
}

export const useUpdateUser = (): ((input: UpdateUserInput) => any) => {
  const [updatePost] = useMutation(UPDATE_USER)
  return updatePost;
}
