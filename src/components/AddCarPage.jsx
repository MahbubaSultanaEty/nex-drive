"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  ListBox,
  NumberField,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import {
  RiCarLine,
  RiMapPinLine,
  RiImageLine,
  RiUserLine,
  RiSaveLine,
  RiCloseLine,
} from "react-icons/ri";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";


const seatOptions = ["2", "4", "5", "6", "7", "8"];
const availabilityOptions = ["Available", "Unavailable"];

const labelClass = "text-xs font-semibold text-[#6B6560] uppercase tracking-widest mb-1";
const inputWrapperClass = "w-full bg-[#F8F5F0] border border-[#E0D9D0] rounded-xl px-4 py-2.5 text-sm text-[#1A1A1A] placeholder:text-[#C4BDB7] focus-within:border-[#C0392B] focus-within:ring-2 focus-within:ring-[#C0392B]/10 transition-all duration-200";

export default function AddCarPage() {
  const [imageUrl, setImageUrl] = useState("");
  const { data: session } = authClient.useSession();
  const user = session?.user;

    const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
      const car = {
        ...Object.fromEntries(formData.entries()),
        userId: user?.id
      };
      console.log(car);
        
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`, {
          method: "POST",
          headers: {
              "content-type": "application/json"
          },
          body: JSON.stringify(car)
      })
        const data= await res.json()
      if (data) {
        toast.success("Added Car to Fleet");
        redirect("/my-added-cars")
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <span className="inline-block text-xs font-medium tracking-[3px] uppercase text-[#C0392B] mb-3">
            Fleet Management
          </span>
          <h1 className="text-4xl font-bold text-[#1A1A1A]">
            Add a New <span className="text-[#C0392B]">Car</span>
          </h1>
          <p className="text-[#6B6560] mt-2 text-sm">
            Fill in the details below to list your vehicle on NexDrive.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-[#E0D9D0] rounded-2xl shadow-sm overflow-hidden">

          {/* Card top bar */}
          <div className="bg-[#1A0A0A] px-8 py-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C0392B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="ml-auto text-xs text-white/40 tracking-wider">nexdrive — add vehicle</span>
          </div>

          <div className="p-8">
            <Form onSubmit={handleSubmit}>
              <Fieldset>
                <Fieldset.Legend className="text-lg font-semibold text-[#1A1A1A] mb-1">
                  Vehicle Information
                </Fieldset.Legend>
                <Description className="text-sm text-[#6B6560] mb-6">
                  Provide accurate details to attract the right renters.
                </Description>

                <FieldGroup className="flex flex-col gap-5">

                  {/* Car Name — full width */}
                  <TextField
                    isRequired
                    name="carName"
                    className="w-full"
                    validate={(v) => v.length < 3 ? "Car name must be at least 3 characters" : null}
                  >
                    <Label className={labelClass}>
                      <span className="flex items-center gap-1.5">
                        <RiCarLine className="text-[#C0392B]" size={13} /> Car Name
                      </span>
                    </Label>
                    <Input
                      placeholder="e.g. Audi R8 Spyder"
                      className={inputWrapperClass}
                    />
                    <FieldError className="text-xs text-[#C0392B] mt-1" />
                  </TextField>

                  {/* Price + Car Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <NumberField
                      defaultValue={89}
                      minValue={0}
                      name="dailyRentPrice"
                      isRequired
                      className="w-full"
                    >
                      <Label className={labelClass}>Daily Rent Price ($)</Label>
                      <NumberField.Group className="flex w-full bg-[#F8F5F0] border border-[#E0D9D0] rounded-xl overflow-hidden focus-within:border-[#C0392B] focus-within:ring-2 focus-within:ring-[#C0392B]/10 transition-all duration-200">
                        <NumberField.DecrementButton className="px-3 text-[#6B6560] hover:text-[#C0392B] hover:bg-[#C0392B]/5 transition-colors border-r border-[#E0D9D0]" />
                        <NumberField.Input className="flex-1 bg-transparent text-sm text-center text-[#1A1A1A] py-2.5 focus:outline-none" />
                        <NumberField.IncrementButton className="px-3 text-[#6B6560] hover:text-[#C0392B] hover:bg-[#C0392B]/5 transition-colors border-l border-[#E0D9D0]" />
                      </NumberField.Group>
                    </NumberField>

                    <Select name="carType" placeholder="Select type" isRequired className="w-full">
                      <Label className={labelClass}>
                        <span className="flex items-center gap-1.5">
                          <RiCarLine className="text-[#C0392B]" size={13} /> Car Type
                        </span>
                      </Label>
                      <Select.Trigger className="w-full bg-[#F8F5F0] border border-[#E0D9D0] rounded-xl px-4 py-2.5 text-sm text-[#1A1A1A] flex items-center justify-between hover:border-[#C0392B] transition-colors duration-200">
                        <Select.Value className="text-[#C4BDB7]" />
                        <Select.Indicator className="text-[#6B6560]" />
                      </Select.Trigger>
                      <Select.Popover className="bg-white border border-[#E0D9D0] rounded-xl shadow-lg mt-1 overflow-hidden">
                        <ListBox className="p-1">
                          {["Sedan", "SUV", "Hatchback", "Luxury", "Electric", "Convertible", "Pickup Truck"].map((type) => (
                            <ListBox.Item
                              key={type} id={type} textValue={type}
                              className="px-4 py-2.5 text-sm text-[#1A1A1A] rounded-lg hover:bg-[#C0392B]/8 hover:text-[#C0392B] cursor-pointer flex items-center justify-between transition-colors"
                            >
                              {type}
                              <ListBox.ItemIndicator className="text-[#C0392B]" />
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>

                  </div>

                  {/* Seats + Availability */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <Select name="seats" placeholder="Select seats" isRequired className="w-full">
                      <Label className={labelClass}>
                        <span className="flex items-center gap-1.5">
                          <RiUserLine className="text-[#C0392B]" size={13} /> Seat Capacity
                        </span>
                      </Label>
                      <Select.Trigger className="w-full bg-[#F8F5F0] border border-[#E0D9D0] rounded-xl px-4 py-2.5 text-sm text-[#1A1A1A] flex items-center justify-between hover:border-[#C0392B] transition-colors duration-200">
                        <Select.Value className="text-[#C4BDB7]" />
                        <Select.Indicator className="text-[#6B6560]" />
                      </Select.Trigger>
                      <Select.Popover className="bg-white border border-[#E0D9D0] rounded-xl shadow-lg mt-1 overflow-hidden">
                        <ListBox className="p-1">
                          {seatOptions.map((s) => (
                            <ListBox.Item
                              key={s} id={s} textValue={`${s} Seats`}
                              className="px-4 py-2.5 text-sm text-[#1A1A1A] rounded-lg hover:bg-[#C0392B]/8 hover:text-[#C0392B] cursor-pointer flex items-center justify-between transition-colors"
                            >
                              {s} Seats
                              <ListBox.ItemIndicator className="text-[#C0392B]" />
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    <Select name="availability" placeholder="Select availability" isRequired className="w-full">
                      <Label className={labelClass}>Availability Status</Label>
                      <Select.Trigger className="w-full bg-[#F8F5F0] border border-[#E0D9D0] rounded-xl px-4 py-2.5 text-sm text-[#1A1A1A] flex items-center justify-between hover:border-[#C0392B] transition-colors duration-200">
                        <Select.Value className="text-[#C4BDB7]" />
                        <Select.Indicator className="text-[#6B6560]" />
                      </Select.Trigger>
                      <Select.Popover className="bg-white border border-[#E0D9D0] rounded-xl shadow-lg mt-1 overflow-hidden">
                        <ListBox className="p-1">
                          {availabilityOptions.map((opt) => (
                            <ListBox.Item
                              key={opt} id={opt} textValue={opt}
                              className="px-4 py-2.5 text-sm text-[#1A1A1A] rounded-lg hover:bg-[#C0392B]/8 hover:text-[#C0392B] cursor-pointer flex items-center justify-between transition-colors"
                            >
                              {opt}
                              <ListBox.ItemIndicator className="text-[#C0392B]" />
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>

                  </div>

                  {/* Image URL */}
                  <TextField
                    name="imageUrl"
                    isRequired
                    className="w-full"
                    onChange={(val) => setImageUrl(val)}
                  >
                    <Label className={labelClass}>
                      <span className="flex items-center gap-1.5">
                        <RiImageLine className="text-[#C0392B]" size={13} /> Image URL
                      </span>
                    </Label>
                    <Input
                      type="url"
                      placeholder="https://imgbb.com/your-car-image"
                      className={inputWrapperClass}
                    />
                    <FieldError className="text-xs text-[#C0392B] mt-1" />
                  </TextField>

                  {/* Image Preview */}
                  {imageUrl && (
                    <div className="relative w-full h-48 rounded-xl overflow-hidden border border-[#E0D9D0]">
                      <Image src={imageUrl} alt="Car preview" fill className="object-cover"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-xs text-white/80 bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
                        Preview
                      </span>
                    </div>
                  )}

                  {/* Pickup Location */}
                  <TextField name="location" isRequired className="w-full">
                    <Label className={labelClass}>
                      <span className="flex items-center gap-1.5">
                        <RiMapPinLine className="text-[#C0392B]" size={13} /> Pickup Location
                      </span>
                    </Label>
                    <Input
                      placeholder="e.g. Dhaka, Gulshan-1"
                      className={inputWrapperClass}
                    />
                    <FieldError className="text-xs text-[#C0392B] mt-1" />
                  </TextField>

                  {/* Description */}
                  <TextField name="description" isRequired className="w-full">
                    <Label className={labelClass}>Description</Label>
                    <TextArea
                      placeholder="Write a short description about this car..."
                      rows={4}
                      className="w-full bg-[#F8F5F0] border border-[#E0D9D0] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#C4BDB7] focus:outline-none focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/10 transition-all duration-200 resize-none"
                    />
                    <FieldError className="text-xs text-[#C0392B] mt-1" />
                  </TextField>

                </FieldGroup>

                {/* Divider */}
                <div className="border-t border-[#E0D9D0] my-6" />

                <Fieldset.Actions className="flex gap-3">
                  <Button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#C0392B] hover:bg-[#922B21] text-white font-medium text-sm py-3 rounded-xl transition-colors duration-200"
                  >
                    <RiSaveLine size={16} />
                    Add Car to Fleet
                  </Button>
                  <Button
                    type="reset"
                    className="flex items-center justify-center gap-2 bg-[#F8F5F0] hover:bg-[#E0D9D0] text-[#6B6560] font-medium text-sm px-6 py-3 rounded-xl border border-[#E0D9D0] transition-colors duration-200"
                  >
                    <RiCloseLine size={16} />
                    Cancel
                  </Button>
                </Fieldset.Actions>

              </Fieldset>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}