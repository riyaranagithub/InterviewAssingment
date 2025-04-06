const TrafficByLocation = () => {
    const locationData = [
      { name: "United States", color: "#000000", percentage: 52.1 },
      { name: "Canada", color: "#93c5fd", percentage: 22.8 },
      { name: "Mexico", color: "#86efac", percentage: 13.9 },
      { name: "Other", color: "#d1d5db", percentage: 11.2 },
    ];
  
    const sliceGap = 2; // degrees of gap between slices
    let start = 0;
    const gradientSegments = [];
  
    locationData.forEach((item) => {
      const sliceSize = item.percentage * 3.6;
      const end = start + sliceSize;
  
      // Add colored slice
      gradientSegments.push(`${item.color} ${start}deg ${end - sliceGap}deg`);
  
      // Add transparent gap
      gradientSegments.push(`transparent ${end - sliceGap}deg ${end}deg`);
  
      start = end;
    });
  
    const gradient = `conic-gradient(${gradientSegments.join(", ")})`;
  
    return (
      <div className="w-full max-w-md text-primary font-semibold">
        <h3 className="text-sm font-semibold mb-4">Traffic by Location</h3>
        <div className="flex items-center">
          {/* Donut Chart */}
          <div className="relative w-28 h-28 mr-6">
            <div
              className="w-full h-full rounded-full"
              style={{ background: gradient }}
            />
            {/* Inner Circle to make it a donut */}
            <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow" />
          </div>
  
          {/* Legends */}
          <div className="flex flex-col space-y-2 text-sm">
            {locationData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="w-24">{item.name}</span>
                <span>{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TrafficByLocation;
  