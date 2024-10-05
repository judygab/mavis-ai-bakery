import { Send, FileText } from "lucide-react";

const Links = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="#"
        className="text-blue-500 underline flex items-center"
      >
        <FileText className="mr-2" />
        Save and access electronic health records
      </a>
      <a
        href="#"
        className="text-blue-500 underline flex items-center"
      >
        <Send className="mr-2" />
        Send to insurance
      </a>
    </div>
  );
};

export default Links;
