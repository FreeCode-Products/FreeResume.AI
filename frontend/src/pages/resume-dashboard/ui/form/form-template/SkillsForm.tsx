"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function SkillsForm() {
  const form = useForm({
    resolver: zodResolver(formSchema), // Validation with Zod
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: { username: string }) {
    console.log(values); // Handle form submission
  }
  const [text, setText] = useState("• "); // Start with a bullet

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default newline behavior
      setText((prev: any) => prev + "\n• "); // Add a new bullet point
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <>
              <div className="flex flex-col lg:flex-row justify-around items-center">
                <FormItem className="w-full py-0.5 lg:py-0">
                  <div className="flex justify-between items-center">
                    <FormLabel>Enter you Skills and Competences </FormLabel>
                    <Button type="submit" className="w-32 rounded-3xl">
                      Enhance with AI
                    </Button>
                  </div>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      id="message-2"
                      className="h-40 w-full"
                      value={text}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                    />
                  </FormControl>
                  {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                </FormItem>
              </div>
            </>
          )}
        />
        <div className="flex justify-center ">
          <Button type="submit" className="w-48">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
