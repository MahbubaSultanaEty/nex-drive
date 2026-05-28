"use client";

import {
  Form,
  Input,
  Button,
  Description,
  FieldError, 
  Label,
  TextField,
  FieldGroup,
} from "@heroui/react";

import {
    Check,
    Eye,
    EyeSlash,  
} from "@gravity-ui/icons";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import {toast as toastify} from "react-toastify"
import { redirect } from "next/navigation";

const LoginForm =() =>  {
    const [showPassword, setShowPassword] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const user = Object.fromEntries(formdata.entries());
    const { data, error } = await authClient.signIn.email({
      email: user?.email,
      password: user?.password
    })

    if (data) {
      toastify.success("Logged in successfully");
      redirect('/')
    }
    if (error) {
      toast.error(`${error.message}`);
    }
    
  };

  return (
<Form className="flex w-96 flex-col gap-4" onSubmit={handleSubmit}>
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
    className="flex flex-col gap-1.5"
  >
    <Label className="text-xs font-medium text-[#6B6560] uppercase tracking-wider">Email</Label>
    <Input className="w-full bg-white border border-[#E0D9D0] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#C4BDB7] focus:outline-none focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/10 transition-all duration-200" placeholder="john@example.com" />
    <FieldError className="text-xs text-[#C0392B] mt-0.5" />
  </TextField>

  <TextField
    isRequired
    minLength={8}
    name="password"
    type={showPassword? "text": "password"}
    validate={(value) => {
      if (value.length < 8) return "Password must be at least 8 characters";
      if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
      if (!/[0-9]/.test(value)) return "Password must contain at least one number";
      return null;
    }}
    className="relative flex flex-col gap-1.5"
  >
    <Label className="text-xs font-medium text-[#6B6560] uppercase tracking-wider">Password</Label>
    <Input className="w-full bg-white border border-[#E0D9D0] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#C4BDB7] focus:outline-none focus:border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/10 transition-all duration-200" placeholder="Enter your password" />
    <Description className="text-xs text-[#6B6560]">Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError className="text-xs text-[#C0392B] mt-0.5" />
        <span onClick={()=> setShowPassword(!showPassword)} className="absolute top-9 right-6">
{showPassword? <Eye/>: <EyeSlash/>}
        </span>
       
  </TextField>

          
          {/* form buttons */}
  <div className="flex gap-3 mt-2">
    <Button type="submit" className="flex items-center gap-2 bg-[#C0392B] hover:bg-[#922B21] text-white text-sm font-medium px-6 py-3 rounded-xl transition-colors duration-200">
      <Check />
      Submit
    </Button>
    <Button type="reset" variant="secondary" className="flex items-center gap-2 bg-white border border-[#E0D9D0] hover:border-[#C0392B] text-[#6B6560] hover:text-[#C0392B] text-sm font-medium px-6 py-3 rounded-xl transition-all duration-200">
      Reset
    </Button>
  </div>
</Form>
  );
}

export default LoginForm