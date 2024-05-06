import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">book</Link>
          <p>By aaaxxx, Published on 2024/07/17</p>
          <Link href="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            blanditiis officia perspiciatis dolores vero, deserunt distinctio
            consectetur minima! Dignissimos quia nobis doloremque aut sequi
            eaque in maxime excepturi ullam dolor.
          </Link>
          <Link href="#">続きを読む</Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
