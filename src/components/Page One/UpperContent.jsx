function UpperContent() {
  return (
    <>
      <section className="address py-16 leading-tight">
        <p>Herr Thomas Wolf</p>
        <p>Musterstr. 123</p>
        <p>12345 Musterstadt</p>
      </section>
      <section className="location text-end">
        <p>Frankfurt am Main, 30.08.2024</p>
      </section>
      <section className="py-8 leading-tight">
        <p className="font-bold">
          Provisionsabrechnung für den Zeitraum 21.05.2024 - 16.08.2024
        </p>
        <p>Abrechnungsnummer: QVP-240001</p>
        <p>Deine Steuernummer lautet: 123/456/7891011</p>
      </section>
    </>
  );
}

export default UpperContent;
