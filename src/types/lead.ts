export type LeadStatus =
    | "NEW"
    | "CONTACTED"
    | "QUALIFIED"
    | "PROPOSAL_SENT"
    | "WON"
    | "LOST";

export type LeadSource =
    | "WEBSITE"
    | "FACEBOOK"
    | "INSTAGRAM"
    | "LINKEDIN"
    | "REFERRAL"
    | "PHONE"
    | "EMAIL"
    | "OTHER";

export interface LeadUser {
    id: number;
    name: string;
    email: string;
    role: "ADMIN" | "STAFF";
}


export interface Lead {
    id: number;

    customerName: string;
    email: string;
    phone: string;
    company?: string;

    source: LeadSource;
    status: LeadStatus;

    notes?: string;

    assignedToId?: number | null;
    assignedTo?: LeadUser | null;

    createdById: number;
    createdBy?: LeadUser;

    createdAt: string;
    updatedAt: string;
}


export interface CreateLeadData {
    customerName: string;
    email: string;
    phone: string;

    company?: string;

    source: LeadSource;

    status?: LeadStatus;

    notes?: string;

    assignedToId?: number;
}

export interface UpdateLeadData {
    customerName?: string;
    email?: string;
    phone?: string;

    company?: string;

    source?: LeadSource;

    status?: LeadStatus;

    notes?: string;

    assignedToId?: number;
}

