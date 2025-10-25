
import { auth } from "@/auth";
import { FormProvider } from "@/components/StudentForm/FormContext";
import { FormSteps } from "@/components/StudentForm/FormSteps";
import { FormLayout } from "@/components/ui/FormLayout";
import db from "@/lib/db";
import { redirect, RedirectType } from "next/navigation";


const Test = async () => {
  const session = await auth();
  if (!session) redirect("/login", RedirectType.push);

  const existingUser = await db.profile.findUnique({
    where: { email: session.user?.email || undefined },
  });

  if (existingUser) {

    if (existingUser.paymentDone) {
      redirect("/team", RedirectType.replace);
    }
    return (
      <FormProvider email={session.user?.email ?? ""} studentData={existingUser} photo={session.user?.image || null}>
        <FormLayout>
          <FormSteps />
        </FormLayout>
      </FormProvider>
    )

  }
  return (
    <FormProvider email={session.user?.email ?? ""} photo={session.user?.image || null} studentData={null}>
      <FormLayout>
        <FormSteps />
      </FormLayout>
    </FormProvider>
  )
};

export default Test;
