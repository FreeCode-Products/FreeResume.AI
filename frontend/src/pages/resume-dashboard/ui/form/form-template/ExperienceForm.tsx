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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  jobTitle: z.string().min(2, {
    message: "jobTitle must be at least 2 characters.",
  }),
  companyName: z.string().min(2, {
    message: "jobTitle must be at least 2 characters.",
  }),
  skillDescription: z.string().min(2, {
    message: "skillDescription must be at least 2 characters.",
  }),
  From: z.string().min(2, {
    message: "jobTitle must be at least 2 characters.",
  }),

  To: z.string().min(2, {
    message: "jobTitle must be at least 2 characters.",
  }),
});

const ExperienceForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema), // Validation with Zod
    defaultValues: {
      jobTitle: "",
      companyName: "",
      skillDescription: "",
      From: "",
      To: "",
    },
  });

  function onSubmit(values: {
    jobTitle: string;
    companyName: string;
    skillDescription: string;
    From: string;
    To: string;
  }) {
    console.log(values); // Handle form submission
  }
  const [text, setText] = useState("• "); // Start with a bullet

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default newline behavior
      setText((prev: string) => prev + "\n• "); // Add a new bullet point
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem className="w-72 py-0.5 lg:py-0">
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="w-72 py-0.5 lg:py-0">
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <FormField
            control={form.control}
            name="skillDescription"
            render={({ field }) => (
              <FormItem className="w-96 py-0.5 lg:py-0">
                <FormLabel>Skills description </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here."
                    {...field}
                    id="message-2"
                    className="h-40 w-full"
                    // value={text}
                    // onChange={handleChange}
                    onKeyDown={handleKeyDown}
                  />
                </FormControl>
                <FormMessage />
                {/* <FormDescription>
            This is your public display name.
          </FormDescription> */}
              </FormItem>
            )}
          />
          <div className="flex w-72 gap-4">
            <FormField
              control={form.control}
              name="From"
              render={({ field }) => (
                <FormItem className="w-72 py-0.5 lg:py-0">
                  <FormLabel>From</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from(
                        { length: new Date().getFullYear() - 1990 + 1 },
                        (_, i) => 1990 + i
                      ).map((itm) => (
                        <SelectItem value={String(itm)}>{itm}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {/* <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="To"
              render={({ field }) => (
                <FormItem className="w-72 py-0.5 lg:py-0">
                  <FormLabel> To </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from(
                        { length: new Date().getFullYear() - 1990 + 1 },
                        (_, i) => 1990 + i
                      ).map((itm) => (
                        <SelectItem value={String(itm)}>{itm}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                  <FormDescription className="flex gap-2">
                    {/* <div className="flex gap-2"> */}
                    <Checkbox id="terms1" />
                    <span className="w-20 text-xs text-nowrap">
                      {" "}
                      {"I'm currently working here"}
                    </span>
                    {/* </div> */}
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button className="w-44 rounded-3xl">Add more Experience</Button>
        <div className="flex justify-center ">
          <Button type="submit" className="w-48">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ExperienceForm;
