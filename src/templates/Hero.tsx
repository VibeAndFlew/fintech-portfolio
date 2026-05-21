import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { badgeVariants } from '@/components/BadgeVariants';
import { buttonVariants } from '@/components/buttonVariants';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className="mx-auto max-w-screen-lg px-3 py-20 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
        Institutional-grade <span className="text-blue-600">financial infrastructure</span> for the modern web.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-500">
        Secure, compliant, and lightning-fast APIs to manage global transactions, user accounts, and real-time ledger data.
      </p>

      <div className="mt-10 flex items-center justify-center gap-4">
        <a
          className={buttonVariants({ size: 'lg', className: 'bg-blue-600 hover:bg-blue-700' })}
          href="/sign-up"
        >
          Open Dashboard
        </a>
        <a
          className={buttonVariants({ variant: 'outline', size: 'lg' })}
          href="https://github.com/your-username"
        >
          <GitHubLogoIcon className="mr-2 h-5 w-5" />
          View Source Code
        </a>
      </div>
    </section>
  );
};

export { Hero };