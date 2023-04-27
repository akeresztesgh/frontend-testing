using System.Text.Json.Serialization;

namespace WebApplication1
{
    public class ItemViewModel
    {
        public long Id { get; set; }
        public int BarcodesAmount { get; set; }
        public long CategoryId { get; set; }
        public long? CheckedOutById { get; set; }
        public string CheckinNotes { get; set; }
        public long? CheckoutReasonId { get; set; }
        public long CurrentOrgId { get; set; }
        public string CurrentOrgName { get; set; }
        public string Description { get; set; }
        public long DispositionAuthorizationStatusId { get; set; }
        public string DispositionAuthorizationStatus { get; set; }
        public long CurrentOfficeId { get; set; }
        public string CurrentOfficeName { get; set; }
        public long? CustodianId { get; set; }
        public string Custodian { get; set; }
        public Guid Barcode { get; set; }
        public long CustodyReasonId { get; set; }
        public string CustodyReason { get; set; }
        public long StatusId { get; set; }
        public string Status { get; set; }
        public DateTime RecoveryDate { get; set; }

    }
}
