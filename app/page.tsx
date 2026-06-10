import ProfileHeader from '@/components/ProfileHeaders';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import ContentsCard from '@/components/ContentsCard';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="flex gap-8">
        <div className="w-2/5 sticky top-0 self-start flex flex-col gap-8">
          {/* h-full flex flex-col */}
          <div className="flex flex-col gap-4">
            <ProfileHeader />
            <Contacts />
          </div>
          <Footer />
        </div>
        <div className="w-3/5">
          {/* 左側カード */}
          <ContentsCard />
        </div>
      </div>
    </div>
  );
}
