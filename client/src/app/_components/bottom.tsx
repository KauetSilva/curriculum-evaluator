import Link from "next/link";

export default function Bottom() {
  return (
    <div className="bg-[#3D2C2E] text-[#F6F7EB] py-4 md:py-8 px-4 md:px-44">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-sm md:text-base">Apoie</h1>
        </div>
        <div className="hidden md:block opacity-60">
          <h1>|</h1>
        </div>
        <div className="flex items-center">
          <h1 className="text-sm md:text-base">Desenvolvido por</h1>
          <div className="ml-1">
            <Link
              href="https://www.linkedin.com/in/cleciokauetsilvadeara%C3%BAjo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base hover:opacity-75"
            >
              Clecio Kauet Silva de Araújo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
