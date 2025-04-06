const TrafficByDevice = () => {
    const deviceData = [
      { name: "Linux", value: 15000, color: "bg-violet-300" },
      { name: "Mac", value: 30000, color: "bg-teal-300" },
      { name: "iOS", value: 22000, color: "bg-black" },
      { name: "Windows", value: 33000, color: "bg-blue-300" },
      { name: "Android", value: 12000, color: "bg-blue-200" },
      { name: "Other", value: 25000, color: "bg-green-300" },
    ];
  
    const maxHeight = 150; // Corresponds to 33000 (top value)
  
    return (
      <div className=" w-full max-w-md">
        <h3 className="text-sm font-semibold mb-4">Traffic by Device</h3>
        <div className="flex">
          {/* Y-Axis Labels */}
          <div className="flex flex-col justify-between h-[150px] mr-3 text-xs text-gray-500">
            <span>30K</span>
            <span>20K</span>
            <span>10K</span>
            <span>0</span>
          </div>
  
          {/* Bar Chart */}
          <div className="flex items-end justify-between h-[150px] w-full">
            {deviceData.map((device, index) => {
              const barHeight = (device.value / 33000) * maxHeight;
              return (
                <div key={index} className="flex flex-col items-center space-y-1">
                  <div
                    className={`w-6 ${device.color} rounded-t`}
                    style={{ height: `${barHeight}px` }}
                  ></div>
                  <p className="text-xs text-gray-600 mt-1">{device.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  
  export default TrafficByDevice;
  