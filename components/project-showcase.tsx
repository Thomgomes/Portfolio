import Image from "next/image";

type ProjectShowcaseProps = {
  route: string;
  image?: string;
};

export default function ProjectShowcase({
  route,
  image,
}: ProjectShowcaseProps) {
  return (
    <div className="max-w-[35rem] overflow-hidden rounded-md border border-gray-200 bg-white shadow-2xl shadow-blue-400/50">
      <div className="flex h-8 items-center justify-center border-b border-gray-200 bg-gray-50 p-1">
        <div className="w-40 truncate rounded-md bg-gray-200 px-4  text-center text-xs text-gray-500">
          {route}
        </div>
      </div>
      {image ? (
        <Image
          src={image}
          alt={`Prévia do projeto ${route}`} 
          width={560} 
          height={256}
          className="h-64 w-full object-cover"
        />
      ) : (
        <div className="flex h-64 items-center justify-center bg-gray-100">
          <p className="text-gray-400">Não Existe imagem</p>
        </div>
      )}
    </div>
  );
}
