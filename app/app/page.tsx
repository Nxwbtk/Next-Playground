"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dashboard } from "@/components/dashboard";


const dummy = {
  total_documents: 100,
  pending_documents: 50,
  cancel_documents: 25,
}

export default function Page() {
  return (
    <>
    <Dashboard {...dummy} />
    </>
  );
}
