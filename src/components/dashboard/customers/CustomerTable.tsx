"use client";

const customers = [
    {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        phone: "01711111111",
        status: "Active",
    },
    {
        id: 2,
        name: "Alice Smith",
        email: "alice@gmail.com",
        phone: "01822222222",
        status: "Inactive",
    },
];

const CustomerTable = () => {
    return (
        <div className="overflow-hidden rounded-xl bg-white shadow">
            <table className="w-full">
                <thead className="bg-slate-100">
                    <tr>
                        <th className="px-6 py-4 text-left">Name</th>
                        <th className="px-6 py-4 text-left">Email</th>
                        <th className="px-6 py-4 text-left">Phone</th>
                        <th className="px-6 py-4 text-left">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {customers.map((customer) => (
                        <tr
                            key={customer.id}
                            className="border-t"
                        >
                            <td className="px-6 py-4">
                                {customer.name}
                            </td>

                            <td className="px-6 py-4">
                                {customer.email}
                            </td>

                            <td className="px-6 py-4">
                                {customer.phone}
                            </td>

                            <td className="px-6 py-4">
                                <span
                                    className={`rounded-full px-3 py-1 text-sm ${customer.status === "Active"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {customer.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerTable;
