import React, { useState } from "react";

interface LoginForm {
    email: string;
    password: string;
}

const AdminLogin: React.FC = () => {
    const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
    const [error, setError] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.email === "admin@company.com" && form.password === "admin123") {
            alert("✅ Admin Login Successful");
            window.location.href = "/admin/dashboard";
        } else {
            setError("❌ Invalid email or password");
        }
    };

    return (
        <div className="flex h-screen">
            <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-700 to-purple-600 items-center justify-center relative">
                <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                    alt="HRMS Dashboard"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <h1 className="text-white text-4xl font-bold relative z-10 drop-shadow-lg">
                    Welcome Admin
                </h1>
            </div>

            <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white/70 backdrop-blur-lg shadow-2xl rounded-2xl p-10 w-96 border border-white/20"
                >
                    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                        Admin Login
                    </h2>

                    {error && (
                        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
                    )}

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            placeholder="Enter admin email"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1 text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 shadow-lg transition"
                    >
                        Login
                    </button>

                    <p className="text-center text-gray-600 text-sm mt-6">
                        Forgot your password?{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Reset here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
