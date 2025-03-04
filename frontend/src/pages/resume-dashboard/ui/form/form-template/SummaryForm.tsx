"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  job_Title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  Summary: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const SummaryForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema), // Validation with Zod
    defaultValues: {
      job_Title: "",
      Summary: "",
    },
  });

  function onSubmit(values: { job_Title: string; Summary: string }) {
    console.log(values); // Handle form submission
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col lg:flex-row justify-start items-center">
          <FormField
            control={form.control}
            name="job_Title"
            render={({ field }) => (
              <FormItem className=" w-72 py-0.5 lg:py-0.5">
                <FormLabel>Enter your Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
            <div className="flex flex-col lg:flex-row  justify-between items-center">
          <FormField
            control={form.control}
            name="Summary"
            render={({ field }) => (
              <FormItem className="py-0.5 lg:py-0.5 w-full">
                <div className="flex flex-col lg:flex-row justify-between items-center">

                  <FormLabel>Enter your Executive Summary</FormLabel>
                <Button className="w-40 rounded-3xl ">Enhance with AI</Button>
                </div>
          <Textarea
                  placeholder="Type your message here."
                  {...field}
                  id="message-2"
                  className="h-40"
                />
                <p className="text-sm text-muted-foreground">
                  Your can auto-generate the message using AI.
                </p>
                <FormMessage />
              </FormItem>
            )}
            />
        </div>
     
        {/* <div className="flex flex-col lg:flex-row justify-start items-center"> */}

        <div className="flex justify-center ">
          <Button type="submit" className="w-48">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SummaryForm;
