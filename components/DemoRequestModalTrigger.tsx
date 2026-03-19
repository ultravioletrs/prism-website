"use client";

import { useLeads } from "@/components/providers/LeadsProvider";
import DemoRequestModal from "@/components/DemoRequestModal";

export default function DemoRequestModalTrigger() {
    const { isDemoModalOpen, closeDemoModal } = useLeads();
    return (
        <DemoRequestModal
            isOpen={isDemoModalOpen}
            onClose={closeDemoModal}
        />
    );
}
