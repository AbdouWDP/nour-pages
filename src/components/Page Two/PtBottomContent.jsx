import { HeadTableRow, BodyTableRow } from "./tableRows";

function PtBottomContent() {
  return (
    <div className="w-full">
      <table className="w-full border-2 border-black">
        <thead className="">
          <tr className="border-r-2 border-black">
            <HeadTableRow title="Lfd.Nr." />
            <HeadTableRow title="Käufer" />
            <HeadTableRow title="Artikel" />
            <HeadTableRow title="Umsatz (brutto)" />
            <HeadTableRow title="Datum" />
            <HeadTableRow title="Provision (Netto)" start={false} />
          </tr>
        </thead>
        <tbody>
          <tr className="border-2 border-black">
            <BodyTableRow body="1" width={1} />
            <BodyTableRow body="Torsten Test" width={2} />
            <BodyTableRow body="QonVerter Paket" width={3} />
            <BodyTableRow body="29.750,00 €" width={3} />
            <BodyTableRow body="21.05.24" width={1} />
            <BodyTableRow body="2.400,00 €" start={false} width={2} />
          </tr>
          <tr className="border-2 border-black">
            <BodyTableRow body="2" width={1} />
            <BodyTableRow body="Timo Nachname" width={2} />
            <BodyTableRow body="QonVerter Paket" width={3} />
            <BodyTableRow body="29.750,00 €" width={3} />
            <BodyTableRow body="01.07.24" width={1} />
            <BodyTableRow body="4.800,00 €" start={false} width={2} />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PtBottomContent;
