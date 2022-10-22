﻿using Microsoft.AspNetCore.Mvc;

namespace example_react.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GraphPointController : ControllerBase
    {       
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly Random _random;

        public GraphPointController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
            _random = new Random();
        }

        private int GetRandomInt(int from, int to)
        {
            return _random.Next(from, to);
        }

        [HttpGet]
        public IEnumerable<GraphPoint> Get()
        {
            var startDate = new DateTime(2020, 9, 21, 14, 0, 0);

            var temp = Enumerable.Range(-50, 100).Select(index => new GraphPoint
            {
                X =startDate + index*TimeSpan.FromMinutes(15),
                Y = GetRandomInt(-50 ,50),
            })
            .ToArray();

            return temp;
        }
    }
}