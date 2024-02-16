const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
	name: String,
	address: String,
	contact: String,
	location: String,
	rating: Number,
	offers: Boolean,
	cuisines: [String],
	image: String,
});

module.exports = mongoose.model("restaurant", restaurantSchema);

const Restaurant = require('./Restaurant.model');

// Restaurant data
const restaurantsData = [
    {
        name: "Taj Mahal Restaurant",
        address: "456 Park Ave",
        contact: "987-654-3210",
        location: "Lahore",
        rating: 4.8,
        offers: true,
        cuisines: ["North Pakistani", "Sea food"],
        image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
	{
        name: "Bar BQ Tonight",
        address: "609 Jinnah Ave",
        contact: "987-654-3210",
        location: "Lahore",
        rating: 3.8,
        offers: true,
        cuisines: ["South Pakistani", "Steak"],
        image: "https://images.pexels.com/photos/92090/pexels-photo-92090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Golden Dragon",
        address: "789 Oak St",
        contact: "456-789-0123",
        location: "Islamabad",
        rating: 4.3,
        offers: false,
        cuisines: ["Chinese", "Oriental"],
        image: "https://images.pexels.com/photos/14636315/pexels-photo-14636315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Pizza Italia",
        address: "101 Pine St",
        contact: "321-654-0987",
        location: "Karachi",
        rating: 3.6,
        offers: true,
        cuisines: ["Italian", "Pizza"],
        image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    // Add more restaurants here...
    {
        name: "South Spice",
        address: "234 Maple Ave",
        contact: "789-012-3456",
        location: "Quetta",
        rating: 4.2,
        offers: true,
        cuisines: ["South Pakistani", "Barbecue"],
        image: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Sushi Palace",
        address: "567 Elm St",
        contact: "234-567-8901",
        location: "Multan",
        rating: 4.7,
        offers: true,
        cuisines: ["Japanese", "Sushi"],
        image: "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "The Steakhouse",
        address: "789 Oak St",
        contact: "456-789-0123",
        location: "Islamabad",
        rating: 3.4,
        offers: true,
        cuisines: ["Steak", "Desserts"],
        image: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Seafood Paradise",
        address: "901 Maple Ave",
        contact: "901-234-5678",
        location: "Karachi",
        rating: 4.6,
        offers: true,
        cuisines: ["Seafood", "Continental"],
        image: "https://images.pexels.com/photos/1064136/pexels-photo-1064136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Peshaweri Kabab",
        address: "123 Oak St",
        contact: "345-678-9012",
        location: "Peshawer",
        rating: 4.5,
        offers: false,
        cuisines: ["South Pakistani", "North Pakistan"],
        image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Mexican Fiesta",
        address: "345 Pine St",
        contact: "678-901-2345",
        location: "Lahore",
        rating: 4.2,
        offers: true,
        cuisines: ["Japanese", "Chinese"],
        image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Pasta Paradise",
        address: "567 Elm St",
        contact: "012-345-6789",
        location: "Karachi",
        rating: 4.7,
        offers: true,
        cuisines: ["Italian", "Pasta"],
        image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
];

// Create new instances of Restaurant model for each restaurant data and save to database
restaurantsData.forEach(restaurantData => {
    const newRestaurant = new Restaurant(restaurantData);
    newRestaurant.save()
        .then((restaurant) => {
            console.log("Restaurant saved:", restaurant);
        })
        .catch((error) => {
            console.error("Error saving restaurant:", error);
        });
});

