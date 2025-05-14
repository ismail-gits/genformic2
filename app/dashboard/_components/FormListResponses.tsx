import exportResponses from "@/app/actions/exportRespones";
import { Button } from "@/components/ui/button";
import { FormSchemaType } from "@/lib/zod";
import { ArrowBigDownDash, Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

type FormListItemType = {
  form: FormSchemaType;
  formId: string;
};

export default function FormListResponses({ form, formId }: FormListItemType) {
  const [responses, setResponses] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        setIsLoading(true);

        const result = await exportResponses({
          formId,
        });

        if (!result) {
          throw new Error("No responses fetched from database");
        }

        let jsonResponses: any[] = [];

        result.forEach((response) => {
          const json = JSON.parse(response.jsonResponse);
          console.log(json);
          jsonResponses.push(json);
        });

        console.log("Json responses: " + jsonResponses);
        setResponses(jsonResponses)
      } catch (error) {
        console.log("Error while exporting responses: " + error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResponses()
  }, [formId]);

  // Convert JSON to excel and download it
  const exportToExcel = (responses: any[]) => {
    try {
      // Create a new workbook
      const wb = XLSX.utils.book_new();

      // Convert JSON to worksheet
      const ws = XLSX.utils.json_to_sheet(responses);

      // Append worksheet to workbook
      XLSX.utils.book_append_sheet(wb, ws, "Responses");

      // Generate excel file and trigger download
      XLSX.writeFile(wb, `${form.title} Responses.xlsx`);
    } catch (error) {
      console.log("Error exporting to excel: " + error);
    }
  };

  return (
    <div className="border shadow-sm rounded-lg p-4">
      <h2 className="text-xl">{form.title}</h2>
      <h2 className="text-sm text-gray-500 mt-2">{form.subheading}</h2>
      <hr className="my-4" />
      <div className="flex justify-between">
        <h2>{responses.length} Responses</h2>
        <Button
          variant={"outline"}
          size={"sm"}
          className="rounded-4xl hover:scale-105 transition-all duration-200 text-amber-500 hover:text-amber-600"
          disabled={isLoading}
          onClick={() => {
            exportToExcel(responses)
          }}
          >
          {isLoading ? (
            <Loader className="animate-spin" />
          ) : (
            <div className="flex items-center justify-center gap-1">
              <ArrowBigDownDash className="text-amber-500 hover:text-amber-600" />{" "}
              Export
            </div>
          )}
        </Button>
      </div>
    </div>
  );
}
