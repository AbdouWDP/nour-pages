import FirstPageTable from "./FirstPageTable";

function MiddleContent() {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <p>Lieber Thomas Wolf,</p>
      </div>
      <div>
        <p>
          in der Anlage ist die Provisionsabrechnung gemäß der individuellen
          Provisionsstufe.
        </p>
      </div>
      <div>
        <FirstPageTable />
      </div>
      <div>
        <p>
          Die Details zur Abrechnung befinden sich auf den folgenden Seiten.
        </p>
      </div>
      <div>
        <p>
          Wir bitten darum, die Abrechnung sofort nach Erhalt auf Ihre
          Richtigkeit zu überprüfen.
        </p>
        <p>
          Wird binnen zwei Wochen (ab Erstelldatum) gegen diese Abrechnung kein
        </p>
        <p>Widerspruch erhoben, so gilt diese als anerkannt.</p>
      </div>
      <div>
        <p>Viel Erfolg und weiterhin eine gute Zusammenarbeit.</p>
      </div>
    </section>
  );
}

export default MiddleContent;
