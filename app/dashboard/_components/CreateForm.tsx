"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import fetchAiResponse from "@/app/actions/geminiApi";

export default function CreateForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userPrompt, setUserPrompt] = useState("");

  const prompt = `Description: ${userPrompt}. On the basis of description, generate an advanced and detailed form in JSON format with title,  subheading, fields such as name, placeholder, label, type, options(value and label) and required`;

  const onGenerateForm = async (): Promise<void> => {
    try {
      const response = await fetchAiResponse(prompt);
      console.log("AI response: ", response);
    } catch (error) {
      console.log("Error fetching AI response: ", error);
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
              <Button onClick={onGenerateForm}>Generate</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
