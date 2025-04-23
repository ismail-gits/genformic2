"use client";

import { Loader, Sparkles } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { fetchAiResponse } from "@/app/actions/geminiApi";
import { saveGeneratedForm } from "@/app/actions/saveGeneratedForm";

export default function CreateForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userPrompt, setUserPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const route = useRouter();

  const prompt = `Description: ${userPrompt}. On the basis of description, generate a form in JSON format with title,  subheading, fields such as name, placeholder, label, type, options(value and label) and required. Note: Make sure there are no mistakes in the JSON output as I need to use JSON.parse()`;

  const onGenerateForm = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const aiResponse = await fetchAiResponse(prompt);
      console.log(aiResponse);
      const dbResponse = await saveGeneratedForm(aiResponse);
      console.log("Form created successfully:", dbResponse);

      if (dbResponse.id) {
        route.push(`/form/edit/${dbResponse.id}`);
      }

      // close the dialog after form creation
      setIsDialogOpen(false);
    } catch (error) {
      console.log("Error fetching AI response: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={() => setIsDialogOpen(true)}>
        <Sparkles /> Generate Form
      </Button>
      <Dialog open={isDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold">Generate New Form</DialogTitle>
            <DialogDescription>
              <Textarea
                onChange={(e) => {
                  setUserPrompt(e.target.value);
                }}
                className="my-2 text-black"
                placeholder="Type your prompt: e.g., 'Job application form for a startup'"
              />
            </DialogDescription>
            <div className="flex gap-2 justify-end">
              <Button
                variant={"destructive"}
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={onGenerateForm} disabled={isLoading}>
                {isLoading ? <Loader className="animate-spin"/> : "Generate"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
