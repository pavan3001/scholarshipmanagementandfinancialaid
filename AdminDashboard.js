import React from 'react';

function AdminDashboard() {
    return (
        <div className="container">
            <h2>Admin Dashboard</h2>
            <button className="button" onClick={() => console.log("Add New Scholarship clicked")}>
                Add New Scholarship
            </button>
            <button className="button" onClick={() => console.log("View Applications clicked")}>
                View Applications
            </button>
        </div>
    );
}

export default AdminDashboard;
