import { useQuery, gql } from "@apollo/client";

const GET_PROGRAMME = gql`
  query GetPrograms {
    programs {
      id
      name
      duration
      workoutsWithDay {
        day
        workout {
          name
        }
      }
    }
  }
`;
function Programme() {
  const { loading, error, data } = useQuery(GET_PROGRAMME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  return (
    <>
      <div>Test</div>
    </>
  );
}
export default Programme;
