import { isPaymentDone } from "@/components/db_functions";
import { redirect, RedirectType } from "next/navigation";
import TeamPage from "./team";


export default async function Page() {
  const _isPaymentDone = await isPaymentDone();
  if (!_isPaymentDone) redirect("/profile", RedirectType.replace);

  return <TeamPage />

}
