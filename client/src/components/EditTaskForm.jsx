import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import useUpdateTaskMutation from "../hooks/useUpdateTaskMutation";

const tasksSchema = z.object({
  title: z.string().max(15).nonempty("Required").min(2),
  description: z.string().max(50).nonempty("Required").min(2),
});

const EditTaskForm = ({ taskId, defaultValues }) => {
  const updateTaskMutation = useUpdateTaskMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(tasksSchema), defaultValues });

  const onSubmit = (task) => {
    updateTaskMutation.mutate({
      id: taskId,
      ...task,
    });
  };

  return (
    <div className="flex flex-col justify-between py-10 p-4 my-4 border border-slate-400 rounded-md bg-slate-900">
      <h1 className="text-2xl">Form with react-hook-form</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="flex flex-col text-slate-300">
          <label className="font-semibold">Title</label>
          <input
            autoComplete="off"
            placeholder="write your title"
            className="px-2 rounded-md text-black bg-slate-100"
            type="text"
            {...register("title")}
          />
          {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
        </div>
        <div className="flex flex-col text-slate-300">
          <label className="font-semibold">Description</label>
          <textarea
            rows="4"
            cols="30"
            autoComplete="off"
            className="px-2 h-12 rounded-md text-black bg-slate-100"
            type="text"
            {...register("description")}
            placeholder="write your task"
          ></textarea>
          {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
        </div>
        <button className="bg-violet-900 hover:bg-violet-600 rounded-md py-2" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default EditTaskForm;
