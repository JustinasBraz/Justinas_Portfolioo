export default function SkillCard({ icon: Icon, label }) {
  return (
    <div className="group relative bg-light dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-row items-center justify-center text-center gap-4">
        {Icon && (
          <div className="text-5xl text-secondary dark:text-secondary flex items-center justify-center flex-shrink-0">
            <Icon className="w-12 h-12" />
          </div>
        )}
        <p className="text-lg font-semibold text-brand-dark dark:text-gray-200">
          <strong>{label}</strong>
        </p>
      </div>
    </div>
  )
}

