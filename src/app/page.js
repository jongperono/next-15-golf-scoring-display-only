import Image from "next/image";

export default function Home() {
  const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
  return (
    <div className="p-10">
      <h2>List of Names and scoring totals</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
