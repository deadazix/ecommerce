import { imagesPath } from "../constants/pathes";

export const getImagesPath = (
  imageId: string,
  imageCount: number,
  size: "sm" | "lg"
) => {
  const initialArray = Array(imageCount).fill("a");
  return initialArray.map((el, index) => {
    return `${imagesPath}/${imageId}-${(index + 1).toString()}-${size}.jpg`;
  });
};
