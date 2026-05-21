import { AppConfig } from '@/utils/AppConfig';

const Logo = () => (
  <div className="flex items-center text-xl font-bold text-gray-900 font-sans">
    <svg
      className="mr-2 h-8 w-8 text-blue-600"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
    {AppConfig.name}
  </div>
);

export { Logo };