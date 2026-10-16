export default function StudentSummary({ student, onReset }) {
  const details = [
    ["Full Name", student.fullName],
    ["Email Address", student.email],
    ["Phone Number", student.phone],
    ["Date of Birth", student.dob],
    ["Gender", student.gender],
    ["Course", student.course],
    ["Qualification", student.qualification],
    ["Address", student.address],
  ];

  return (
    <section
      className="mt-8 overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm"
      aria-live="polite"
    >
      <div className="bg-emerald-600 px-6 py-5 text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-2xl">
            ✓
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Registration Successful!
            </h2>
            <p className="mt-1 text-sm text-emerald-50">
              Student details submitted successfully.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 p-6 sm:grid-cols-2">
        {details.map(([label, value]) => (
          <div key={label} className="border-b border-slate-100 pb-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {label}
            </p>
            <p className="mt-2 break-words font-medium text-slate-800">
              {value || "Not provided"}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
        <button
          type="button"
          onClick={onReset}
          className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
        >
          Register Another Student
        </button>
      </div>
    </section>
  );
}