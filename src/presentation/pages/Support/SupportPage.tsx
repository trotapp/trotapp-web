import FormSupport from "../../components/Support/FormSupport";
import LinksSupport from "./LinksSupport";

export const SupportPage = () => {
  return (
    <main className="h-screen w-screen">
      <div className="flex flex-col justify-center items-center size-full">
        <h1 className="text-black font-jakarta mt-10 text-2xl font-semibold">
          How can we help you?
        </h1>
        <FormSupport />
        <LinksSupport />
      </div>
    </main>
  );
};
