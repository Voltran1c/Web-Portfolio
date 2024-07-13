const posts = [
  {
    id: 1,
    title: "To Do List App",
    href: "https://mini-project-to-do-list-chi.vercel.app/",
    description:
      "A personal note-taking app that allows editing or deleting completed items and changing their status to complete or incomplete.",
    date: "Jun 16, 2024",
    datetime: "2024-06-16",
    category: { title: "React" },
    author: {
      name: "Learn more",
      href: "https://github.com/Voltran1c/MiniProject_ToDoList.git",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/1/1560.png",
    },
  },
  {
    id: 2,
    title: "Shopping Cart",
    href: "https://38-watcharapong-js.vercel.app/",
    description:
      "Develop a shopping cart page to add products, requiring product name, price, and image. Validate all inputs and calculate total product prices.",
    date: "May 24, 2024",
    datetime: "2024-05-24",
    category: { title: "JavaScript" },
    author: {
      name: "Learn more",
      href: "https://github.com/Voltran1c/38_Watcharapong-JS",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/027/381/351/original/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg",
    },
  },
  {
    id: 3,
    title: "Pokemon-API",
    href: "https://mini-project-fetch-pokemon-api.vercel.app/",
    description:
      "Use axios to send a GET request to the Pokemon API URL to fetch Pokemon data. Handle errors that occur during data retrieval by displaying the error.",
    date: "Jun 06, 2024",
    datetime: "2024-06-06",
    category: { title: "React" },
    author: {
      name: "Learn more",
      href: "https://github.com/Voltran1c/React-Pokemon-API",
      imageUrl:
        "https://cdn.icon-icons.com/icons2/1898/PNG/512/pokemon_121114.png",
    },
  },
  {
    id: 4,
    title: "Build a Calculator",
    href: "#",
    description:
      "Ability to perform basic calculations such as addition, subtraction, multiplication, division, and possibly additional features like exponentiation, with a user-friendly display.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "React" },
    author: {
      name: "Learn more",
      href: "#",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/002/205/856/small_2x/calculator-icon-free-vector.jpg",
    },
  },
  {
    id: 5,
    title: "REST Countries API with Color theme Switcher",
    href: "#",
    description:
      "Basic information about each country such as name, language, area, nationality, and a color theme that can be adjusted to customize the UI.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Node.js" },
    author: {
      name: "Learn more",
      href: "#",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8loOgfCQHVS81APLOxhut_WB6Ij28E2MvA&s",
    },
  },
  {
    id: 6,
    title: "Calendar Viewer Component",
    href: "#",
    description:
      "Display of a month's calendar with highlights for important events, ability to navigate dates and view events scheduled for each day.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "React" },
    author: {
      name: "Learn more",
      href: "#",
      imageUrl:
        "https://icons.veryicon.com/png/o/miscellaneous/face-monochrome-icon/calendar-249.png",
    },
  },
];

function MiniProject() {
  return (
    <div
      className="bg-white py-24 sm:py-32 overflow-x-auto text-slate-800 italic font-semibold"
      id="miniproject"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            MINIPROJECT
          </h2>
          <p className="mt-2 text-lg leading-8">
            Learn how to enhance understanding of code execution.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t-4 border-gray-300 pt-10 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-slate-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-gray-200"
                  target="_blank"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-800">
                  <a href={post.href} target="_blank">
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-500">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-slate-800 underline">
                    <a href={post.author.href} target="_blank">
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MiniProject;
