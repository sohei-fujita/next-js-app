import DeleteButton from "@/app/components/DeleteButton";
import { getDetailArticle } from "@/blogApi";
import Image from "next/image";
import React from "react";

const Article = async ({ params }: { params: { id: string } }) => {
  const detailArticle = await getDetailArticle(params.id);

  const handleDelete = async () => {};

  console.log(detailArticle);

  console.log(params.id);
  return (
    <div className="max-w-3x1 mx-auto p-5">
      <Image
        src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
        alt=""
        width={1280}
        height={300}
      />
      <h1 className="text-4x1 text-center mb-10 mt-10">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Article;
