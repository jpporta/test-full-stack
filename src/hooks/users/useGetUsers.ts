import { gql, useQuery } from "@apollo/client";
import { User } from "../../common/interfaces/user.interface";

const GET_USERS = gql`
  query GetUsers($limit: Int, $filter: TableUsersFilterInput) {
    listUsers(limit: $limit, filter: $filter) {
      items {
        id,
        name, 
        description,
        createdAt
      }
    }
  }
`

export const useGetUsers = (limit = 10, filter = null): User[] | undefined => {
  const { data } = useQuery(GET_USERS, {
    variables: { limit, filter: null }
  })
  return data?.listUsers?.items;
}
