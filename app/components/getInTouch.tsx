"use client";

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export default function GetInTouch() {
  const router = useRouter();

  const [sending, setSending] = useState(false);

  const schema: ZodType<FormData> = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(9).max(14),
    message: z.string().min(2).max(500),
  });

  const form = useForm<FormData>({ resolver: zodResolver(schema) });

  const onValid = useCallback(
    async (data: FormData) => {
      setSending(true);
      await fetch("/api/sendmail/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(() => {
          setTimeout(() => {
            router.push("/");
          }, 1000);
        })
        .then(() => {
          setSending(false);
        });
    },
    [router]
  );

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onValid)} className="p-10 ">
          <div className="mx-auto md:max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
              <div className="text-slate-900 font-semibold text-sm leading-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jméno</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="text-slate-900 font-semibold text-sm leading-6">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Přijmení</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:col-span-2 text-slate-900 font-semibold text-sm leading-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:col-span-2 text-slate-900 font-semibold text-sm leading-6">
                {" "}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefon</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:col-span-2 text-slate-900 font-semibold text-sm leading-6">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vaše zpráva</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              {sending ? (
                <button
                  type="submit"
                  className="rounded-md bg-[#4154B3] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Odeslat
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={sending}
                  className="rounded-md bg-[#4154B3] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate-pulse"
                >
                  Odesílám ....
                </button>
              )}
            </div>
          </div>
        </form>
      </Form>
      <div className="text-black p-10 text-xs opacity-80">
        * Odesláním tohoto formuláře souhlasíte se zpracováním osobních údajů.
        Více o ochraně osobních údajů a Vašich právech naleznete (
        <Link
          href="/consent"
          target={"_blank"}
          className="underline hover:text-blue-500 cursor-pointer"
        >
          zde
        </Link>
        ) .
      </div>
    </>
  );
}
