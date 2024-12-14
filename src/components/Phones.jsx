import { Link, useLoaderData } from "react-router-dom";

export default function Phones() {
  const phones = useLoaderData();
  return (
    <div>
      Phones: {phones.length}
      {phones.map((phone) => (
        <li key={phone.id}>
          <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
        </li>
      ))}
    </div>
  );
}
