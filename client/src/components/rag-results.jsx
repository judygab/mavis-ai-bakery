import { motion } from "framer-motion";
import AnimatedText from "@/components/typing-animation";
import { SkeletonCard } from "@/components/skeleton-animation";
import { ClipboardPlus, Search } from "lucide-react";
import SvgPathLoader from "@/components/document-animation";

const RAGResults = ({ isLoading, data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col"
    >
      <div className="flex items-center justify-center flex-row">
        <Search className="w-12 h-12 text-primary" />
        <AnimatedText text="Looking up relevant ICD-10 codes..." />
      </div>
      <div className="mt-6 flex items-center justify-center">
        <SvgPathLoader />
      </div>
    </motion.div>
  );
};

export default RAGResults;
