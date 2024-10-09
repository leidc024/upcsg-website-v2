
import Header from "./header";
import Table from "./TableSection";
import React from 'react';
import Page from "./Pagination";

const AdminPermissions = () => {
    
    return (
        <div className="p-6 text-white mx-auto w-4/5 bg-[#0a0e22]">
            {/* Header Section */}
            <Header />

            {/* Table Section */}
            <Table />
           

            {/* Pagination */}
            <Page />
        </div>
    );
};

export default AdminPermissions;
