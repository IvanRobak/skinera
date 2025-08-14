'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { RegisterSchema, RegisterFields } from '@/scripts/zod-schemas';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiAlertCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterFields> = async formData => {
    try {
      console.log('🚀 Submitting registration form:', formData);

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      console.log('📡 Response status:', res.status);
      console.log('📡 Response headers:', res.headers);

      if (!res.ok) {
        // Try to parse JSON, but handle cases where response is not JSON
        let errorMessage = 'Щось пішло не так. Спробуйте ще раз.';
        try {
          const data = await res.json();
          errorMessage = data?.error || errorMessage;
        } catch (jsonError) {
          console.error('Failed to parse error response as JSON:', jsonError);
          errorMessage = `Server error: ${res.status} ${res.statusText}`;
        }

        setError('root', { message: errorMessage });
        return;
      }

      // Try to parse success response
      try {
        const data = await res.json();
        console.log('✅ Registration successful:', data);
        router.push('/auth/signin/?registered=true');
      } catch (jsonError) {
        console.error('Failed to parse success response as JSON:', jsonError);
        // If we can't parse the response but status is ok, consider it success
        router.push('/auth/signin/?registered=true');
      }
    } catch (err) {
      console.error('Error creating new user', err);
      setError('root', {
        message: 'Помилка мережі. Перевірте підключення до інтернету.',
      });
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

  console.log(errors);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Створити свій аканут
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 -space-y-px">
            <div>
              <label htmlFor="name" className="text-xs font-semibold">
                Ім&apos;я*
              </label>
              <input
                id="name"
                type="text"
                className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-grayCustom text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Введіть своє ім'я"
                {...register('name')}
              />
              {errors.name && (
                <div className="text-red-500 text-sm flex items-center gap-2 mt-3">
                  <FiAlertCircle />
                  {errors.name.message}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-semibold">
                Email*
              </label>
              <input
                id="email"
                type="email"
                className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-grayCustom text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Введіть свій email"
                {...register('email')}
              />
              {errors.email && (
                <div className="text-red-500 text-sm flex items-center gap-2 mt-3">
                  <FiAlertCircle />
                  {errors.email.message}
                </div>
              )}
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
              <p className="text-[10px] text-grayCustom mt-1">Має бути щонайменше 8 символів</p>
              {errors.password && (
                <div className="text-red-500 text-sm flex items-center gap-2 mt-3">
                  <FiAlertCircle />
                  {errors.password.message}
                </div>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-semibold rounded-2xl text-white bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50"
              // disabled={isSubmitting || !isFormValid} Need to do
            >
              {isSubmitting ? 'Створення аккаунту...' : 'Створити акаунт'}
            </button>
            <p className="mt-6 text-center text-[10px] text-grayCustom font-bold">
              Вже маєте аканут?{' '}
              <Link href="/auth/signin" className="text-brand-600 hover:text-brand-500">
                Увійти
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
