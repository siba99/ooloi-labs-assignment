import { useGlobalContext } from "./context";
import image from "../components/data/profile.png";
const Table = () => {
  const { data, sortTable } = useGlobalContext();

  return (
    <>
      <table className="table table table-hover" id="dataTabla" >
        <thead>
          <tr>
            {/* <th scope="col" onClick={sortTable}>
              Avater
            </th> */}
            <th scope="col" onClick={sortTable}>
              Name
              <i className="fa-solid fa-sort"></i>
            </th>
            <th scope="col" onClick={sortTable}>
              City
              <i className="fa-solid fa-sort"></i>
            </th>
            <th scope="col" onClick={sortTable}>
              Email Address
              <i className="fa-solid fa-sort"></i>
            </th>
            <th scope="col" onClick={sortTable}>
              joining Date
              <i className="fa-solid fa-sort"></i>
            </th>
            <th scope="col" onClick={sortTable}>
              Role
              <i className="fa-solid fa-sort"></i>
            </th>
          </tr>
        </thead>
        {data.map((curElem) => {
          const { person, city, email, joiningDate, role } = curElem;
          const { name, avatar } = person;
          return (
            <tbody key={email} >
              <tr>
                <td>
                  <span>
                    <img
                      className="rounded-circle p-2"
                      src={image}
                      alt="name"
                    />
                    {name}
                  </span>
                </td>
                <td>{city}</td>
                <td><a href={`mailto:${email}`} >{email}</a></td>
                <td>{joiningDate}</td>
                <td>{role}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Table;
