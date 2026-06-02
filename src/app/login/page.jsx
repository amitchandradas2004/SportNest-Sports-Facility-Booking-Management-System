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
import { GrLogin } from "react-icons/gr";
import { IoMdLogIn } from "react-icons/io";
import { redirect } from "next/navigation";

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

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    // console.log(data, error);

    if (data) {
      toast.success(
        `${data.user.name}, you have successfully logged in your account.`,
      );
    }
    if (error) {
      toast.error(`${error.message}`);
      return;
    }
    redirect("/");
  };
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    // toast.success("Sign In  Success");
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
            Login your account
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
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
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="mt-2">
              <Button
                type="submit"
                className="w-full bg-indigo-600 rounded-full"
              >
                <IoMdLogIn />
                Login
              </Button>
            </motion.div>
          </motion.div>
        </Form>
        <div className="flex items-center gap-2 text-xs text-gray-500 my-3">
          <div className="flex-1 h-px bg-gray-300" />
          OR CONTINUE WITH
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} >
          <Button
            onClick={handleGoogleSignIn}
            className="w-full rounded-full border hover:bg-indigo-600"
          >
            <FcGoogle size={20} />
            Continue with Google
          </Button>
        </motion.div>

        <p className="text-center text-sm mt-3">
          Do not have an account?{" "}
          <Link href="/signUp" className="text-red-500">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
