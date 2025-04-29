import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormUi from "../_components/FormUi";
import { Provider } from "jotai";
import { currentUser } from "@clerk/nextjs/server";

export default function EditForm() {
  const user = currentUser()

  if (!user) {
    throw new Error("Unauthorized")
  }

  return (
    <div className="px-6 ">
      <h2 className="flex items-center gap-2 my-6 hover:font-bold hover:text-lg transition">
        <Button variant={"outline"} className="rounded-4xl hover:scale-105">
          <ArrowLeft className="text-purple-600" /> Back
        </Button>
      </h2>
      <div className="grid grid-col-1 md:grid-cols-3 gap-5">
        <div className="p-5 border rounded-lg shadow">Controller</div>
        <div className="md:col-span-2 border rounded-lg p-10 min-h-screen flex items-center justify-center">
          <Provider>
            <FormUi />
          </Provider>
        </div>
      </div>
    </div>
  );
}
