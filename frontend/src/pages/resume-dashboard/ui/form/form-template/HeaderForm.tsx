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
  FormMessage, 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First Name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last Name must be at least 2 characters." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  country: z.string().min(2, { message: "Country must be at least 2 characters." }),
  pinCode: z.string().min(+4, { message: "Pin Code must be at least 4 digits." }),
  phone: z.string().regex(/^\d{10,15}$/, { message: "Phone number must be between 10 to 15 digits." }),
  email: z.string().email({ message: "Invalid email address." }),
});

const HeaderForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      city: "",
      country: "",
      pinCode: "",
      phone: "",
      email: "",
    },
  });

  function onSubmit(values: {
    firstName: string;
    lastName: string;
    city: string;
    country: string;
    pinCode: string;
    phone: string;
    email: string;
  }) {
    console.log(values);
  }

  return (
    <Form {...form}> 
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col lg:flex-row justify-around items-center">
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-72 py-0.5 lg:py-0">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter first name" />
                </FormControl>
                <FormMessage /> 
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-72 py-0.5 lg:py-0">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter last name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-around items-center">
          {/* City */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-72 py-0.5 lg:py-0">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter city" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex w-72 gap-4">
            {/* Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-72 py-0.5 lg:py-0">
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter country" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Pin Code */}
            <FormField
              control={form.control}
              name="pinCode"
              render={({ field }) => (
                <FormItem className="w-72 py-0.5 lg:py-0">
                  <FormLabel>Pin Code</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(e.target.value)}
                      placeholder="100001"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-around items-center">
          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-72 py-0.5 lg:py-0">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    {...field}
                    placeholder="+1234567890"
                    onChange={(e) => field.onChange(e.target.value.replace(/\D/g, ""))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-72 py-0.5 lg:py-0">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button type="submit" className="w-48">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default HeaderForm;
