import { useForm } from "react-hook-form";

export const TaskFormV2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const customSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-between py-10 p-4 my-4 border rounded-md">
      <h1 className="text-2xl">Form with react-hook-form</h1>

      <form onSubmit={handleSubmit(customSubmit)} className="grid gap-4">
        <div className="flex flex-col">
          <label>Title</label>
          <input
            className="px-2 rounded-md text-black"
            type="text"
            {...register("title", { required: true, maxLength: 10 })}
          />
          {errors.title?.type === "required" && (
            <span className="text-red-500 text-xs">El campo no puede estar vacio</span>
          )}
          {errors.title?.type === "maxLength" && (
            <span className="text-red-500 text-xs">El campo no puede exeder en los 10 caracteres</span>
          )}
        </div>
        <div className="flex flex-col">
          <label>Description</label>
          <input
            className="px-2 rounded-md text-black"
            type="text"
            {...register("description", { required: true, maxLength: 30 })}
          />
          {errors.description?.type === "required" && (
            <span className="text-red-500 text-xs">El campo no puede estar vacio</span>
          )}
          {errors.description?.type === "maxLength" && (
            <span className="text-red-500 text-xs">El campo no puede exeder en los 30 caracteres</span>
          )}
        </div>
        <button className="bg-violet-900 hover:bg-violet-600 rounded-md py-2" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
