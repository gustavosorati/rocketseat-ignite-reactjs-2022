import ContentLoader from "react-content-loader";

type SkeletonProps = {
  w: number;
  h: number;
  className?: string;
}

export function Skeleton({w, h, className, ...rest}: SkeletonProps) {
  return (
    <ContentLoader
      speed={2}
      width={w}
      height={h}
      backgroundColor="#171718"
      foregroundColor="#202024"
      className={className}
      {...rest}
    >
      <rect x="3" ry="3" width={w} height={h} />

    </ContentLoader>
  )
}

