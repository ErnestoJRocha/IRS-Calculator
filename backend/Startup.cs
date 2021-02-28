using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace backend
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      // If using Kestrel:
      services.Configure<KestrelServerOptions>(options =>
      {
        options.AllowSynchronousIO = true;
      });

      // If using IIS:
      services.Configure<IISServerOptions>(options =>
      {
        options.AllowSynchronousIO = true;
      });

      services.AddDbContext<DataContext>(options => options.UseSqlServer(Configuration.GetConnectionString("AppLife_Server")));
      services.AddDbContext<SybaseContext>(options => options.UseSqlServer(Configuration.GetConnectionString("Sybase_Server")));
      services.AddControllers();

      // Cors
      services.AddCors();
      // SeedData
      services.AddTransient<SeedData>();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env, SeedData seeder)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      //Config Cors
      app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

      app.UseHttpsRedirection();

      app.UseRouting();

      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });

      // SeedData async
      // seeder.SeedIrsAreas();
      // seeder.SeedIrsDependents();
      // seeder.SeedIrsMaritalSates();
      // seeder.SeedIrsTaxes();
      // seeder.SeedNivel();
      // seeder.SeedColaboradorNivel();
      // seeder.SeedIrsAreaNivels();

    }
  }
}