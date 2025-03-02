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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const EducationForm =() =>  {
  const form = useForm({
    resolver: zodResolver(formSchema), // Validation with Zod
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: { username: string }) {
    console.log(values); // Handle form submission
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
                  <FormLabel>Degree or school Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
                <FormItem className="w-72 py-0.5 lg:py-0">
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                  This is your public display name.
                  </FormDescription> */}
                </FormItem>
              </div>
              <div className="flex flex-col lg:flex-row justify-around items-center">
                <FormItem className="w-72 py-0.5 lg:py-0">
                  <FormLabel>Enter your Degree </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
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
                    {/* <FormDescription>
                  This is your public display name.
                  </FormDescription> */}
                  </FormItem>
                  <FormItem className="w-72 py-0.5 lg:py-0">
                    <FormLabel> To </FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormDescription>
                      {/* <div className="flex gap-2"> */}
                        <Checkbox id="terms1" />
                        <span> Im still enrolled</span>
                      {/* </div> */}
                    </FormDescription>
                  </FormItem>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-around items-center">
                <FormItem className="w-72 py-0.5 lg:py-0">
                  <FormLabel>Enter your Score</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                </FormItem>
                <FormItem className="w-72 py-0.5 lg:py-0">
                  {/* <FormLabel>Enter your Score</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl> */}
                  {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                </FormItem>
              </div>
            </>
          )}
        />
         <Button  className="w-40 rounded-3xl">
            Add more course
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

export default EducationForm
