"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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

const HeaderForm =() => {
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
              <FormItem  className="w-72 py-0.5 lg:py-0">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              </FormItem>
              <FormItem className="w-72 py-0.5 lg:py-0">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                  </FormDescription> */}
              </FormItem>
              
            </div>
            <div className="flex flex-col lg:flex-row justify-around items-center">
              <FormItem  className="w-72 py-0.5 lg:py-0">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              </FormItem>
              <div className="flex w-72 gap-4">
              <FormItem className="w-72 py-0.5 lg:py-0">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                  </FormDescription> */}
              </FormItem>
              <FormItem className="w-72 py-0.5 lg:py-0">
                <FormLabel>Pin Code</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                  </FormDescription> */}
              </FormItem>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-around items-center">
              <FormItem  className="w-72 py-0.5 lg:py-0">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              </FormItem>
              <FormItem className="w-72 py-0.5 lg:py-0">
                <FormLabel>Email </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
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
        <Button type="submit" className="w-48" >Submit</Button>
        </div>
      </form>
    </Form>
  );
}

export default HeaderForm
