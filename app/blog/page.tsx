import PhotoCard from "@/Components/photocard/PhotoCard";

const BlogPage = () => {
  return (
    <div className="pt-20 text-white">
      <div className="flex flex-col md:flex-row md:gap-14 items-center justify-start">
        <div className="px-5 md:p-0 w-full md:w-7/12 flex flex-col gap-5">
          <h4 className="text-btn text-sm font-bold">© K-LEARN</h4>
          <h2 className="text-5xl font-semibold lg:text-nowrap">
            Latest News, Articles And{" "}
            <span className="text-btn">Tutorials</span>
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap items-stretch gap-5 mt-20">
        <PhotoCard
          img="/photo1.png"
          date="12/12/2021"
          subject="Python"
          desc="Delivering On The Promise Of Digital Health And AI In Healthcare"
        />
        <PhotoCard
          img="/photo2.png"
          date="12/12/2021"
          subject="Web"
          desc="Johnson Undoubtedly Took A Risk By Holding An Election In Winter While Brexit Was Still In Limbo"
        />
        <PhotoCard
          img="/photo3.png"
          date="12/12/2021"
          subject="Web"
          desc="A community of solvers help organizations build trust and deliver sustained outcomes."
        />
        <PhotoCard
          img="/photo1.png"
          date="12/12/2021"
          subject="Python"
          desc="Delivering On The Promise Of Digital Health And AI In Healthcare"
        />
        <PhotoCard
          img="/photo2.png"
          date="12/12/2021"
          subject="Web"
          desc="Johnson Undoubtedly Took A Risk By Holding An Election In Winter While Brexit Was Still In Limbo"
        />
        <PhotoCard
          img="/photo3.png"
          date="12/12/2021"
          subject="Web"
          desc="A community of solvers help organizations build trust and deliver sustained outcomes."
        />
        <PhotoCard
          img="/photo1.png"
          date="12/12/2021"
          subject="Python"
          desc="Delivering On The Promise Of Digital Health And AI In Healthcare"
        />
        <PhotoCard
          img="/photo2.png"
          date="12/12/2021"
          subject="Web"
          desc="Johnson Undoubtedly Took A Risk By Holding An Election In Winter While Brexit Was Still In Limbo"
        />
        <PhotoCard
          img="/photo3.png"
          date="12/12/2021"
          subject="Web"
          desc="A community of solvers help organizations build trust and deliver sustained outcomes."
        />
      </div>
    </div>
  );
};

export default BlogPage;
