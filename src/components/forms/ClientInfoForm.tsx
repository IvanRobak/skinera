import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { ClientInfoFormFields, ClientInfoFormSchema } from '@/scripts/zod-schemas';
import { IMaskInput } from 'react-imask';

const ClientInfoForm = ({
  setFirstCurrentStep,
}: {
  setFirstCurrentStep: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    setError,
    clearErrors,
  } = useForm<ClientInfoFormFields>({
    resolver: zodResolver(ClientInfoFormSchema),
    shouldFocusError: false,
    defaultValues: {
      name: '',
      surname: '',
      number: '',
      email: '',
    },
    mode: 'onBlur', // validate only when leaving the input
    reValidateMode: 'onBlur',
  });

  const name = watch('name');
  const surname = watch('surname');
  const number = watch('number');
  const email = watch('email');

  const onSubmit: SubmitHandler<ClientInfoFormFields> = () => {
    try {
      setFirstCurrentStep(false);
    } catch (err) {
      console.error('Error creating new user', err);
    }
  };
  return (
    <div>
      {' '}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="flex flex-col gap-8 md:gap-12 w-full md:w-[50%]">
            <div>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  placeholder=" "
                  className="peer w-full border-0 border-b border-[#ebebeb] p-0 focus:outline-none focus:border-b focus:border-[#ebebeb] focus:ring-0 focus:shadow-none"
                  {...register('name')}
                />

                <label
                  htmlFor="name"
                  className={`absolute text-gray-400 pointer-events-none transition-all duration-200
                                                  peer-focus:-top-6 peer-focus:text-[13px]
                                                   ${
                                                     name
                                                       ? '-top-6 left-0 text-[13px]'
                                                       : ' top-0 left-0 text-sm'
                                                   }
                                                  `}
                >
                  Ваше Ім&apos;я*
                </label>

                <span
                  className={`absolute left-0 bottom-0 h-[1px] w-0 ${
                    errors.name ? 'bg-red-500 w-full' : 'bg-purple-600'
                  }
                                                        transition-all duration-500 ease-in-out 
                                                        origin-left peer-focus:w-full z-10`}
                ></span>
              </div>
              <p
                aria-live="polite"
                className={`text-red-500 text-xs font-semibold h-4 mt-1 transition-all duration-200 ${
                  errors.name ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                }`}
              >
                {errors.name?.message ?? '\u00A0'}
              </p>
            </div>

            <div>
              <div className="relative">
                <input
                  id="surname"
                  type="text"
                  placeholder=" "
                  className="peer w-full border-0 border-b border-[#ebebeb] p-0 focus:outline-none focus:border-b focus:border-[#ebebeb] focus:ring-0 focus:shadow-none"
                  {...register('surname')}
                />
                <label
                  htmlFor="surname"
                  className={`absolute text-gray-400 pointer-events-none transition-all duration-200
                                                  peer-focus:-top-6 peer-focus:text-[13px]
                                                   ${
                                                     surname
                                                       ? '-top-6 left-0 text-[13px]'
                                                       : ' top-0 left-0 text-sm'
                                                   }
                                                  `}
                >
                  Ваше Прізвище*
                </label>
                <span
                  className={`absolute left-0 bottom-0 h-[1px] w-0 ${
                    errors.surname ? 'bg-red-500 w-full' : 'bg-purple-600'
                  }
                                                        transition-all duration-500 ease-in-out 
                                                        origin-left peer-focus-within:w-full z-10`}
                ></span>
              </div>
              <p
                aria-live="polite"
                className={`text-red-500 text-xs font-semibold h-4 mt-1 transition-all duration-200 ${
                  errors.surname ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                }`}
              >
                {errors.surname?.message ?? '\u00A0'}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-12 w-full md:w-[50%]">
            <div>
              <div className="relative">
                <Controller
                  name="number"
                  control={control}
                  render={({ field }) => (
                    <IMaskInput
                      mask="+{38} (000) 000 00 00"
                      lazy={!isPhoneFocused}
                      placeholderChar="_"
                      value={field.value ?? ''}
                      onAccept={(value: string) => field.onChange(value)}
                      onComplete={() => {
                        clearErrors('number');
                      }}
                      onFocus={() => setIsPhoneFocused(true)}
                      onBlur={e => {
                        const raw = (e.target as HTMLInputElement).value || '';
                        const digits = raw.replace(/\D/g, '');
                        const rest = digits.startsWith('38') ? digits.slice(2) : digits;
                        if (rest.length === 0) {
                          field.onChange('');
                          clearErrors('number');
                        } else if (rest.length < 10) {
                          setError('number', {
                            type: 'manual',
                            message: 'Неправильний формат телефону',
                          });
                        } else {
                          clearErrors('number');
                        }
                        setIsPhoneFocused(false);
                        field.onBlur();
                      }}
                      inputMode="tel"
                      id="number"
                      placeholder=" "
                      className="peer w-full border-0 border-b border-[#ebebeb] p-0 focus:outline-none focus:border-b focus:border-[#ebebeb] focus:ring-0 focus:shadow-none"
                    />
                  )}
                />
                <label
                  htmlFor="number"
                  className={`absolute text-gray-400 pointer-events-none transition-all duration-200
                                                  peer-focus:-top-6 peer-focus:text-[13px] ${
                                                    number
                                                      ? '-top-6 left-0 text-[13px]'
                                                      : ' top-0 left-0 text-sm'
                                                  }`}
                >
                  Телефон*
                </label>
                <span
                  className={`absolute left-0 bottom-0 h-[1px] w-0 ${
                    errors.number ? 'bg-red-500 w-full' : 'bg-purple-600'
                  }
                                                        transition-all duration-500 ease-in-out 
                                                        origin-left peer-focus-within:w-full z-10`}
                ></span>
              </div>
              <p
                aria-live="polite"
                className={`text-red-500 text-xs font-semibold h-4 mt-1 transition-all duration-200 ${
                  errors.number ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                }`}
              >
                {errors.number?.message ?? '\u00A0'}
              </p>
            </div>
            <div>
              <div className="relative ">
                <input
                  type="text"
                  id="email"
                  placeholder=" "
                  className="peer w-full border-0 border-b border-[#ebebeb] p-0 focus:outline-none focus:border-b focus:border-[#ebebeb] focus:ring-0 focus:shadow-none autofill:outline-none"
                  {...register('email')}
                />
                <label
                  htmlFor="email"
                  className={`absolute text-gray-400 pointer-events-none transition-all duration-200
                                                  peer-focus:-top-6 peer-focus:text-[13px] ${
                                                    email
                                                      ? '-top-6 left-0 text-[13px]'
                                                      : ' top-0 left-0 text-sm'
                                                  }`}
                >
                  E-mail*
                </label>
                <span
                  className={`absolute left-0 bottom-0 h-[1px] w-0 ${
                    errors.email ? 'bg-red-500 w-full' : 'bg-purple-600'
                  }
                                                        transition-all duration-500 ease-in-out 
                                                        origin-left peer-focus-within:w-full z-10`}
                ></span>
              </div>
              <p
                aria-live="polite"
                className={`text-red-500 text-xs font-semibold h-4 mt-1 transition-all duration-200 ${
                  errors.email ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                }`}
              >
                {errors.email?.message ?? '\u00A0'}
              </p>
            </div>
            <button
              type="submit"
              className="text-white bg-black min-h-12 hover:bg-gray-900 w-full md:w-auto px-6 py-3 text-sm md:text-base transition-colors"
            >
              Далі
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClientInfoForm;
