import Image from "next/image";

interface BlogAuther {
  name: string;
  image: string;
}

interface BlogThumbnailProps {
  image: string;
  title: string;
  subTitle: string;
  createdAt: string;
  auther: BlogAuther;
}

export default function BlogThumbnail({
  image,
  title,
  subTitle,
  createdAt,
  auther,
}: BlogThumbnailProps) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className="aspect-video rounded-2xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="">
        <h3 className="instrument-font text-2xl text-[#1D1F2C]">{title}</h3>
        <p className="text-base text-[#4A4C56]">{subTitle}</p>
      </div>

      <div className="author-info flex items-center gap-3 text-sm">
        <div className="flex items-center mr-auto gap-3">
          <Image
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
            src={auther.image}
            alt={auther.name}
          />
          <p>
            By <span className="font-medium text-[#228573]">{auther.name}</span>
          </p>
        </div>

        <p className="text-[#4A4C56]">Published {createdAt}</p>
      </div>
    </div>
  );
}

interface BlogListItemProps extends BlogThumbnailProps {
  index: number;
}

export function BlogListItem({
  image,
  title,
  subTitle,
  createdAt,
  auther,
  index,
}: BlogListItemProps) {
  return (
    <>
      {index > 0 && <div className="border border-[#ECEFF3] w-full my-4" />}
      <div className="flex gap-3">
        <div
          className="rounded-2xl basis-[180px] bg-gradient-to-r from-indigo-500 to-transparent bg-cover bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0)), url(${image})`,
          }}
        />
        <div className="flex-1 flex flex-col gap-5">
          <div className="">
            <p className="instrument-font text-2xl text-[#1D1F2C]">{title}</p>
            <p className="text-base text-[#4A4C56]">{subTitle}</p>
          </div>

          <div className="author-info mt-auto grid grid-cols-[32px_1fr] gap-2 text-sm">
            <img
              className="w-8 h-8 rounded-full"
              src={auther.image}
              alt={auther.name}
            />
            <p className="mr-auto self-center">
              By{" "}
              <span className="font-medium text-[#228573]">{auther.name}</span>
            </p>

            <p className="text-[#4A4C56] col-span-2">Published {createdAt}</p>
          </div>
        </div>
      </div>
    </>
  );
}
