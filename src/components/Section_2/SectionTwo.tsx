import { useStateContext } from "../../context/StateContext";
import "./SectionTwo.scss";

export default function Section_two() {
  const { sectionTwoRef } = useStateContext();

  return (
    <section
      id="section_2"
      ref={sectionTwoRef}
      className="section_2 w-full flex justify-center items-center flex-col"
    >
      <div className="section_1_warpper w-full flex justify-center text-center">
        <div className="card_container w-11/12 flex justify-evenly items-center">
          <div className="card w-80 mr-3 ml-3 relative">
            <h1 className="w-full pt-2 pb-2 font-bold text-xl">Sample</h1>
            <p className="h-full flex justify-center items-center flex-col">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              architecto unde neque doloremque! Inventore, dicta illo molestias
              eum vel sunt totam mollitia reprehenderit voluptate eos suscipit
              aliquid tenetur, dolores neque!
            </p>
          </div>
          <div className="card w-80 mr-3 ml-3 relative">
            <h1 className="w-full pt-2 pb-2 font-bold text-xl">Sample</h1>
            <p className="h-full flex justify-center items-center flex-col">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              architecto unde neque doloremque! Inventore, dicta illo molestias
              eum vel sunt totam mollitia reprehenderit voluptate eos suscipit
              aliquid tenetur, dolores neque!
            </p>
          </div>
          <div className="card w-80 mr-3 ml-3 relative">
            <h1 className="w-full pt-2 pb-2 font-bold text-xl">Sample</h1>
            <p className="h-full flex justify-center items-center flex-col">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              architecto unde neque doloremque! Inventore, dicta illo molestias
              eum vel sunt totam mollitia reprehenderit voluptate eos suscipit
              aliquid tenetur, dolores neque!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
