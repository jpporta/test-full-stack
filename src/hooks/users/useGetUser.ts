import { gql, useQuery } from "@apollo/client";
import { User } from "../../common/interfaces/user.interface";

const GET_USER = gql`
  query GetUser($id: String!) {
    getUsers(id: $id) {
        id,
        name,
        address,
        description,
    }
  }
`

export const useGetUser = (id: String): User | undefined => {
  const { data } = useQuery(GET_USER, {
    variables: { id }
  })
  return data?.getUsers;
}
