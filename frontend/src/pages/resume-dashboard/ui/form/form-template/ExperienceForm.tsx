"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function ExperienceForm() {
  const form = useForm({
    resolver: zodResolver(formSchema), // Validation with Zod
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: { username: string }) {
    console.log(values); // Handle form submission
  }
  const [text, setText] = useState("• ") // Start with a bullet

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault() // Prevent default newline behavior
      setText((prev : string) => prev + "\n• ") // Add a new bullet point
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }
 
 return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <>
              <div className="flex flex-col lg:flex-row justify-around items-center">
                <FormItem className="w-72 py-0.5 lg:py-0">
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
                <FormItem className="w-72 py-0.5 lg:py-0">
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                 
                </FormItem>
              </div>
              <div className="flex flex-col lg:flex-row justify-around items-center">
                <FormItem className="w-96 py-0.5 lg:py-0">
                  <FormLabel>Skills description </FormLabel>
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
                <div className="flex w-72 gap-4">
                  <FormItem className="w-72 py-0.5 lg:py-0">
                    <FormLabel>From</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                   
                  </FormItem>
                  <FormItem className="w-72 py-0.5 lg:py-0">
                    <FormLabel> To </FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormDescription className="flex gap-2">
                      {/* <div className="flex gap-2"> */}
                        <Checkbox id="terms1" />
                           <span className="w-20 text-xs text-nowrap"> {"I'm currently working here"}</span>
                      {/* </div> */}
                    </FormDescription>
                  </FormItem>
                </div>
              </div>
            </>
          )}
        />
         <Button  className="w-44 rounded-3xl">
            Add more Experience
          </Button>
        <div className="flex justify-center ">
          <Button type="submit" className="w-48">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
