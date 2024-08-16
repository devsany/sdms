import { ALL_STUDENT_DATA_MAIN } from "../../ALL_STUDENT_DATA/AllApi";
export default function handler(req, res) {
  res.status(200).json(ALL_STUDENT_DATA_MAIN);
}
