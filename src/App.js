import 'bootstrap/dist/css/bootstrap.min.css';

import style from "./App.module.css";
import { Form } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import CardItem from "./components/RestaurantCard/Card";
import useRestaurantContext from "./components/Hooks/useRestaurant";



function App() {


	const { selectedItems, setSelectedItems, setLocation, setRating } =
		useRestaurantContext();

	const options = [
		{ value: "North Pakistani", label: "North Pakistani" },
		{ value: "South Pakistani", label: "South Pakistani" },
		{ value: "Chinese", label: "Chinese" },
		{ value: "Desserts", label: "Desserts" },
		{ value: "Italian", label: "Italian" },
		{ value: "Oriental", label: "Oriental" },
		{ value: "Pastas", label: "Pastas" },
		{ value: "Pizzas", label: "Pizzas" },
		{ value: "Japanese", label: "Japanese" },
		{ value: "Sushi", label: "Sushi" },
		{ value: "Barbecue", label: "Barbecue" },
		{ value: "Steak", label: "Steak" },
		{ value: "Seafood", label: "Seafood" },
	];

	const handleCheckboxChange = (value) => {

		if (selectedItems.includes(value)) {

			setSelectedItems(selectedItems.filter((item) => item !== value));
		} else {

			setSelectedItems([...selectedItems, value]);
		}

		console.log("elements", selectedItems);
	};

	return (
		<div className="App">
			<NavBar />
			<div>
				<div className={style.headers}>
					<div className={style.locationContainer}>
						<Form.Select
							aria-label="Location"
							onChange={(e) => {
								setLocation(e.target.value);
							}}
						>
							<option hidden>Select Location</option>
							<option value="Islamabad">Islamabad</option>
							<option value="Lahore">Lahore</option>
							<option value="Karachi">Karachi</option>
							<option value="Peshawer">Peshawer</option>
							<option value="Quetta">Quetta</option>
							<option value="Multan">Multan</option>
						</Form.Select>
					</div>
					<div className={style.cuisinesContainer}>
						<Form>
							<Form.Label>Select Cuisines:</Form.Label>
							{options.map((option) => (
								<Form.Check
									key={option.value}
									type="checkbox"
									id={option.value}
									label={option.label}
									checked={selectedItems?.includes(option.value)}
									onChange={() => handleCheckboxChange(option.value)}
								/>
							))}
						</Form>
					</div>
					<div className={style.ratingContainer}>
						<Form.Select
							aria-label="Default select example"
							onChange={(e) => {
								setRating(e.target.value);
							}}
						>
							<option hidden>Select Rating</option>
							<option value="3">3 above</option>
							<option value="4">4 above</option>
						</Form.Select>
					</div>
				</div>
			</div>
			<div className={style.restaurants}>
				<h3>Restaurants</h3>
				<CardItem />
			</div>
		</div>
	);
}

export default App;
