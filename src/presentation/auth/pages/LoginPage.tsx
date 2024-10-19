import React from "react";
import { useForm } from "react-hook-form";
import Login from "../../components/login/Login";

type FormData = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm<FormData>();

  // const onSubmit = (data: FormData) => {
  //   console.log(data);
  //   reset();
  // };

  return (
    // <div className="bg-base-100 flex flex-col items-center justify-center pt-32 m-8">
    //   <h1 className="text-3xl font-bold p-5">¡Bienvenido de nuevo!</h1>

    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <div className="p-4 m-4 border rounded-badge">
    //       <label>
    //         Email:
    //         <input
    //           className="p-1 m-1 rounded-badge"
    //           type="email"
    //           {...register("email", {
    //             required: true,
    //             pattern: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
    //           })}
    //         />
    //         {errors.email?.type === "required" && (
    //           <span className="text-xs p-1">Este campo es obligatorio</span>
    //         )}
    //         {errors.email?.type === "pattern" && (
    //           <span className="text-xs p-1">
    //             El formato de email ingresado no es válido
    //           </span>
    //         )}
    //       </label>
    //     </div>

    //     <div className="p-4 m-4 border rounded-badge">
    //       <label>
    //         Contraseña:
    //         <input
    //           className="p-1 m-1 rounded-badge"
    //           {...register("password", {
    //             required: true,
    //             pattern:
    //               /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //           })}
    //         />
    //         {errors.password?.type === "required" && (
    //           <span className="text-xs p-1">Este campo es obligatorio</span>
    //         )}
    //         {errors.password?.type === "pattern" && (
    //           <span className="text-xs p-1">
    //             La contraseña debe tener al menos 8 caracteres, una letra
    //             (mayúscula o minúscula), un dígito y un carácter especial
    //           </span>
    //         )}
    //       </label>
    //     </div>

    //     <div className="p-4 m-4 border rounded-badge w-fit">
    //       <input type="submit" />
    //     </div>
    //   </form>
    // </div>
    <Login />
  );
};
