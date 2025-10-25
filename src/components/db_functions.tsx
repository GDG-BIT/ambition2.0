"use server";
import { auth } from "@/auth";
import { StudentData } from "@/data/branches";
import db from "@/lib/db";
export async function isAlreadyUsed(data: StudentData) {
  if (!data.collegeEmail) return false;
  const existingUser = await db.profile.findFirst({
    where: {
      collegeEmail: {
        equals: data.collegeEmail,
        mode: 'insensitive',
      }
    }
  });
  if (existingUser && existingUser.email !== data.email) {
    return true;
  }
  return false;


}
export async function updateStudentData(data: StudentData, paymentURL: string) {
  const session = await auth();
  if (!session) return { result: false, message: "Not Authenticated" };
  const existingUser = await db.profile.findUnique({
    where: { email: session?.user?.email || undefined },
  });
  if (await isAlreadyUsed(data)) {

    return {
      result: false,
      message: "College Email Already Used."
    };
  }
  if (existingUser) {
    await db.profile.update({
      where: { email: data.email },
      data: {
        email: data.email,
        college: data.college,
        collegeEmail: data.collegeEmail,
        name: data.name,
        paymentURL: paymentURL
      },
    });
    return { result: true, message: 'Profile updated successfully' };
  } else {


    return { result: false, message: 'No user found!' };
  }
}
export async function getPaymentURL(data: StudentData) {
  const existingUser = await db.profile.findUnique({
    where: { email: data.email || undefined },
  });
  if (existingUser) {
    return existingUser.paymentURL;
  }

  return null;
}
export async function createStudentData(data: StudentData, paymentURL: string) {
  const existingUser = await db.profile.findUnique({
    where: { email: data.email || undefined },
  });
  if (existingUser) {
    return await updateStudentData(data, paymentURL);
  }
  await db.profile.create({
    data: {
      email: data.email,
      college: data.college,
      photoURL: data.photoURL,
      collegeEmail: data.collegeEmail,
      name: data.name,
      paymentURL: paymentURL
    },
  });
  return { result: true, message: "Profile Created!" }
};
export async function isPaymentDone() {
  const session = await auth();
  if (!session || !session.user) return false;

  const existingUser = await db.profile.findUnique({
    where: { email: session.user?.email || undefined },
  });
  if (existingUser) {
    return existingUser.paymentDone;
  }
  return false;


}
