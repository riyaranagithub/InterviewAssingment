const TrafficByWebsite = () => {
    const trafficData = [
      { name: "Google", thisYear: "40%", lastYear: "20%" },
      { name: "YouTube", thisYear: "60%", lastYear: "30%" },
      { name: "Instagram", thisYear: "30%", lastYear: "25%" },
      { name: "Pinterest", thisYear: "80%", lastYear: "40%" },
      { name: "Facebook", thisYear: "35%", lastYear: "15%" },
      { name: "Twitter", thisYear: "55%", lastYear: "25%" },
    ];
  
    return (
      <div className="w-72">
        <h3 className="text-sm font-semibold mb-4">Traffic by Website</h3>
        <div className="space-y-3">
          {trafficData.map((site, index) => (
            <div key={index}>
              <p className="text-sm text-gray-700 mb-1">{site.name}</p>
              <div className="relative h-2 bg-gray-100 rounded overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-black rounded"
                  style={{ width: site.thisYear }}
                ></div>
                <div
                  className="absolute top-0 left-0 h-full bg-gray-300 rounded"
                  style={{ width: site.lastYear }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TrafficByWebsite;
  