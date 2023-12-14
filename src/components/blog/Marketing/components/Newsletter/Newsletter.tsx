"use client";

import { useForm } from "react-hook-form";

type FormData = {
  email: string;
};

function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
    // showAlert({
    //   open: true,
    //   primary: 'Newsletter',
    //   secondary: 'You have successfully signed up to receive the newsletter.',
    //   type: 'info',
    // });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-4">
        <div>
          <input
            className="w-full rounded-full border border-gray-600 p-4 focus:outline-none"
            type="text"
            placeholder="Email Address"
            id="email"
            {...register("email", {
              required: "required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
        </div>
        <div>
          {errors.email && (
            <p className="text-xs italic text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="pt-4">
        <button className="btn btn-primary expand text-white" type="submit">
          Sign Up For Free
        </button>
      </div>
    </form>
  );
}

export default function Newsletter() {
  return (
    <section className="page md:py-32">
      <div className="paper-form text-center">
        <h3>Free Exclusive Access</h3>
        <p className="py-6 text-xl">
          Get free access to exclusive <strong>tips and tricks</strong> to level
          up your development skills not available anywhere else on this
          website.
        </p>
        <p className="py-4 text-base">
          You will receive a welcome email shortly.
        </p>
        <Form />
      </div>
    </section>
  );
}
