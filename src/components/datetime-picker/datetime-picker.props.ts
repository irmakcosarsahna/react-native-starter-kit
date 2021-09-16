export interface DateTimePickerProps {
  label?: string;
  error?: string;
  onChange?(date: string): void;
  placeholder?: string;
  containerStyle?: object;
  format?: string;
  callbackFormat?: string;
  dateTimeProps?: object;
}
