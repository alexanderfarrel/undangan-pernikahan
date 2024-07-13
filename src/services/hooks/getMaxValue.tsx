export default function getMaxValue({
  minScreenWidth,
  maxScreenWidth,
  minValue,
  maxValue,
}: {
  minScreenWidth: number;
  maxScreenWidth: number;
  minValue: number;
  maxValue: number;
}) {
  const windowWidth = window.innerWidth;
  if (windowWidth <= minScreenWidth) {
    return maxValue;
  } else if (windowWidth >= maxScreenWidth) {
    return minValue;
  } else {
    const result =
      maxValue -
      ((windowWidth - minScreenWidth) * (maxValue - minValue)) /
        (maxScreenWidth - minScreenWidth);
    return result;
  }
}
