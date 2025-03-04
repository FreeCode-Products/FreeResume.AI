"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  schoolName: z.string().min(2, {
    message: "schoolName must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "location must be at least 2 characters.",
  }),
  degreeName: z.string().min(2, {
    message: "degreeName must be at least 2 characters.",
  }),
  From: z.string().min(2, {
    message: "From must be at least 2 characters.",
  }),

  To: z.string().min(2, {
    message: "To must be at least 2 characters.",
  }),
  Score:  z.string().min(2, {
    message: "Score must be at least 2 characters.",
  }),
});

const EducationForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema), // Validation with Zod
    defaultValues: {
      schoolName: "",
      location: "",
      degreeName: "",
      From: "",
      To: "",
      Score:""
    },
  });

  function onSubmit(values: {
    schoolName: string;
    location: string;
    degreeName: string;
    From: string;
    To: string;
    Score: string;
  }) {
    console.log(values); // Handle form submission
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <FormField
            control={form.control}
            name="schoolName"
            render={({ field }) => (
              <FormItem className="w-72 py-0.5 lg:py-0">
                <FormLabel>College or school Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                 </FormControl>
                <FormMessage />

              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-72 py-0.5 lg:py-0">
                <FormLabel>Location</FormLabel>
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
            name="degreeName"
            render={({ field }) => (
              <FormItem className="w-72 py-0.5 lg:py-0">
                <FormLabel>Enter your Degree </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                 </FormControl>
                <FormMessage />
                
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
                      {"I'm currently studying here"}
                    </span>
                    {/* </div> */}
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <FormField
            control={form.control}
            name="Score"
            render={({ field }) => (
              <FormItem className="w-72 py-0.5 lg:py-0">
                <FormLabel>Enter your Score</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                 </FormControl>
                <FormMessage />
               
              </FormItem>
            )}
          />
         
        </div>

        <Button className="w-40 rounded-3xl">Add more course</Button>
        <div className="flex justify-center ">
          <Button type="submit" className="w-48">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EducationForm;
