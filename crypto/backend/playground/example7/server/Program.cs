using HotChocolate.Diagnostics;
using HotChocolate.Subscriptions;
using OpenTelemetry.Metrics;
using OpenTelemetry.Resources;
using OpenTelemetry.Trace;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddHttpContextAccessor()
    .AddCors()
    .AddHelperServices();

builder.Services
    .AddHttpClient(
        Constants.PriceInfoService, 
        c => c.BaseAddress = new("https://ccc-workshop-eu-functions.azurewebsites.net"));

builder.Services
    .AddDbContextPool<AssetContext>(o => o.UseSqlite("Data Source=assets.db"));

builder.Services
    .AddGraphQLServer()
    .AddTypes()
    .AddUploadType()
    .AddFiltering()
    .AddSorting()
    .AddGlobalObjectIdentification()
    .AddMutationConventions()
    .AddInMemorySubscriptions(
        new SubscriptionOptions
        {
            TopicBufferFullMode = TopicBufferFullMode.DropOldest,
            TopicBufferCapacity = 256
        })
    .RegisterDbContext<AssetContext>()
    .ModifyOptions(o => o.EnableDefer = true);

var app = builder.Build();

app.UseWebSockets();
app.UseCors(c => c.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.UseStaticFiles();
app.MapGraphQL();

app.RunWithGraphQLCommands(args);
