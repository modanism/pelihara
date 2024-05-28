"use client";

import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({ value, onChange }: PasswordInputProps) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        type={show ? "text" : "password"}
        backgroundColor={"#EEEDF0"}
        textColor={"#777676"}
        placeholder="Enter password"
        className="border-none"
        value={value}
        onChange={onChange}
      />
      <InputRightElement>
        <div onClick={handleClick}>{show ? <FaEye /> : <FaEyeSlash />}</div>
      </InputRightElement>
    </InputGroup>
  );
}
