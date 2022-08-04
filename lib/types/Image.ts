export type ImageStyleProps = {
  resizeMode: "cover" | "contain" | "stretch" | "repeat" | "center";
  backfaceVisibility: "visible" | "hidden";
};

export const getImageStyleProps = ({
  backfaceVisibility,
  resizeMode,
}: Partial<ImageStyleProps>) => ({
  resizeMode: resizeMode || "cover",
  backfaceVisibility: backfaceVisibility || "visible",
});
