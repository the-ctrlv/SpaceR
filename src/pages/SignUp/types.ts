import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormTrigger,
  UseFormWatch,
} from 'react-hook-form';

export type FormValues = {
  next: () => void;
  currentStepIndex: number;
  trigger: UseFormTrigger<FieldValues>;
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
  watch?: UseFormWatch<FieldValues>;
  currentValues: { [key: string]: string };
};
