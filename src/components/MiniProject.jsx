import PropTypes from "prop-types";

const MiniProject = () => {
  return (
    <>
      <section className="bg-white pb-10 pt-20 flex justify-center">
        <div className="container w-full h-screen">
          <div className="grid grid-cols-3 gap-16">
            <SingleCard
              image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
              CardTitle="To Do List App"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="Learn more"
              btnHref="https://github.com/Voltran1c/MiniProject_ToDoList.git"
            />
            <SingleCard
              image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
              CardTitle="URL Shortening Landing Page"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="Learn more"
            />
            <SingleCard
              image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
              CardTitle="Rock, Paper, Scissors Game"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="Learn more"
            />
            <SingleCard
              image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
              CardTitle="Build a Calculator"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="Learn more"
            />
            <SingleCard
              image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
              CardTitle="REST Countries API with Color theme Switcher"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="Learn more"
            />
            <SingleCard
              image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
              CardTitle="Calendar Viewer Component"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="Learn more"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      <div className="mb-10 overflow-hidden rounded-lg border-slate-200 duration-300 border hover:shadow-lg">
        <img src={image} alt="" className="w-full saturate-200" />
        <div className="p-8 text-center">
          <h3>
            <a
              href={titleHref ? titleHref : "#"}
              className="mb-4 block text-xl font-semibold hover:text-black sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed">{CardDescription}</p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border hover:bg-gray-800 hover:text-white px-7 py-2 text-base font-medium transition"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
    </>
  );
};

SingleCard.propTypes = {
  image: PropTypes.string.isRequired,
  Button: PropTypes.node.isRequired,
  CardDescription: PropTypes.string.isRequired,
  CardTitle: PropTypes.string.isRequired,
  titleHref: PropTypes.string,
  btnHref: PropTypes.string,
};

export default MiniProject;
