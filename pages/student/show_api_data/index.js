import Link from "next/link";
import React, { useEffect, useState } from "react";

const API_DATA_STUDENT = () => {
  const [data, setData] = useState([]);
  const [allStudentData, setAllStudentData] = useState([]);
  const [numberOfStudnet, setNumberOfStudnet] = useState("");
  const [class1, setClass1] = useState([]);
  const apiCall = async () => {
    const response = await fetch("api/allschoolstudentdata");
    const apiData = await response.json();
    console.log(apiData);
    setData(apiData);
    // setNumberOfStudnet(apiData.length);
  };
  const handleAllStudentData = () => {
    setAllStudentData(data);
    setNumberOfStudnet(data.length);
  };

  const handleClass1 = () => {
    const data1 = data.filter((i) => i.CLASS === 1);
    setAllStudentData(data1);
    setNumberOfStudnet(data1.length);
  };
  const handleClass2 = () => {
    const data2 = data.filter((i) => i.CLASS === 2);
    setAllStudentData(data2);
  };
  const handleClass3 = () => {
    const data3 = data.filter((i) => i.CLASS === 3);
    setAllStudentData(data3);
  };
  const handleClass4 = () => {
    const data4 = data.filter((i) => i.CLASS === 4);
    setAllStudentData(data4);
  };
  const handleClass5A = () => {
    const data5A = data.filter((i) => i.CLASS === 5 && i.SECTION === "A");
    setAllStudentData(data5A);
  };
  const handleClass5B = () => {
    const data5B = data.filter((i) => i.CLASS === 5 && i.SECTION === "B");
    setAllStudentData(data5B);
  };
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <div>
      <Link href="/">
        <button className="btn_submit">Back to Student Module</button>
      </Link>
      <Link href="addNewStudent">
        <button className="btn_submit">Add new student</button>
      </Link>
      <button className="bg-slate-500 p-3 m-4" onClick={handleAllStudentData}>
        Show All student data
      </button>
      <button className="bg-slate-500 p-3 m-4" onClick={handleClass1}>
        Show student data class 1
      </button>
      <button className="bg-slate-500 p-3 m-4" onClick={handleClass2}>
        Show student data class 2
      </button>
      <button className="bg-slate-500 p-3 m-4" onClick={handleClass3}>
        Show student data class 3
      </button>
      <button className="bg-slate-500 p-3 m-4" onClick={handleClass4}>
        Show student data class 4
      </button>
      <button className="bg-slate-500 p-3 m-4" onClick={handleClass5A}>
        Show student data class 5A
      </button>
      <button className="bg-slate-500 p-3 m-4" onClick={handleClass5B}>
        Show student data class 5B
      </button>
      <button className="bg-slate-500 p-3 m-4" onClick={handleClass4}>
        Show student data class 4
      </button>
      <button className="bg-slate-500 p-3 m-4" onClick={handleClass4}>
        Show student data class 4
      </button>
      <div>
        Number of student-{numberOfStudnet}
        <table style={{ textAlign: "center", border: "1px solid black" }}>
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
            <th>CASTE</th>
            <th>ADDRESS</th>
          </tr>
          {allStudentData &&
            allStudentData.map((item, i) => {
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
                    <td>{item.CASTE}</td>
                    <td>{item.ADDRESS}</td>
                  </tr>
                </>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default API_DATA_STUDENT;
