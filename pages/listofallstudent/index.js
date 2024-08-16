import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ListOfStudent = () => {
  const [allStudentData, setAllStudentData] = useState([]);
  const { loading, error, allStudentDatas } = useSelector(
    (state) => state.reducer.initialValue
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudentData());
  }, []);
  if (loading) {
    return <>...loading</>;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ADM No.</th>
            <th>NAME OF STUDENT</th>
            <th>ROLL</th>
            <th>SECTION</th>
            <th>CLASS</th>
            <th>FATHER'S NAME</th>
            <th>MOTHER'S NAME</th>
            <th>ADDRESS</th>
            <th>MOBILE</th>
          </tr>
        </thead>
        {allStudentDatas &&
          allStudentDatas.map((item, i) => {
            return (
              <>
                <tr key={i}>
                  <td>{item.ADMISSION}</td>
                  <td>{item.NAME_OF_STUDENT}</td>
                  <td>{item.ROLL}</td>
                  <td>{item.SECTION}</td>
                  <td>{item.CLASS}</td>
                  <td>{item.FATHER_NAME}</td>
                  <td>{item.MOTHER_NAME}</td>
                  <td>{item.ADDRESS}</td>
                  <td>{item.MOBILE}</td>
                </tr>
              </>
            );
          })}
      </table>
    </div>
  );
};

export default ListOfStudent;
