import Form from "@/components/form";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow flex justify-center items-center p-4">
        <Form />
      </main>
    </>
  );
}
