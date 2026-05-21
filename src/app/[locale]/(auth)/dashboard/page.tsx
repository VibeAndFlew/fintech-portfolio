import { useTranslations } from 'next-intl';

export default function DashboardPage() {
  const t = useTranslations('Dashboard');

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10 font-sans">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Financial Overview</h1>
          <p className="text-gray-500 mt-1">Welcome back. Here is your summary for today.</p>
        </div>
        <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition self-start md:self-auto">
          + Transfer Funds
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Available Balance</p>
          <p className="mt-2 text-4xl font-bold text-gray-900">$2,459,200.50</p>
          <p className="mt-2 text-sm text-green-600 font-medium">↑ +12.4% this month</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Pending Clearances</p>
          <p className="mt-2 text-4xl font-bold text-gray-900">$84,050.00</p>
          <p className="mt-2 text-sm text-gray-500 font-medium">4 ACH transfers processing</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Active API Keys</p>
          <p className="mt-2 text-4xl font-bold text-gray-900">3 / 5</p>
          <p className="mt-2 text-sm text-blue-600 font-medium hover:underline cursor-pointer">Manage tokens →</p>
        </div>
      </div>

      {/* Data Table Area */}
      <div className="rounded-xl bg-white shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
        </div>
        <div className="p-6">
          <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
            <p className="text-gray-400">Database connection active. Awaiting new ledger entries...</p>
          </div>
        </div>
      </div>

    </div>
  );
}