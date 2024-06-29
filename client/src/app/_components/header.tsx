import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#F6F7EB] text-[#3D2C2E] px-4 py-3 md:px-44 md:py-6">
      <div className="flex justify-left items-center">
        <Link href="/">
          <div className="text-xl font-bold cursor-pointer">Curriculum Evaluator</div>
        </Link>
      </div>
    </header>
  );
}
