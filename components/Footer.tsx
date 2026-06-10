import NextImage from 'next/image';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="flex items-end gap-4">
        <div>
          <a href="https://sites.google.com/view/happy-busy" target="_blank">
            <NextImage
              src="/noTime_big.png"
              alt="時間のないサイト運営者リング"
              width={200}
              height={40}
              loading="lazy"
            />
          </a>
        </div>
        <div>
          <a href="https://counter.fjtd.dev" target="_blank">
            <img src="https://counter.fjtd.dev/counter?asset=blue2-100" referrerPolicy="origin" className="w-24" />
          </a>
        </div>
      </div>
      <div>
        <small>
          <p className="text-gray-600">&copy; 2026 fjtd</p>
        </small>
        <p className="text-xs text-gray-400">
          当サイトでは、Google
          Analyticsを使用してアクセス解析を行なっております。ユーザのサイト訪問に関する情報を収集しますが、個人を特定できる情報は収集しません。データの収集に同意しない場合は、Cookieを無効にしてください。詳細は、
          <a href="https://policies.google.com/technologies/partner-sites" className="underline">
            Googleアナリティクスサービス利用規約
          </a>
          をご覧ください。
        </p>
      </div>
    </footer>
  );
}
