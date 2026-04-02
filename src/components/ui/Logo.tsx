import Image from "next/image";

export function Logo({
  variant = "white",
  showText = true,
  size = 32,
  className,
}: {
  variant?: "white" | "purple";
  showText?: boolean;
  size?: number;
  className?: string;
}) {
  const src =
    variant === "white"
      ? "/images/logo-white.png"
      : "/images/logo-small-purple.png";

  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <Image
        src={src}
        alt="SER"
        width={size}
        height={size}
        className="object-contain"
      />
      {showText && (
        <span
          className={`text-2xl font-bold ${
            variant === "white" ? "text-white" : "text-ser-purple"
          }`}
        >
          SER
        </span>
      )}
    </div>
  );
}

export function AppIcon({
  size = 48,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/images/app-icon.png"
      alt="SER App"
      width={size}
      height={size}
      className={`rounded-xl ${className ?? ""}`}
    />
  );
}
