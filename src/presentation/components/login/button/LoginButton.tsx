import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormLoginInputs {
  email: string;
  password: string;
}

const LoginButton = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormLoginInputs>();
  const onSubmit: SubmitHandler<FormLoginInputs> = (data) => console.log(data);
  return (
    <div className="mt-24 rounded-lg p-4 max-w-sm mx-auto shadow-2xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action="#"
        className="flex flex-col justify-center gap-4"
      >
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="email" className="text-md font-semibold">
            Email
          </label>
          <input
            className="rounded-lg p-2 outline-none border-2 border-gray-800"
            type="text"
            placeholder="Ingrese su email"
            id="email"
            autoComplete="off"
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <p role="alert" className="text-red-600 text-xs">
              Correo electrónico es requerido
            </p>
          )}
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="password" className="text-md font-semibold">
            Contraseña
          </label>
          <input
            className="rounded-lg p-2 outline-none border-2 border-gray-800"
            type="password"
            placeholder="Ingrese su contraseña"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p role="alert" className="text-red-600 text-xs">
              Contraseña es requerida
            </p>
          )}
        </fieldset>
        <div className="self-center w-full ">
          <button
            type="submit"
            className="w-full bg-gray-800 text-white rounded-md p-4 hover:bg-gray-900 transition-all duration-300 ease-in-out"
          >
            Acceder
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginButton;
