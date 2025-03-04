"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  Activites: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  Certificates: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const CustomSection = () => {
  const form = useForm({
    resolver: zodResolver(formSchema), // Validation with Zod
    defaultValues: {
      Activites: "",
      Certificates: "",
    },
  });

  function onSubmit(values: { Activites: string; Certificates: string }) {
    console.log(values); // Handle form submission
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className=" border-2 rounded-xl my-4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex flex-col justify-start items-start p-2 ">
            <p className="text-xl font-bold">Activities</p>
            <p className="text-sm ">
              Show that you're a well-rounded individual! This highlights your
              ability to balance different aspects of your life.
            </p>
          </AccordionTrigger>
          <AccordionContent className="p-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="Activites"
                  render={({ field }) => (
                    <>
                      <div className="flex flex-col lg:flex-row justify-around items-center">
                        <FormItem className="w-full py-0.5 lg:py-0">
                          <div className="flex justify-between items-center">
                            <FormLabel>
                              Enter you Skills and Competences{" "}
                            </FormLabel>
                            <Button type="submit" className="w-32 rounded-3xl">
                              Enhance with AI
                            </Button>
                          </div>
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
                          {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                        </FormItem>
                      </div>
                    </>
                  )}
                />
              </form>
            </Form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        collapsible
        className=" border-2 rounded-xl my-4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex flex-col justify-start items-start p-2 ">
            <p className="text-xl font-bold">Certifications and Licenses</p>
            <p className="text-sm ">
              Elevate your resume with noteworthy credentials that prove you are
              an expert in your field.
            </p>
          </AccordionTrigger>
          <AccordionContent className="p-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="Certificates"
                  render={({ field }) => (
                    <FormItem className="w-72 py-0.5 lg:py-0">
                      <FormLabel>Certification Name</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <Button className="mt-4 rounded-2xl">Add Certificate</Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        collapsible
        className=" border-2 rounded-xl my-4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex flex-col justify-start items-start p-2 ">
            <p className="text-xl font-bold">Websites and Social Links</p>
            <p className="text-sm ">
              Include a direct link to your portfolio or samples of your work
              for an added boost. Let your skills speak for themselves!
            </p>
          </AccordionTrigger>
          <AccordionContent className="p-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="flex flex-col lg:flex-row items-center  lg:justify-around ">
                  <FormField
                    control={form.control}
                    name="Certificates"
                    render={({ field }) => (
                      <FormItem className="w-72 py-0.5 lg:py-0">
                        <FormLabel>Website Name</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="Certificates"
                    render={({ field }) => (
                      <FormItem className="w-72 py-0.5 lg:py-0">
                        <FormLabel>Website Link</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
            <Button className="mt-4 rounded-2xl">Add Certificate</Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        collapsible
        className=" border-2 rounded-xl my-4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex flex-col justify-start items-start p-2 ">
            <p className="text-xl font-bold">Add Your Own</p>
            <p className="text-sm">
              Use this space to build a custom section, and make it your own.
            </p>
          </AccordionTrigger>
          <AccordionItem value="item-1">
            <AccordionContent className="p-5">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div className="flex flex-col lg:flex-row items-center  lg:justify-around ">
                    <FormField
                      control={form.control}
                      name="Certificates"
                      render={({ field }) => (
                        <FormItem className="w-72 py-0.5 lg:py-0">
                          <FormLabel>Website Name</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="Certificates"
                      render={({ field }) => (
                        <FormItem className="w-72 py-0.5 lg:py-0">
                          <FormLabel>Website Link</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form>
              <Button className="mt-4 rounded-2xl">Add Certificate</Button>
            </AccordionContent>
          </AccordionItem>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CustomSection;
