import deleteForm from "@/app/actions/deleteForm";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { FormSchemaType } from "@/lib/zod";
import { Edit, Share2, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

type FormListItemType = {
  form: FormSchemaType;
  formId: string;
  onDelete: () => void;
};

export default function FormListItem({
  form,
  formId,
  onDelete,
}: FormListItemType) {
  const onDeleteHandle = async () => {
    try {
      const response = await deleteForm({
        formId,
      });

      if (response) {
        toast("Form deleted !");
        onDelete();
      } else {
        throw new Error("No confirmation from database");
      }

      console.log(response);
    } catch (error) {
      console.log("Error while delete form: " + error);
    }
  };

  return (
    <div className="border shadow-sm rounded-lg p-4">
      <div className="flex justify-end">
        <AlertDialog>
          <AlertDialogTrigger>
            <Trash2 className="h-5 w-5 text-red-500 cursor-pointer hover:scale-105 transition-all duration-200" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are your absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action will delete the Form{" "}
                <span className="font-bold">{form.title}</span> permanently
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-500"
                onClick={onDeleteHandle}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <h2 className="text-lg">{form.title}</h2>
      <h2 className="text-sm text-gray-500">{form.subheading}</h2>
      <hr className="my-4" />
      <div className="flex gap-4">
        <Button
          variant={"outline"}
          size={"sm"}
          className="rounded-4xl hover:scale-105 transition-all duration-200 text-green-500 hover:text-green-600"
        >
          <Share2 className="text-green-500 hover:text-green-600" />
          Share
        </Button>
        <Link href={`/form/edit/${formId}`} target="_blank">
          <Button
            variant={"outline"}
            size={"sm"}
            className="rounded-4xl hover:scale-105 transition-all duration-200 text-gray-600 hover:text-gray-700"
          >
            <Edit className="text-gray-600 hover:text-gray-700" />
            Edit
          </Button>
        </Link>
      </div>
    </div>
  );
}
