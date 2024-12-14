import { useLoaderData } from "react-router-dom";

export default function Phone() {
  const phone = useLoaderData();
  return (
    <div>
      <h2>Phone: {phone.name}</h2>
      <img src={phone.image} />
    </div>
  );
}
