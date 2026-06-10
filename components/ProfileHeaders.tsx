import Image from 'next/image';

export default function ProfileHeader() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Image src="/icon.webp" alt="icon" width={112} height={112} loading="eager" className="rounded-full" />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-3xl">fjtd.dev</h1>
        <div className="flex flex-col gap-2">
          <p>&#x1f6e0; New-Bee Frontend Engineer</p>
          <p>&#x1f393; Student</p>
        </div>
      </div>
    </div>
  );
}
