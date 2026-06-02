"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Check, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { FaLink, FaLock } from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    // console.log(user, "User");

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      name: user.name,
      password: user.password,
      image: user.image,
    });

    console.log(data, error);

    // if (data) {
    //   toast.success(
    //     `${data.name}, you have successfully registered your account.`,
    //   );
    // }
    // if (error) {
    //   toast.error(`${error.message}`);
    // }

    // toast.success("Form submitted");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-3 overflow-hidden py-20">
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full -top-20 -left-20"
      />

      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-80 h-80 bg-purple-500/20 blur-3xl rounded-full bottom-0 right-0"
      />

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md p-5 rounded-2xl bg-black/10 border border-slate-300 shadow-xl backdrop-blur-xl"
      >
        <Form onSubmit={onSubmit} className="space-y-5">
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="font-bold text-center text-2xl"
          >
            Register your account
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {/* Name */}
            <motion.div variants={itemVariants}>
              <TextField name="name" type="text" isRequired>
                <Label>Full Name</Label>
                <InputGroup className="rounded-full overflow-hidden">
                  {/* ICON INSIDE INPUT */}
                  <InputGroup.Prefix className="pl-3 text-gray-400">
                    <User size={14} />
                  </InputGroup.Prefix>

                  <InputGroup.Input placeholder="Enter your name" />
                </InputGroup>

                <FieldError />
              </TextField>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <TextField name="email" type="email" isRequired>
                <Label>Email</Label>
                <InputGroup className={"rounded-full  overflow-hidden"}>
                  <InputGroup.Prefix className="pl-3 text-gray-400">
                    <AiOutlineMail size={14} />
                  </InputGroup.Prefix>
                  <InputGroup.Input placeholder="Enter email" />
                </InputGroup>
              </TextField>
            </motion.div>

            {/* Image */}
            <motion.div variants={itemVariants}>
              <TextField name="image" type="url" isRequired>
                <Label>Photo URL</Label>
                <InputGroup className={"rounded-full overflow-hidden"}>
                  <InputGroup.Prefix className="pl-3 text-gray-400">
                    <FaLink size={14} />
                  </InputGroup.Prefix>
                  <InputGroup.Input placeholder="Enter photo URL" />
                </InputGroup>
              </TextField>
            </motion.div>
            {/* Password */}
            <motion.div variants={itemVariants}>
              <TextField name="password" type="password" isRequired>
                <Label>Password</Label>
                <InputGroup className={"rounded-full overflow-hidden"}>
                  <InputGroup.Prefix className="pl-3 text-gray-400">
                    <FaLock size={12} />
                  </InputGroup.Prefix>
                  <InputGroup.Input
                    type={isVisible ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputGroup.Suffix>
                    <Button
                      isIconOnly
                      variant="ghost"
                      onPress={() => setIsVisible(!isVisible)}
                    >
                      {isVisible ? <Eye /> : <EyeSlash />}
                    </Button>
                  </InputGroup.Suffix>
                </InputGroup>
              </TextField>
            </motion.div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Button
                type="submit"
                className="w-full bg-indigo-600 rounded-full"
              >
                <Check /> Register
              </Button>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="flex-1 h-px bg-gray-300" />
            OR CONTINUE WITH
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Google Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Button className="w-full rounded-full border hover:bg-indigo-600">
              <FcGoogle size={20} />
              Continue with Google
            </Button>
          </motion.div>

          {/* Login link */}
          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-red-500">
              Login
            </Link>
          </p>
        </Form>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
