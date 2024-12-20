import Image from "next/image";

export default function Loading() {
    return (
        <div className="loading-screen" >
            <div className="loading-image-box" >
                <Image src="/images/loading.gif" className="loading-image" alt="Loading Image" width={100} height={100} />
            </div>
      </div>
    )
}