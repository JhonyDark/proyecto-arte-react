import { RiShareForwardFill } from "react-icons/ri";
import Clock from "./components/clock";
import Personaje from "./components/Personaje";

const Home = () => {


  return (
    <main className="lg:pl-56 px-8 pt-36 lg:pt-24">
      <div className="grid lg:grid-cols-6 mb-6">
        <div className="col-span-6 relative rounded-lg">
          <img
            className="w-full h-[500px] object-cover rounded-xl shadow-md shadow-btnprimary"
            src="https://cdn.leonardo.ai/users/f08903b3-0e97-4279-b4c2-013115ca448e/generations/a570299f-6d7e-4d09-917d-2dba459c8f7c/variations/Default_A_beautiful_female_bikini_goddess_ancient_greece_with_0_a570299f-6d7e-4d09-917d-2dba459c8f7c_1.jpg"
            alt=""
          />
          <div className="absolute top-0 right-0">
            <Clock />
          </div>
          <div className="absolute left-4 bottom-10  p-8 max-w-xl rounded-2xl">
            <p className="text-btnprimary ">Greece</p>
            <h2 className="text-gray-200 font-extrabold capitalize text-2xl	mb-4">
              Encuentra la armonía y la perfección de la belleza atemporal del
              arte griego
            </h2>
            <button className="bg-btnprimary text-white py-4 px-6 rounded-xl flex items-center gap-1 text-lg hover:bg-btnsecondary group">
              MAS
              <RiShareForwardFill className="group-hover:translate-x-2 transition-all" />
            </button>
          </div>
        </div>
      </div>

      {/* personajes */}
      <div className="grid gap-5 lg:gap-0 lg:grid-cols-5">
        <div className="px-4">
          <Personaje
            title="Sócrates"
            text="Fue el filósofo por excelencia de este período. Aunque no se conserva ningún legado escrito de su puño y letra, su pensamiento ha quedado recogido en textos divulgados por uno de sus discípulos más fieles, Platon."
            textLink="Mas"
            link="https://eacnur.org/blog/los-personajes-griegos-mas-famosos-la-antiguedad-tc_alt45664n_o_pstn_o_pst/"
            imageUrl="https://cdn.leonardo.ai/users/c23f17cb-36af-4598-ad93-2b48c36b04da/generations/330dcd90-8cb7-4fbd-aff1-0a5761c5d1c7/Leonardo_Diffusion_socrates_white_hair_character_portrait_real_0.jpg"
            className="w-full h-52"
          />
        </div>
        <div className="px-4">
          <Personaje
            title="Pitágoras"
            text="Mezcló como ningún otro pensador de su tiempo la filosofía y los números. De hecho, adquirió fama tras fundar la escuela pitagórica y realizar importantes contribuciones a las matemáticas, entre ellas varios axiomas y teoremas."
            textLink="Mas"
            link="https://eacnur.org/blog/los-personajes-griegos-mas-famosos-la-antiguedad-tc_alt45664n_o_pstn_o_pst/"
            imageUrl="https://cdn.leonardo.ai/users/569cee68-29f3-4894-aaef-bcb8bc1b3ff3/generations/c3add9d6-76e0-4aab-b579-e8278002395b/Leonardo_Diffusion_pythagoras_long_hair_white_hair_blue_eyewhi_3.jpg"
            className="w-full h-52"
          />
        </div>
        <div className="px-4">
          <Personaje
            title="Platón"
            text="Además de recopilar y difundir el pensamiento de su maestro Sócrates, Platón pasó a la historia por una extensa obra filosófica y, sobre todo, por ser el autor de la llamada teoría de las ideas."
            textLink="Mas"
            link="https://eacnur.org/blog/los-personajes-griegos-mas-famosos-la-antiguedad-tc_alt45664n_o_pstn_o_pst/"
            imageUrl="https://th.bing.com/th/id/OIG.vAbHfivTwk7Jy_1B0Zt2?pid=ImgGn"
            className="w-full h-52"
          />
        </div>
        <div className="px-4">
          <Personaje
            title="Alejandro Magno"
            text="Vivió en el último periodo de la Grecia antigua, cuando se incrementó la interacción con los pueblos de Oriente. De hecho, son famosas sus campañas hacia esta parte del mundo, donde se impuso a diversas culturas hasta llegar a India."
            textLink="Mas"
            link="https://eacnur.org/blog/los-personajes-griegos-mas-famosos-la-antiguedad-tc_alt45664n_o_pstn_o_pst/"
            imageUrl="https://cdn.leonardo.ai/users/09b4d5e0-a218-425c-9179-2e127e4b3b18/generations/b227fcac-94c1-4a6f-874f-1d526fa8efe5/Leonardo_Diffusion_Alexander_the_Great_real_full_pictures_0.jpg"
            className="w-full h-52"
          />
        </div>
        <div className="px-4">
          <Personaje
            title="Pericles"
            text="Le correspondió gobernar Atenas —centro neurálgico de la cultura griega— en el momento de máximo esplendor de la cultura griega. Orador y político, a él se debe gran parte del concepto de democracia."
            textLink="Mas"
            link="https://eacnur.org/blog/los-personajes-griegos-mas-famosos-la-antiguedad-tc_alt45664n_o_pstn_o_pst/"
            imageUrl="https://th.bing.com/th/id/OIG.BJxhN7.U3sJwtusUXouD?pid=ImgGn"
            className="w-full h-52"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
