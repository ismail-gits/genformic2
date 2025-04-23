type FieldOption = {
  label: string;
  value: string;
};

type Field = {
  name: string;
  type:
    | "text"
    | "email"
    | "tel"
    | "url"
    | "select"
    | "textarea"
    | "number"
    | "password"
    | "checkbox"
    | "radio"
    | "date"
    | "file"
    | "range"
    | "color"
    | "datetime-local"
    | "month"
    | "week";
  label: string;
  placeholder: string;
  options?: FieldOption[];
};

type GetFormType = {
  title: string;
  subheading: string;
  fields: Field[];
};