export function HeadTableRow({ title, start = true }) {
  return (
    <th
      className="font-semibold text-base border-r-2 border-black"
      style={{
        textAlign: start ? "start" : "end",
        paddingLeft: start && "0.5rem",
        paddingRight: !start && "0.5rem",
      }}
    >
      {title}
    </th>
  );
}

export function BodyTableRow({ body, start = true, width }) {
  return (
    <td
      className="border-r-2 border-black"
      style={{
        textAlign: start ? "start" : "end",
        paddingLeft: start && "0.5rem",
        paddingRight: !start && "0.5rem",
        fontWeight: !start && "700",
        width: `${(width / 12) * 100}%`,
      }}
    >
      {body}
    </td>
  );
}
