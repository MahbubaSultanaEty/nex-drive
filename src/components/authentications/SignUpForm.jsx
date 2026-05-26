"use client"
import { Check } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';


const SignUpForm = () => {

    const handleSubmit = () => {
        console.log("form submitted");
    }
    return (
  <Form className="w-full flex flex-col gap-5 " onSubmit={handleSubmit}>

  {/* Name */}
  <TextField
    isRequired
    name="name"
    type="text"
    className="flex flex-col gap-2"
  >
    <Label className="text-xs font-medium text-[#6B6560] uppercase tracking-[2px]">
      Full Name
    </Label>

    <Input
      className="w-full bg-[#F8F5F0] border border-[#E0D9D0] rounded-2xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder:text-[#A8A19B] focus:outline-none focus:border-[#C0392B] focus:ring-4 focus:ring-[#C0392B]/10 transition-all duration-200"
      placeholder="John Doe"
    />
  </TextField>

  {/* Email */}
  <TextField
    isRequired
    name="email"
    type="email"
    validate={(value) => {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        return "Please enter a valid email address";
      }

      return null;
    }}
    className="flex flex-col gap-2"
  >
    <Label className="text-xs font-medium text-[#6B6560] uppercase tracking-[2px]">
      Email Address
    </Label>

    <Input
      className="w-full bg-[#F8F5F0] border border-[#E0D9D0] rounded-2xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder:text-[#A8A19B] focus:outline-none focus:border-[#C0392B] focus:ring-4 focus:ring-[#C0392B]/10 transition-all duration-200"
      placeholder="john@example.com"
    />

    <FieldError className="text-xs text-[#C0392B] mt-1" />
  </TextField>

  {/* Image */}
  <TextField
    isRequired
    name="image"
    type="text"
    className="flex flex-col gap-2"
  >
    <Label className="text-xs font-medium text-[#6B6560] uppercase tracking-[2px]">
      Profile Image URL
    </Label>

    <Input
      className="w-full bg-[#F8F5F0] border border-[#E0D9D0] rounded-2xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder:text-[#A8A19B] focus:outline-none focus:border-[#C0392B] focus:ring-4 focus:ring-[#C0392B]/10 transition-all duration-200"
      placeholder="https://example.com/profile.jpg"
    />
  </TextField>

  {/* Password */}
  <TextField
    isRequired
    minLength={8}
    name="password"
    type="password"
    validate={(value) => {
      if (value.length < 8) {
        return "Password must be at least 8 characters";
      }

      if (!/[A-Z]/.test(value)) {
        return "Password must contain at least one uppercase letter";
      }

      if (!/[0-9]/.test(value)) {
        return "Password must contain at least one number";
      }

      return null;
    }}
    className="flex flex-col gap-2"
  >
    <Label className="text-xs font-medium text-[#6B6560] uppercase tracking-[2px]">
      Password
    </Label>

    <Input
      className="w-full bg-[#F8F5F0] border border-[#E0D9D0] rounded-2xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder:text-[#A8A19B] focus:outline-none focus:border-[#C0392B] focus:ring-4 focus:ring-[#C0392B]/10 transition-all duration-200"
      placeholder="Create a secure password"
    />

    <Description className="text-xs text-[#6B6560] leading-relaxed">
      Minimum 8 characters, including uppercase letter and number
    </Description>

    <FieldError className="text-xs text-[#C0392B] mt-1" />
  </TextField>

  {/* Buttons */}
  <div className="flex gap-3 pt-2">

    <Button
      type="submit"
      className="flex-1 flex items-center justify-center gap-2 bg-[#C0392B] hover:bg-[#922B21] text-white text-sm font-medium px-6 py-3.5 rounded-2xl transition-all duration-200"
    >
      <Check />
      Create Account
    </Button>

    <Button
      type="reset"
      variant="secondary"
      className="flex items-center justify-center bg-white border border-[#E0D9D0] hover:border-[#C0392B] text-[#6B6560] hover:text-[#C0392B] text-sm font-medium px-6 py-3.5 rounded-2xl transition-all duration-200"
    >
      Reset
    </Button>

  </div>

</Form>
    );
};

export default SignUpForm;