export default function JewelleryPreference() {
  return (
    <div className="w-full flex flex-col gap-[25px]">
      <div className="flex flex-col gap-[10px] border-b-2 border-solid border-[#C0C0C0] pb-[24px]">
        <p>Natural Gemstone Quality </p>
        <div className="flex justify-around w-[90%] m-auto">
          <div className="p-[10px] text-center  flex flex-col justify-center items-center flex flex-col border rounded shadow-[0_0_2px_2px_rgba(0,0,0,0.3)]">
            <img
              className="p-[5px]"
              src="https://assets.angara.com/catalog/product/AQ-Round-Faceted-A.png?width=50"
            ></img>
            <p>Good</p>
          </div>
          <div className="p-[10px] text-center flex flex-col justify-center items-center">
            <img
              className="p-[5px]"
              src="https://assets.angara.com/catalog/product/AQ-Round-Faceted-AA.png?width=50"
            ></img>
            <p>Better</p>
          </div>
          <div className="p-[10px] text-center flex flex-col justify-center items-center">
            <img
              className="p-[5px]"
              src="https://assets.angara.com/catalog/product/AQ-Round-Faceted-AAA.png?width=50"
            ></img>
            <p>Best</p>
          </div>
          <div className="p-[10px] text-center flex flex-col justify-center items-center">
            <img
              className="p-[5px]"
              src="https://assets.angara.com/catalog/product/AQ-Round-Faceted-AAAA.png?width=50"
            ></img>
            <p>Heirloom</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] border-b-2 border-solid border-[#C0C0C0] pb-[24px] ">
      <p>Total Carat Weight </p>
        <div className="flex justify-around w-[90%] m-auto">
          <div className="p-[10px] text-center flex flex-col justify-center items-center">
            <img
              className="p-[5px]"
              src="https://assets.angara.com/ring/sr1912aqd/5mm-aaa-aquamarine-white-gold-rose-gold-ring.jpg?width=50"
            ></img>
            <p>0.60 carrat</p>
          </div>
          <div className="p-[10px] text-center flex flex-col justify-center items-center">
            <img
              className="p-[5px]"
              src="https://assets.angara.com/ring/sr1912aqd/6mm-aaa-aquamarine-white-gold-rose-gold-ring.jpg?width=50"
            ></img>
            <p>0.99 carrat</p>
          </div>
          <div className="p-[10px] text-center flex flex-col justify-center items-center">
            <img
              className="p-[5px]"
              src="https://assets.angara.com/ring/sr1912aqd/6mm-aaa-aquamarine-white-gold-rose-gold-ring.jpg?width=50"
            ></img>
            <p>1.50 carrat</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]  border-solid border-[#C0C0C0] pb-[24px] ">
      <p>Metal type </p>
        <div className="flex justify-around w-[90%] m-auto">
          <div className="p-[10px] text-center flex flex-col justify-center items-center">
            <img
              className="p-[5px]"
              src="https://assets.angara.com/catalog/product/metal/14k-rose-gold.png?width=50"
            ></img>
            <p>Rose gold</p>
          </div>
          <div className="p-[10px] text-center flex flex-col justify-center items-center">
            <img
              className="p-[5px]"
              src="https://assets.angara.com/catalog/product/metal/14k-white-&-rose-gold.png?width=50"
            ></img>
            <p>White & Rose gold</p>
          </div>
          <div className="p-[10px] text-center flex flex-col justify-center items-center">
            <img
              className="p-[5px]"
              src="https://assets.angara.com/catalog/product/metal/14k-yellow-gold.png?width=50"
            ></img>
            <p>Yellow gold</p>
          </div>
        </div>
      </div>
    </div>
  );
}
