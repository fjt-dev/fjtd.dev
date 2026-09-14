import ProfileHeader from '@/components/ProfileHeaders';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import ContentsCard from '@/components/ContentsCard';

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/5 md:sticky md:top-0 md:self-start flex flex-col gap-8">
          {/* 左側レイアウト */}
          <div className="flex flex-col gap-4">
            <ProfileHeader />
            <Contacts />
          </div>
          <Footer className="hidden md:block" />
        </div>
        <div className="w-full md:w-3/5">
          {/* 右側カード */}
          <ContentsCard />
          <Footer className="md:hidden" />
        </div>
      </div>
    </div>
  );
}
