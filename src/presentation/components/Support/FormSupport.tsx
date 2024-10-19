import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SupportFormSchema } from "../../pages/schemas/SupportFormSchema";

interface FormSupportInterface {
  email: string;
  title: string;
  description: string;
  onSubmit: () => void;
  file: null;
}

const FormSupport = () => {
  const {
    register,
    handleSubmit,

    formState: {  },
  } = useForm<FormSupportInterface>({
    defaultValues: { email: "", title: "", description: "", file: null },

    shouldUseNativeValidation: true,
    mode: "onChange",
    resolver: zodResolver(SupportFormSchema),
  });

  return (
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className="flex flex-col gap-1"
        >
          <label htmlFor="email">E-mail</label>
          <input
            autoFocus
            type="email"
            className="w-[500px]  rounded-lg py-1.5 px-3 text-gray-900 ring-1 ring-gray-300"
            {...register("email")}
          />

          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="w-[500px]  rounded-lg py-1.5 px-3 text-gray-900 ring-1 ring-gray-300"
            {...register("title")}
          />
          <label>Description</label>
          <textarea
            {...register("description")}
            className="w-[500px] h-[120px] block rounded-lg py-1.5 px-3 text-gray-900 ring-1 ring-gray-300"
          />
          <label htmlFor="file">Upload file</label>
          <input
            {...register("file")}
            type="file"
            className="w-[500px]  rounded-lg py-1.5 px-3 text-gray-900 ring-1 ring-gray-300"
          />
          <button
            //onSubmit={handleSubmit}
            className="border mt-4 text-white w-[500px] hover:bg-blue-400 bg-blue-500 rounded-lg p-3"
          >
            Submit
          </button>
        </form>
  );
};

export default FormSupport;
