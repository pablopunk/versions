const packages = ["node"];

export default function Index() {
  return (
    <>
      {packages.map((p) => (
        <a href={"/api/" + p} key={p}>
          /{p}
        </a>
      ))}
    </>
  );
}
