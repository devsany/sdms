import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import API_DATA_STUDENT from "./student/show_api_data";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h2>School Database Management System</h2>
      <div className="main_home_link">
        <Link className="man_home_link_path" href="profile&facility">
          <div>
            {" "}
            <div>Profile and Facility modules</div>
          </div>
        </Link>{" "}
        <Link className="man_home_link_path" href="teacher&modules">
          <div>
            {" "}
            <div>Teacher modules</div>
          </div>
        </Link>{" "}
        <Link className="man_home_link_path" href="student">
          <div>
            {" "}
            <div>Student modules</div>
          </div>
        </Link>{" "}
      </div>
    </>
  );
}
