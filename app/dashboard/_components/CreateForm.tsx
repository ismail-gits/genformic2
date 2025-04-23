import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import React, { useState } from "react";

export default function CreateForm() {
  const [userInput, setUserInput] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Sparkles /> Generate Form
        </Button>
      </DialogTrigger>
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
            <div className="flex gap-2 my-3 justify-end">
              <Button variant={"destructive"}>Cancel</Button>
              <Button>Generate</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
