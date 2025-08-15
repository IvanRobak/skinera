'use client';

import { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'signin' | 'register';
  onSuccess?: () => void;
}

export default function AuthModal({
  isOpen,
  onClose,
  defaultTab = 'signin',
  onSuccess,
}: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<'signin' | 'register'>(defaultTab);
  const [isLoading, setIsLoading] = useState(false);

  // Form states
  const [signinData, setSigninData] = useState({
    email: '',
    password: '',
  });

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Reset form data when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
      setSigninData({ email: '', password: '' });
      setRegisterData({ name: '', email: '', password: '', confirmPassword: '' });
    }
  }, [isOpen, defaultTab]);

  // Also reset when modal closes to ensure clean state
  useEffect(() => {
    if (!isOpen) {
      setSigninData({ email: '', password: '' });
      setRegisterData({ name: '', email: '', password: '', confirmPassword: '' });
    }
  }, [isOpen]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        email: signinData.email,
        password: signinData.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error('Невірні дані для входу');
      } else {
        toast.success('Успішний вхід!');
        onSuccess?.();
        onClose();
      }
    } catch {
      toast.error('Помилка входу');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      toast.error('Паролі не співпадають');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: registerData.name,
          email: registerData.email,
          password: registerData.password,
        }),
      });

      if (response.ok) {
        toast.success('Акаунт створено! Входимо...');

        // Автоматично входимо після реєстрації
        const result = await signIn('credentials', {
          email: registerData.email,
          password: registerData.password,
          redirect: false,
        });

        if (result?.error) {
          toast.error('Помилка автоматичного входу');
        } else {
          onSuccess?.();
          onClose();
        }
      } else {
        const error = await response.json();
        toast.error(error.message || 'Помилка реєстрації');
      }
    } catch {
      toast.error('Помилка реєстрації');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={e => {
            e.stopPropagation();
            onClose();
          }}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="p-6 pb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activeTab === 'signin' ? 'Вхід до акаунту' : 'Створення акаунту'}
            </h2>
            <p className="text-gray-600 text-sm">
              {activeTab === 'signin'
                ? 'Увійдіть, щоб зберігати улюблені товари'
                : 'Створіть акаунт для збереження улюблених товарів'}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mx-6 mt-6">
            <button
              onClick={() => {
                setActiveTab('signin');
                setSigninData({ email: '', password: '' });
                setRegisterData({ name: '', email: '', password: '', confirmPassword: '' });
              }}
              className={`flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'signin'
                  ? 'border-brand-500 text-brand-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Вхід
            </button>
            <button
              onClick={() => {
                setActiveTab('register');
                setSigninData({ email: '', password: '' });
                setRegisterData({ name: '', email: '', password: '', confirmPassword: '' });
              }}
              className={`flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'register'
                  ? 'border-brand-500 text-brand-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Реєстрація
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'signin' ? (
              <form key="signin-form" onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <label
                    htmlFor="signin-email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="signin-email"
                    type="email"
                    required
                    value={signinData.email}
                    onChange={e => setSigninData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="signin-password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Пароль
                  </label>
                  <input
                    id="signin-password"
                    type="password"
                    required
                    value={signinData.password}
                    onChange={e => setSigninData(prev => ({ ...prev, password: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    autoComplete="current-password"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-brand-600 text-white py-3 px-4 rounded-lg hover:bg-brand-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Входимо...' : 'Увійти'}
                </button>
              </form>
            ) : (
              <form key="register-form" onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label
                    htmlFor="register-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Імʼя
                  </label>
                  <input
                    id="register-name"
                    type="text"
                    required
                    value={registerData.name}
                    onChange={e => setRegisterData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="register-email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="register-email"
                    type="email"
                    required
                    value={registerData.email}
                    onChange={e => setRegisterData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="register-password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Пароль
                  </label>
                  <input
                    id="register-password"
                    type="password"
                    required
                    value={registerData.password}
                    onChange={e => setRegisterData(prev => ({ ...prev, password: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    autoComplete="new-password"
                  />
                </div>

                <div>
                  <label
                    htmlFor="register-confirm-password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Підтвердження пароля
                  </label>
                  <input
                    id="register-confirm-password"
                    type="password"
                    required
                    value={registerData.confirmPassword}
                    onChange={e =>
                      setRegisterData(prev => ({ ...prev, confirmPassword: e.target.value }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    autoComplete="new-password"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-brand-600 text-white py-3 px-4 rounded-lg hover:bg-brand-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Створюємо акаунт...' : 'Створити акаунт'}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
