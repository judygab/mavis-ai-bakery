"use client";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ClipboardPlus, Bot } from "lucide-react";
import { summarize } from "@/app/actions/summarize";
import Summary from "@/components/summary";
import AnimatedText from "@/components/typing-animation";
import { SkeletonCard } from "@/components/skeleton-animation";
import { CLINICAL_NOTE } from "@/data/clinical-note";
import RAGResults from "@/components/rag-results";
import { generate } from "@/app/actions/generate";
import { rag_query } from "@/app/actions/rag";
import CodesTable from "@/components/table";

export default function Form() {
  const [text, setText] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [summary, setSummary] = useState("");
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [llmLoading, setLlmLoading] = useState(false);
  const [ragLoading, setRagLoading] = useState(false);
  const [ragData, setRagData] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Shift") {
        console.log("Shift key pressed");
        event.preventDefault();
        setText(CLINICAL_NOTE);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setSummaryLoading(true);
    // Add your submit logic here
    const generatedSummary = await summarize(text);
    console.log("summary", summary);

    setSummary(generatedSummary);
    setTimeout(() => {
      setSummaryLoading(false);
    }, 3000);
    setTimeout(() => {
      setLlmLoading(true);
    }, 3500);
    const llmData = await generate(generatedSummary);
    setLlmLoading(false);
    setRagLoading(true);
    const ragResponse = await rag_query(llmData.response);
    setRagLoading(false);

    console.log("ragggg", ragResponse);
    setRagData(ragResponse["rag_documents"]);
    // setTimeout(() => {
    //   setLlmLoading(true);
    // }, 3000);
    // setLlmLoading(true);
    // setLlmLoading(false);
    // setRagLoading(true);
  };

  return (
    <div className={`flex justify-center items-center bg-background p-4 gap-4 md:w-8/12 w-full"`}>
      {!formSubmitted && (
        <form
          onSubmit={handleSubmit}
          className={`w-full mx-auto flex flex-col ${
            summary !== "" ? "md:w-1/2" : "w-full"
          } h-[calc(100vh-8rem)]`}
        >
          <h1 className="text-2xl font-bold mb-4 text-center">Clinical Notes</h1>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your clinical note here or press ⇧Shift to load a sample note ..."
            className="flex-grow mb-4 resize-none p-4 text-lg"
          />
          <Button
            type="submit"
            className="w-full py-6 text-lg flex items-center justify-center space-x-2"
          >
            <ClipboardPlus className="w-6 h-6" />
            Submit
          </Button>
        </form>
      )}
      <div className="flex flex-col gap-6">
        {summaryLoading && (
          <div className="w-ful flex flex-col items-center justify-center w-full gap-5">
            <AnimatedText text="Generating summary..." />
            <SkeletonCard />
          </div>
        )}
        {summary !== "" && !summaryLoading && (
          <div className="w-full">
            <Summary text={summary} />
          </div>
        )}
        {llmLoading && (
          <div className="flex items-center justify-center flex-row">
            <Bot className="w-12 h-12 text-primary mr-3" />
            <AnimatedText text="Analyzing Data using fine-tuned LLM..." />
          </div>
        )}
        {ragLoading && <RAGResults isLoading={ragLoading} />}
        {ragData && !ragLoading && (
          <div className="w-full">
            <CodesTable data={ragData} />
          </div>
        )}
      </div>
    </div>
  );
}
