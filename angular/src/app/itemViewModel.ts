

export interface ItemViewModel {
    barcodesAmount: number;
    categoryId: number;
    checkedOutById: number | null;
    checkinNotes: string;
    checkoutReasonId: number | null;
    currentOrgId: number;
    currentOrgName: string;
    description: string;
    dispositionAuthorizationStatusId: number;
    dispositionAuthorizationStatus: string;
    currentOfficeId: number;
    currentOfficeName: string;
    custodianId: number | null;
    custodian: string;
    barcode: string;
    custodyReasonId: number;
    custodyReason: string;
    statusId: number;
    status: string;
    recoveryDate: string;
}
