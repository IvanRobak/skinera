'use client';

import { signIn } from 'next-auth/react';
import { Suspense, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiAlertCircle } from 'react-icons/fi';
import { SignInSchema } from '@/scripts/zod-schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isNewlyRegistered = searchParams.get('registered') === 'true';
  const shownRef = useRef(false);

  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(SignInSchema)
  });

  useEffect(() => {
    if (isNewlyRegistered && !shownRef.current) {
      toast.success('Вітаємо, Ви усішно створили аккаунт!', {
        position: 'top-right',
        autoClose: 2500,
      });
      shownRef.current = true;
    }
  }, [isNewlyRegistered]);


  const onSubmit: SubmitHandler<SignInSchema> = async (data) => {
    try {
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (!res?.ok) {
        setError('root', { message: "Неправельний логін або пароль. Спробуйте ще раз" });

        return;
      }
      router.push('/?login=success');
    } catch (err) {
        console.error("Error sign in user", err)
    }
  };

  useEffect(() => {
    if (errors.root) {
      toast.error(`${errors.root?.message}`, {
        position: 'top-right',
        autoClose: 2500,
      });
    }
  }, [errors.root]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Увійти до аккаунту
          </h2>

        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 -space-y-px">
            <div>
               <label htmlFor="email" className="text-xs font-semibold">
                Email*
              </label>
            <input
                id="email"
                type="email"
                className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-grayCustom text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Введіть свій email"
                {...register("email")}
              />
              {errors.email &&
                <div className="text-red-500 text-sm flex items-center gap-2 mt-3">
                  <FiAlertCircle />
                  {errors.email.message}
                </div>
              }
            </div>
            <div>
               <label htmlFor="password" className="text-xs font-semibold">
                Пароль*
              </label>
              <input
                id="password"
                type="password"
                className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-grayCustom text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Введіть пароль"
                {...register('password')}
              />
                <p className='text-[10px] text-grayCustom mt-1'>Має бути щонайменше 8 символів</p>
              {errors.password &&
                <div className="text-red-500 text-sm flex items-center gap-2 mt-3">
                  <FiAlertCircle />
                  {errors.password.message}
                </div>
              }
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-semibold rounded-2xl text-white bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Вхід в аккаунт...' : 'Вхід'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function SignIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInForm />
    </Suspense>
  );
}