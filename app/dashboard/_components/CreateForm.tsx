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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function CreateForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userInput, setUserInput] = useState("");

  const onGenerateForm = (): void => {
    console.log(userInput);
    setIsDialogOpen(false);
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
                  setUserInput(e.target.value);
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
