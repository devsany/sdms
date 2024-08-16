import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
      <Link href="/">
        <button className="btn_submit">Back to Student Module</button>
      </Link>
      Teacher Modules
    </div>
  );
};

export default index;
