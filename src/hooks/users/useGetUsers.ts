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

interface GetUsersParameters {
  limit?: number,
  filter?: any,
}



export const useGetUsers = ({ limit = 10, filter = null }: GetUsersParameters): User[] | undefined => {
  const { data } = useQuery(GET_USERS, {
    variables: { limit, filter }
  })
  return data?.listUsers?.items;
}
