import {
  type FieldValues,
  type UseControllerProps,
  useController,
} from "react-hook-form";
import { cn } from "@/lib/utils";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { InputGroup, InputGroupInput } from "../ui/input-group";
import { NumberInput } from "../ui/number-input";

interface InputFieldProps extends React.ComponentProps<"input"> {
  label?: string;
  children?: React.ReactNode;
}

export default function InputField<T extends FieldValues>({
  label,
  children,
  type,
  ...props
}: InputFieldProps & UseControllerProps<T>) {
  const { field, fieldState } = useController(props);

  return (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
      <InputGroup
        className={cn(
          "h-12 bg-muted rounded opacity-70",
          "has-[[data-slot=input-group-control]:focus-visible]:opacity-100",
        )}
      >
        {children}
        <InputGroupInput
          {...field}
          {...props}
          id={field.name}
          aria-invalid={fieldState.invalid}
          ref={field.ref}
          className=""
        />
      </InputGroup>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
}
