var cityData = [
    {
      names: "Sand Rock",
      latitude: 34.18,
      longitude: -85.817
    },
    {
      names: "Jamestown",
      latitude: 34.411,
      longitude: -85.574
    },
    {
      names: "Palisades Park",
      latitude: 33.989,
      longitude: -86.458
    },
    {
      names: "Anchorage & South Central Ice Climbing",
      latitude: 61.213,
      longitude: -149.867
    },
    {
      names: "Denali National Park",
      latitude: 63.065,
      longitude: -151.172
    },
    {
      names: "Seward Highway",
      latitude: 61.058,
      longitude: -149.798
    },
    {
      names: "Cochise Stronghold",
      latitude: 31.921,
      longitude: -109.987
    },
    {
      names: "Sedona Area",
      latitude: 34.868,
      longitude: -111.762
    },
    {
      names: "Paradise Forks",
      latitude: 35.138,
      longitude: -112.024
    },
    {
      names: "Winslow Wall",
      latitude: 34.942,
      longitude: -110.663
    },
    {
      names: "Mount Lemmon (Santa Catalina Mountains)",
      latitude: 32.447,
      longitude: -110.79
    },
    {
      names: "Horseshoe Canyon Ranch",
      latitude: 36.012,
      longitude: -93.292
    },
    {
      names: "Sam's Throne & Surroundings",
      latitude: 35.858,
      longitude: -93.044
    },
    {
      names: "Joshua Tree National Park",
      latitude: 34.012,
      longitude: -116.168
    },
    {
      names: "Lover's Leap",
      latitude: 38.799,
      longitude: -120.141
    },
    {
      names: "Tahquitz & Suicide Rocks",
      latitude: 33.761,
      longitude: -116.679
    },
    {
      names: "High Sierra",
      latitude: 37.275,
      longitude: -118.677
    },
    {
      names: "Sierra Eastside",
      latitude: 37.335,
      longitude: -118.499
    },
    {
      names: "Lake Tahoe",
      latitude: 39.109,
      longitude: -120.237
    },
    {
      names: "Yosemite National Park",
      latitude: 37.74,
      longitude: -119.573
    },
    {
      names: "The Needles / Kern River",
      latitude: 36.029,
      longitude: -118.47
    },
    {
      names: "Owens River Gorge",
      latitude: 37.446,
      longitude: -118.572
    },
    {
      names: "Western Sierra",
      latitude: 35.967,
      longitude: -118.484
    },
    {
      names: "Boulder Canyon",
      latitude: 40.002,
      longitude: -105.41
    },
    {
      names: "Lumpy Ridge",
      latitude: 40.403,
      longitude: -105.518
    },
    {
      names: "Eldorado Canyon SP",
      latitude: 39.932,
      longitude: -105.281
    },
    {
      names: "Shelf Road",
      latitude: 38.63,
      longitude: -105.223
    },
    {
      names: "Rifle Mountain Park",
      latitude: 39.716,
      longitude: -107.691
    },
    {
      names: "RMNP  Rock",
      latitude: 40.375,
      longitude: -105.616
    },
    {
      names: "Alpine Rock",
      latitude: 40.257,
      longitude: -105.657
    },
    {
      names: "Flatirons",
      latitude: 39.983,
      longitude: -105.289
    },
    {
      names: "South Platte",
      latitude: 39.417,
      longitude: -105.469
    },
    {
      names: "Grand Junction Area",
      latitude: 39.081,
      longitude: -108.522
    },
    {
      names: "Gunnison",
      latitude: 38.545,
      longitude: -106.928
    },
    {
      names: "CO Ice & Mixed",
      latitude: 38.994,
      longitude: -105.93
    },
    {
      names: "Central Valley",
      latitude: 41.63,
      longitude: -72.81
    },
    {
      names: "CT Bouldering",
      latitude: 41.364,
      longitude: -72.564
    },
    {
      names: "Lost Wall",
      latitude: 34.667,
      longitude: -85.371
    },
    {
      names: "Mount Yonah",
      latitude: 34.637,
      longitude: -83.714
    },
    {
      names: "Mokule'ia Wall",
      latitude: 21.574,
      longitude: -158.23
    },
    {
      names: "City of Rocks",
      latitude: 42.078,
      longitude: -113.724
    },
    {
      names: "Castle Rocks",
      latitude: 42.135,
      longitude: -113.67
    },
    {
      names: "Massacre Rocks",
      latitude: 42.675,
      longitude: -112.998
    },
    {
      names: "The Sawtooth Range",
      latitude: 44.149,
      longitude: -114.918
    },
    {
      names: "The Fins",
      latitude: 43.731,
      longitude: -113.084
    },
    {
      names: "Jackson Falls",
      latitude: 37.507,
      longitude: -88.682
    },
    {
      names: "Giant City State Park",
      latitude: 37.598,
      longitude: -89.188
    },
    {
      names: "The Holy Boulders",
      latitude: 37.618,
      longitude: -89.415
    },
    {
      names: "Red River Gorge",
      latitude: 37.456,
      longitude: -83.794
    },
    {
      names: "Acadia National Park",
      latitude: 44.34,
      longitude: -68.258
    },
    {
      names: "Munising",
      latitude: 46.41,
      longitude: -86.65
    },
    {
      names: "HE MNI CAN / Barn Bluff (Red Wing)",
      latitude: 44.57,
      longitude: -92.526
    },
    {
      names: "Gallatin Canyon",
      latitude: 45.407,
      longitude: -111.225
    },
    {
      names: "Red Rock",
      latitude: 36.131,
      longitude: -115.425
    },
    {
      names: "Mount Charleston",
      latitude: 36.272,
      longitude: -115.695
    },
    {
      names: "Rumney",
      latitude: 43.802,
      longitude: -71.837
    },
    {
      names: "Cathedral Ledge",
      latitude: 44.064,
      longitude: -71.166
    },
    {
      names: "Whitehorse Ledge",
      latitude: 44.055,
      longitude: -71.167
    },
    {
      names: "Pawtuckaway",
      latitude: 43.084,
      longitude: -71.175
    },
    {
      names: "NH Ice and Mixed",
      latitude: 44.037,
      longitude: -71.119
    },
    {
      names: "Cannon Cliff",
      latitude: 44.159,
      longitude: -71.685
    },
    {
      names: "Sundown Ledge",
      latitude: 44.007,
      longitude: -71.232
    },
    {
      names: "Sandia Mountains",
      latitude: 35.211,
      longitude: -106.45
    },
    {
      names: "El Rito",
      latitude: 36.393,
      longitude: -106.196
    },
    {
      names: "Organ Mountains",
      latitude: 32.35,
      longitude: -106.566
    },
    {
      names: "Enchanted Tower",
      latitude: 34.23,
      longitude: -107.917
    },
    {
      names: "Taos Area",
      latitude: 36.406,
      longitude: -105.574
    },
    {
      names: "The Gunks",
      latitude: 41.744,
      longitude: -74.197
    },
    {
      names: "Adirondacks",
      latitude: 43.938,
      longitude: -74.378
    },
    {
      names: "Linville Gorge",
      latitude: 35.887,
      longitude: -81.885
    },
    {
      names: "Looking Glass Rock",
      latitude: 35.295,
      longitude: -82.788
    },
    {
      names: "Stone Mountain",
      latitude: 36.392,
      longitude: -81.047
    },
    {
      names: "Laurel Knob",
      latitude: 35.15,
      longitude: -83.056
    },
    {
      names: "Rumbling Bald",
      latitude: 35.449,
      longitude: -82.214
    },
    {
      names: "Moore's Wall",
      latitude: 36.398,
      longitude: -80.292
    },
    {
      names: "Quartz Mountain",
      latitude: 34.898,
      longitude: -99.334
    },
    {
      names: "Wichita Mountains Wildlife Refuge",
      latitude: 34.711,
      longitude: -98.623
    },
    {
      names: "Smith Rock",
      latitude: 44.368,
      longitude: -121.139
    },
    {
      names: "Mt. Hood",
      latitude: 45.373,
      longitude: -121.696
    },
    {
      names: "Birdsboro Quarry",
      latitude: 40.254,
      longitude: -75.814
    },
    {
      names: "Safe Harbor",
      latitude: 39.935,
      longitude: -76.385
    },
    {
      names: "Spearfish Canyon",
      latitude: 44.458,
      longitude: -103.859
    },
    {
      names: "Custer State Park",
      latitude: 43.844,
      longitude: -103.563
    },
    {
      names: "The Tennessee Wall",
      latitude: 35.072,
      longitude: -85.403
    },
    {
      names: "Foster Falls",
      latitude: 35.182,
      longitude: -85.674
    },
    {
      names: "Sunset Park",
      latitude: 34.999,
      longitude: -85.355
    },
    {
      names: "Hueco Tanks",
      latitude: 31.917,
      longitude: -106.043
    },
    {
      names: "Enchanted Rock State Natural Area",
      latitude: 30.503,
      longitude: -98.821
    },
    {
      names: "Indian Creek",
      latitude: 38.026,
      longitude: -109.54
    },
    {
      names: "Castle Valley",
      latitude: 38.684,
      longitude: -109.423
    },
    {
      names: "Fisher Towers",
      latitude: 38.724,
      longitude: -109.308
    },
    {
      names: "Zion National Park",
      latitude: 37.259,
      longitude: -112.973
    },
    {
      names: "American Fork Canyon",
      latitude: 40.432,
      longitude: -111.751
    },
    {
      names: "Little Cottonwood Canyon",
      latitude: 40.573,
      longitude: -111.777
    },
    {
      names: "Big Cottonwood Canyon",
      latitude: 40.619,
      longitude: -111.789
    },
    {
      names: "Maple Canyon",
      latitude: 39.556,
      longitude: -111.687
    },
    {
      names: "San Rafael Swell",
      latitude: 38.853,
      longitude: -110.701
    },
    {
      names: "Joe's Valley",
      latitude: 39.277,
      longitude: -111.174
    },
    {
      names: "Lake Willoughby",
      latitude: 44.742,
      longitude: -72.048
    },
    {
      names: "VT Ice and Mixed",
      latitude: 44.226,
      longitude: -72.587
    },
    {
      names: "Grayson Highlands State Park",
      latitude: 36.612,
      longitude: -81.491
    },
    {
      names: "Exit 32 / Little Si",
      latitude: 47.498,
      longitude: -121.756
    },
    {
      names: "Index",
      latitude: 47.825,
      longitude: -121.562
    },
    {
      names: "Frenchman Coulee, AKA Vantage",
      latitude: 47.025,
      longitude: -119.969
    },
    {
      names: "Tieton River",
      latitude: 46.684,
      longitude: -120.958
    },
    {
      names: "The New River Gorge",
      latitude: 38.072,
      longitude: -81.081
    },
    {
      names: "Seneca Rocks",
      latitude: 38.834,
      longitude: -79.366
    },
    {
      names: "Summersville (Gauley River) Area",
      latitude: 38.236,
      longitude: -80.855
    },
    {
      names: "Devil's Lake",
      latitude: 43.417,
      longitude: -89.732
    },
    {
      names: "Governor Dodge State Park",
      latitude: 43.027,
      longitude: -90.104
    },
    {
      names: "Devil's Lake Bouldering",
      latitude: 43.415,
      longitude: -89.732
    },
    {
      names: "Devils Tower",
      latitude: 44.59,
      longitude: -104.717
    },
    {
      names: "Vedauwoo",
      latitude: 41.185,
      longitude: -105.378
    },
    {
      names: "Grand Teton National Park",
      latitude: 43.741,
      longitude: -110.803
    },
    {
      names: "Wind River Range",
      latitude: 42.755,
      longitude: -109.204
    },
    {
      names: "Sinks Canyon",
      latitude: 42.739,
      longitude: -108.83
    },
    {
      names: "Rock Springs Buttress",
      latitude: 43.588,
      longitude: -110.87
    }
];



// d3.select("tbody")
// .selectAll("tr")
// .data(cityData)
// .enter()
// .append("tr")
// .html(function(d) {
// return `<td>${d.names}</td><td>${d.latitude}</td><td>${d.longitude}</td>`;
// });