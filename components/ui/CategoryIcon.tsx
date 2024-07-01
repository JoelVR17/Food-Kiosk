"use client";

import { Category } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { param } from "express-validator";

type CategoryIconProps = {
  category: Category;
};

const CategoryIcon = ({ category }: CategoryIconProps) => {
  const params = useParams<{ category: string }>();

  return (
    <div
      className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b ${
        category.slug === params.category && "bg-amber-400"
      }`}
    >
      <div className="w-16 h-16 relative">
        <Image
          className=""
          src={`/icon_${category.slug}.svg`}
          alt={`${category.name}`}
          fill
        />
      </div>
      <Link href={`/order/${category.slug}`} className="text-xl font-bold">
        {category.name}
      </Link>
    </div>
  );
};

export default CategoryIcon;
