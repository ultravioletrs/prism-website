"use client";

import React, { createContext, useContext, useState } from "react";

interface LeadsContextType {
    isDemoModalOpen: boolean;
    openDemoModal: () => void;
    closeDemoModal: () => void;
}

const LeadsContext = createContext<LeadsContextType | undefined>(undefined);

export function LeadsProvider({ children }: { children: React.ReactNode }) {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    const openDemoModal = () => setIsDemoModalOpen(true);
    const closeDemoModal = () => setIsDemoModalOpen(false);

    return (
        <LeadsContext.Provider value={{ isDemoModalOpen, openDemoModal, closeDemoModal }}>
            {children}
        </LeadsContext.Provider>
    );
}

export function useLeads() {
    const context = useContext(LeadsContext);
    if (context === undefined) {
        throw new Error("useLeads must be used within a LeadsProvider");
    }
    return context;
}
