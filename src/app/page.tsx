import { MenuPageApiResponse } from "../interfaces/menuPageApiResponse.interface";
import MenuPage from "./menuPage";


async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apis/pages/menu`, {
    cache: "no-store", // 👈 ensures fresh data (SSR)
  });

  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export default async function Home() {
  const pageData: MenuPageApiResponse = await getData();
  return (
    <MenuPage data={pageData}/>
  );
}
