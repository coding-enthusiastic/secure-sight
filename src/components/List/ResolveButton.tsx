"use client";

import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

function ResolveButton({ resolveId }: { resolveId: number | undefined }) {
  const router = useRouter();

  async function handleClick() {
    const update = await fetch(`/api/incidents/${resolveId}/resolve`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id: resolveId }),
    });
    const res = await update.json();
    console.log(res);
    
    router.refresh();
  }

  return (
    <div className="flex items-center justify-center py-[10px] px-[12px] text-[#FFCC00] h-fit">
      <button
        className="flex items-center"
        type="button"
        onClick={() => handleClick()}
      >
        <h1 className="font-jakarta-sans font-bold text-[10px] ">Resolve</h1>
        <ChevronRight width={16} height={16} />
      </button>
    </div>
  );
}

export default ResolveButton;
