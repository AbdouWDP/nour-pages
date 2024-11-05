import bvb from "../assets/bvb.png";

function Navbar() {
  return (
    <header className="w-screen h-32 max-md:text-sm max-sm:text-xs">
      <div className="w-[90%] h-full mx-auto flex justify-between items-center">
        <div className="logo w-24 h-24">
          <img src={bvb} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="text-end leading-none max-md:leading-tight">
          <p>QonVent GmbH</p>
          <p>Friedrichstraße 47</p>
          <p>60323 Frankfurt am Main</p>
          <p>kontakt@qonvent.de</p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
