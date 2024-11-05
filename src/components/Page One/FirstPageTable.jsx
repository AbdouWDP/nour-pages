function TableRow({ right, left, bold }) {
  return (
    <tr className="h-8">
      <td
        className="w-3/4 text-start border-t-2 border-r-2 border-black pl-2"
        style={{ fontWeight: bold ? "700" : "500" }}
      >
        {left}
      </td>
      <td
        className="w-1/4 border-t-2 border-black pr-2 text-end"
        style={{ fontWeight: bold ? "700" : "500" }}
      >
        {right}
      </td>
    </tr>
  );
}

function FirstPageTable() {
  return (
    <table className="w-3/4 max-md:w-full border-2 border-black">
      <thead>
        <tr className="h-8">
          <th className="w-3/4 text-start pl-2 border-r-2 border-black">
            Provisionskonto
          </th>
          <th className="w-1/4"></th>
        </tr>
      </thead>
      <tbody>
        <TableRow left="Stand 16.08.2024" right="7.200,00 €" />
        <TableRow left="19% USt." right="1.368,00 €" />
        <TableRow left="" right="" />
        <TableRow left="Auszahlungsbetrag" right="8.568,00 €" bold={true} />
      </tbody>
    </table>
  );
}

export default FirstPageTable;
