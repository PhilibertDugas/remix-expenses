interface Title {
  title: string;
}
export default function Header(props: Title) {
  return (
    <h1 className="text-3xl font-bold underline p-4 text-white">
      {props.title}
    </h1>
  );
}
