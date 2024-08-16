import Link from "next/link";
import React, { useEffect, useState } from "react";
import ViewStudent from "../component/Viewstudent";

const index = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [data, setData] = useState([]);
  const [class1s, setClass1s] = useState("");
  const [classNUR, setClassNUR] = useState("");
  const [classKG, setClassKG] = useState("");
  const [classPREP, setClassPREP] = useState("");
  const [class5B, setClass5B] = useState("");
  const [class2, setClass2] = useState("");
  const [class3, setClass3] = useState("");
  const [class4, setClass4] = useState("");
  const [class5A, setClass5A] = useState("");
  const [class6A, setClass6A] = useState("");
  const [class7A, setClass7A] = useState("");
  const [class8A, setClass8A] = useState("");
  const [class9A, setClass9A] = useState("");
  const [class10A, setClass10A] = useState("");

  const apiCall = async () => {
    const response = await fetch("api/allschoolstudentdata");
    const apiData = await response.json();
    setData(apiData);
  };

  const class1_student = () => {
    const classNUR = data.filter((i) => i.CLASS === "NURSERY");
    const classKG = data.filter((i) => i.CLASS === "KG");
    const classPREP = data.filter((i) => i.CLASS === "PREP");
    const class1 = data.filter((i) => i.CLASS === 1);
    const class2 = data.filter((i) => i.CLASS === 2);
    const class3 = data.filter((i) => i.CLASS === 3);
    const class4 = data.filter((i) => i.CLASS === 4);
    const class5A = data.filter((i) => i.CLASS === 5);
    const class6A = data.filter((i) => i.CLASS === 6);
    const class7A = data.filter((i) => i.CLASS === 7);
    const class8A = data.filter((i) => i.CLASS === 8);
    const class9A = data.filter((i) => i.CLASS === 9);
    const class10A = data.filter((i) => i.CLASS === 10);

    setClassNUR(classNUR.length);
    setClassPREP(classPREP.length);
    setClassKG(classKG.length);
    setClass1s(class1.length);
    setClass2(class2.length);
    setClass3(class3.length);
    setClass4(class4.length);
    setClass5A(class5A.length);
    setClass6A(class6A.length);
    setClass7A(class7A.length);
    setClass8A(class8A.length);
    setClass9A(class9A.length);
    setClass10A(class10A.length);
  };
  console.log(class1s);
  //   class1_student();
  useEffect(() => {
    class1_student();
    apiCall();
  }, []);
  return (
    <div>
      <div>
        <h2>Student Modules</h2>
        <Link className="btn_submit" href="/">
          {" "}
          Back to SDMS Home Page
        </Link>{" "}
        <Link className="btn_submit" href="student/show_api_data">
          {" "}
          Student data
        </Link>{" "}
      </div>
      <hr />
      <button className="btn_submit" onClick={class1_student}>
        Show Number of Student
      </button>{" "}
      Total:-{data.length}
      <hr />
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Number of Student</th>
            <th>Manual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NUR</td>
            <td>{classNUR}</td>
            <td>
              <Link className="btn_submit" href="/student/addNewStudent">
                Add Student
              </Link>
              <br />
              <br />
              <div className="btn_submit1">
                <button onClick={() => setShowComponent(true)}>view</button>
                {showComponent && <ViewStudent />}
              </div>
            </td>
          </tr>
          <tr>
            <td>KG</td>
            <td>{classKG}</td>
            <td>
              <Link className="btn_submit" href="/student/addNewStudent">
                Add Student
              </Link>
              <br />
              <br />
              <Link className="btn_submit1" href="/student/addNewStudent">
                View Students
              </Link>
            </td>
          </tr>
          <tr>
            <td>PREP</td>
            <td>{classPREP}</td>
            <td>
              <Link className="btn_submit" href="/student/addNewStudent">
                Add Student
              </Link>
              <br />
              <br />
              <Link className="btn_submit1" href="/student/addNewStudent">
                View Students
              </Link>
            </td>
          </tr>
          <tr>
            <td>CLASS 1</td>
            <td>{class1s}</td>
            <td>
              <Link className="btn_submit" href="/student/addNewStudent">
                Add Student
              </Link>
              <br />
              <br />
              <Link className="btn_submit1" href="/student/addNewStudent">
                View Students
              </Link>
            </td>
          </tr>
          <tr>
            <td>CLASS 2</td>
            <td>{class2}</td>
            <td>
              <Link className="btn_submit" href="/student/addNewStudent">
                Add Student
              </Link>
              <br />
              <br />
              <Link className="btn_submit1" href="/student/addNewStudent">
                View Students
              </Link>
            </td>
          </tr>
          <tr>
            <td>CLASS 3</td>
            <td>{class3}</td>
            <td>
              <Link className="btn_submit" href="/student/addNewStudent">
                Add Student
              </Link>
              <br />
              <br />
              <Link className="btn_submit1" href="/student/addNewStudent">
                View Students
              </Link>
            </td>
          </tr>
          <tr>
            <td>CLASS 4</td>
            <td>{class4}</td>
            <td>
              <Link className="btn_submit" href="/student/addNewStudent">
                Add Student
              </Link>
              <br />
              <br />
              <Link className="btn_submit1" href="/student/addNewStudent">
                View Students
              </Link>
            </td>
          </tr>
          <tr>
            <td>CLASS 5</td>
            <td>{class5A}</td>
            <td>
              <Link className="btn_submit" href="/student/addNewStudent">
                Add Student
              </Link>
              <br />
              <br />
              <Link className="btn_submit1" href="/student/addNewStudent">
                View Students
              </Link>
            </td>
          </tr>{" "}
          <tr>
            <td>CLASS 6</td>
            <td>{class6A}</td>
            <td>
              <Link className="btn_submit" href="/student/addNewStudent">
                Add Student
              </Link>
              <br />
              <br />
              <Link className="btn_submit1" href="/student/addNewStudent">
                View Students
              </Link>
            </td>
          </tr>
          <tr>
            <td>CLASS 7</td>
            <td>{class7A}</td>
            <td>
              <Link className="btn_submit" href="/student/addNewStudent">
                Add Student
              </Link>
              <br />
              <br />
              <Link className="btn_submit1" href="/student/addNewStudent">
                View Students
              </Link>
            </td>
          </tr>
          <tr>
            <td>CLASS 8</td>
            <td>{class8A}</td>
            <td>
              <Link className="btn_submit" href="/student/addNewStudent">
                Add Student
              </Link>
              <br />
              <br />
              <Link className="btn_submit1" href="/student/addNewStudent">
                View Students
              </Link>
            </td>
          </tr>
          <tr>
            <td>CLASS 9</td>
            <td>{class9A}</td>
            <td>
              <Link className="btn_submit" href="/student/addNewStudent">
                Add Student
              </Link>
              <br />
              <br />
              <Link className="btn_submit1" href="/student/addNewStudent">
                View Students
              </Link>
            </td>
          </tr>
          <tr>
            <td>CLASS 10</td>
            <td>{class10A}</td>
            <td>
              <Link className="btn_submit" href="/student/addNewStudent">
                Add Student
              </Link>
              <br />
              <br />
              <Link className="btn_submit1" href="/student/addNewStudent">
                View Students
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default index;
