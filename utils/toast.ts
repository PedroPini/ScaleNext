'use client';
import { PostgrestError } from '@supabase/supabase-js';
import toast from 'react-hot-toast';
type ToastError = Error | PostgrestError | null;
export const handleToast = (error: ToastError, successMessage: string): boolean => {
  if (error) {
    toast.error(error.message);
    return false;
  } else {
    toast.success(successMessage);
    return true;
  }
};