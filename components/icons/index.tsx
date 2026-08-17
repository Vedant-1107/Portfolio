import {HugeiconsIcon, type HugeiconsIconProps} from "@hugeicons/react";

type IconProps = HugeiconsIconProps;

export function Icon({
  size = 18,
  color = "currentColor",
  strokeWidth = 1.5,
  ...props
} : IconProps) {
  return (
    <HugeiconsIcon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
}