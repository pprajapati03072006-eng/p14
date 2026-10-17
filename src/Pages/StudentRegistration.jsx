import { useState } from "react";
import FormInput from "../Components/FormInput";
import FormSelect from "../Components/FormSelect";
import StudentSummary from "../Components/StudentSummary";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  gender: "",
  course: "",
  qualification: "",
  address: "",
};

const courseOptions = [
  { value: "BCA", label: "BCA - Bachelor of Computer Applications" },
  { value: "BBA", label: "BBA - Bachelor of Business Administration" },
  { value: "BTech", label: "B.Tech - Bachelor of Technology" },
  { value: "MCA", label: "MCA - Master of Computer Applications" },
  { value: "MBA", label: "MBA - Master of Business Administration" },
];

const qualificationOptions = [
  { value: "12th Pass", label: "12th Pass" },
  { value: "Diploma", label: "Diploma" },
  { value: "Graduate", label: "Graduate" },
  { value: "Postgraduate", label: "Postgraduate" },
];

export default function StudentRegistration() {
  const [formData, setFormData] = useState(initialForm);
  const [submittedStudent, setSubmittedStudent] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedStudent({ ...formData });
  }

  function handleReset() {
    setFormData(initialForm);
    setSubmittedStudent(null);
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:py-14">
        {/* Page heading */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-3xl text-white shadow-lg shadow-indigo-200">
            🎓
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Student Portal
          </p>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Student Registration
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Complete the form below to register. Please ensure that
            your information is accurate.
          </p>
        </div>

        {/* Registration form */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
          <div className="h-2 bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-400" />

          <form onSubmit={handleSubmit} className="p-6 sm:p-10">
            <div className="mb-8 border-b border-slate-100 pb-5">
              <h2 className="text-xl font-bold text-slate-800">
                Personal Information
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Enter your basic contact details.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <FormInput
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />

              <FormInput
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@example.com"
                required
              />

              <FormInput
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />

              <FormInput
                label="Date of Birth"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            {/* Gender */}
            <div className="mt-7">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Gender <span className="text-rose-500">*</span>
              </label>

              <div className="flex flex-wrap gap-3">
                {["Male", "Female", "Other"].map((gender) => (
                  <label
                    key={gender}
                    className={`flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-3 text-sm transition ${
                      formData.gender === gender
                        ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                        : "border-slate-200 text-slate-600 hover:border-indigo-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={formData.gender === gender}
                      onChange={handleChange}
                      required
                      className="accent-indigo-600"
                    />
                    {gender}
                  </label>
                ))}
              </div>
            </div>

            {/* Academic information */}
            <div className="mb-8 mt-10 border-b border-slate-100 pb-5">
              <h2 className="text-xl font-bold text-slate-800">
                Academic Information
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Select your course and previous qualification.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <FormSelect
                label="Course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                options={courseOptions}
                required
              />

              <FormSelect
                label="Previous Qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                options={qualificationOptions}
                required
              />
            </div>

            {/* Address */}
            <div className="mt-7 space-y-2">
              <label
                htmlFor="address"
                className="block text-sm font-semibold text-slate-700"
              >
                Residential Address
                <span className="ml-1 text-rose-500">*</span>
              </label>

              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete address"
                rows={3}
                required
                className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            {/* Actions */}
            <div className="mt-9 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleReset}
                className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Reset Form
              </button>

              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
              >
                Submit Registration →
              </button>
            </div>
          </form>
        </div>

        {/* Submitted details */}
        {submittedStudent && (
          <StudentSummary
            student={submittedStudent}
            onReset={handleReset}
          />
        )}

        <p className="mt-6 text-center text-xs text-slate-400">
          Student Registration Portal · React Controlled Components
        </p>
      </div>
    </div>
  );
}