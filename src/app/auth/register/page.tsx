'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { RegisterSchema, RegisterFields } from '@/scripts/zod-schemas';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiAlertCircle } from "react-icons/fi";
import { toast } from 'react-toastify';



export default function Register() {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(RegisterSchema)
  });

  const router = useRouter();
  const onSubmit: SubmitHandler<RegisterFields> = async (formData) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      console.log("Response:", res);
      const data = await res.json();
      console.log("Data", data);
      // if (data.error) {
      //   setError('root', { message: data.error || "Помилка під час створення аккаунту. Будь ласка, спробуйте пізніше" });
      //   return;
      // }

      // router.push('/auth/signin');
    } catch (err) {
      console.error("Error creating new user", err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {errors.root &&
        toast.error(`${errors.root?.message}`, {
          position: 'top-right',
          autoClose: 2500,
        })
      }
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Реєстрація
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Вже зареєстровані?{' '}
            <Link href="/auth/signin" className="font-medium text-purple-600 hover:text-purple-500">
              Увійти
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Ім'я
              </label>
              <input
                id="name"
                type="text"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Ім'я"
                {...register("name")}
              />
              {errors.email &&
                <div className="text-red-500 text-sm flex items-center gap-2 mt-3">
                  <FiAlertCircle />
                  {errors.email.message}
                </div>}
            </div>
            <div>
              <label htmlFor="surnname" className="sr-only">
                Прізвище
              </label>
              <input
                id="surname"
                type="text"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Прізвище"
                {...register("surname")}
              />
              {errors.surname &&
                <div className="text-red-500 text-sm flex items-center gap-2 mt-3">
                  <FiAlertCircle /> {
                    errors.surname.message}
                </div>}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Електронна Адреса
              </label>
              <input
                id="email"
                type="email"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Введіть електронну адресу"
                {...register("email")}
              />
              {errors.email &&
                <div className="text-red-500 text-sm flex items-center gap-2 mt-3">
                  <FiAlertCircle />
                  {errors.email.message}
                </div>}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Пароль
              </label>
              <input
                id="password"
                type="password"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Введіть Пароль"
                {...register('password')}
              />
              {errors.password &&
                <div className="text-red-500 text-sm flex items-center gap-2 mt-3">
                  <FiAlertCircle />
                  {errors.password.message}
                </div>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Створення аккаунту...' : 'Зареєструватись'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}