import { LucideProps } from "lucide-react";
import { lazy, Suspense } from "react";

interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
}

const Icon = ({ name, fallback = "CircleAlert", ...props }: IconProps) => {
  const LucideIcon = lazy(() =>
    import("lucide-react")
      .then((module) => ({
        default:
          module[name as keyof typeof module] ||
          module[fallback as keyof typeof module],
      }))
      .catch(() =>
        import("lucide-react").then((module) => ({
          default: module.CircleAlert,
        })),
      ),
  );

  return (
    <Suspense
      fallback={
        <div style={{ width: props.size || 24, height: props.size || 24 }} />
      }
    >
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default Icon;
