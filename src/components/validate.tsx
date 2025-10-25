'use server'
import { StudentData } from "@/data/branches";
import { createStudentData, isAlreadyUsed } from "./db_functions";

export async function val(data: StudentData) {
  const bitMail = /^1bi\d{2}[a-zA-Z]{2}\d{3}@bit-bangalore\.edu\.in$/
  if (data.collegeEmail && bitMail.test(data.collegeEmail)) {
    const isUsed = await isAlreadyUsed(data);

    if (isUsed) {

      return {
        result: false,
        message: "College Email Already Used."
      };
    }
    else {
      return await createStudentData(data, "https://u.payu.in/PAYUMN/RJG7WHQDe7UP");
    }
  } else {
    return await createStudentData(data, "https://u.payu.in/PAYUMN/iri6CRZ5sokw");
  }


};
