using Bogus;

namespace WebApplication1
{
    public interface IDataService
    {
        List<ItemViewModel> GetItems();
    }

    public class DataService : IDataService
    {
        private readonly List<ItemViewModel> itemViewModels = new List<ItemViewModel>();
        private readonly Random random = new Random(999);

        private DateTime RandomDate()
        {
            DateTime start = new DateTime(1995, 1, 1);
            int range = (DateTime.Today - start).Days;
            return start.AddDays(random.Next(range));
        }

        public DataService()
        {
            var statusNames = new List<string>()
            {
                "checked in",
                "checked out",
                "disposed",
            };
            long id = 1;
            var itemFaker = new Faker<ItemViewModel>()
                .RuleFor(x=>x.Id, f=> id++)
                .RuleFor(x => x.BarcodesAmount, f => f.Random.Int())
                .RuleFor(x => x.CategoryId, f => f.Random.Long())
                .RuleFor(x => x.CheckedOutById, f => f.Random.Long())
                .RuleFor(x => x.CheckinNotes, f => f.Lorem.Sentence())
                .RuleFor(x => x.CheckoutReasonId, f => f.Random.Long())
                .RuleFor(x => x.CurrentOrgName, f => f.Company.CompanyName())
                .RuleFor(x => x.CurrentOrgId, f => f.Random.Long())
                .RuleFor(x => x.Description, f => f.Lorem.Lines())
                .RuleFor(x => x.DispositionAuthorizationStatus, f => f.Lorem.Sentence())
                .RuleFor(x => x.DispositionAuthorizationStatusId, f => f.Random.Long())
                .RuleFor(x => x.CurrentOfficeId, f => f.Random.Long())
                .RuleFor(x => x.CurrentOfficeName, f => f.Company.CompanyName())
                .RuleFor(x => x.CustodianId, f => f.Random.Long())
                .RuleFor(x => x.Custodian, f => f.Name.FullName())
                .RuleFor(x => x.Barcode, f => Guid.NewGuid())
                .RuleFor(x => x.CustodyReasonId, f => f.Random.Long())
                .RuleFor(x => x.CustodyReason, f => f.Lorem.Sentence())
                .RuleFor(x => x.DispositionAuthorizationStatusId, f => f.Random.Long())
                .RuleFor(x => x.DispositionAuthorizationStatus, f => f.Lorem.Sentence())
                .RuleFor(x => x.StatusId, f => f.Random.Long())
                .RuleFor(x => x.Status, f => f.PickRandom(statusNames))
                .RuleFor(x => x.RecoveryDate, f => RandomDate());

            itemViewModels = itemFaker.Generate(1000);
        }

        public List<ItemViewModel> GetItems()
        {
            return itemViewModels;
        }
    }
}
