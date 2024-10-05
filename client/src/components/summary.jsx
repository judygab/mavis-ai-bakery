import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const Summary = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col"
    >
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">Note Summary</h2>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{text}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Summary;
