export interface SortModalProps {
  isVisible?: boolean;
  closeFn?(): void;
  onPress?(item: any): any;
  data?: any;
  value?: string;
}
