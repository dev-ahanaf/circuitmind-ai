export interface SymbolProps {
  id: string;
  label?: string;
  value?: string;
  selected?: boolean;
  hovered?: boolean;
  onSelect?: () => void;
}
