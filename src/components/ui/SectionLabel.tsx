interface SectionLabelProps {
  children: React.ReactNode;
  color?: string;
}

export function SectionLabel({ children, color = "text-ser-purple-light" }: SectionLabelProps) {
  return (
    <span className={`text-sm font-semibold tracking-widest uppercase ${color}`}>
      {children}
    </span>
  );
}
