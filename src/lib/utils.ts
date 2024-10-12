export const convertData = (value: string) => {
  const date = new Date(value);
  const weekday = date.toLocaleDateString("fa-Ir", { weekday: "long" });
  const day = date.toLocaleDateString("fa-Ir", { day: "numeric" });
  const year = date.toLocaleDateString("fa-Ir", { year: "numeric" });
  const month = date.toLocaleDateString("fa-Ir", { month: "long" });

  return `${weekday}, ${day} ${month} ${year}`;
};
export const truncateText = (text: string, length: number) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};

export const getImageUrl = (url: string) => {
  return `${process.env.NEXT_PUBLIC_API_BASE_URL}/${url}`;
};
