import type { LoginForm, RegisterForm } from '@/types/AuthForm'
import type { AuthError } from '@supabase/supabase-js'
import { ref } from 'vue'

type FormErrors<T> = {
  [K in keyof T]: string[]
}

export const useFormErrors = () => {
  const serverError = ref('')
  const realtimeErrors = ref<FormErrors<LoginForm | RegisterForm>>()

  const handleServerError = (error: AuthError) => {
    serverError.value = error.message
  }

  const handleLoginForm = async (formData: LoginForm) => {
    realtimeErrors.value = {
      email: [],
      password: [],
    }

    const { validateEmail, validatePassword } = await import('@/utils/formValidations')
    const emailErrors = validateEmail(formData.email)
    if (emailErrors.length) realtimeErrors.value.email = emailErrors

    const passwordErrors = validatePassword(formData.password)
    if (passwordErrors.length) realtimeErrors.value.password = passwordErrors
  }

  return {
    serverError,
    handleServerError,
    handleLoginForm,
    realtimeErrors,
  }
}
