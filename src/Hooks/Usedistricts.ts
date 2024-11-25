import { useEffect, useState } from "react";

export const Usedistricts = () => {
	const [districts, setDistricts] = useState<string[]>([]);

	useEffect(() => {
		const fetchDistricts = async () => {
			const response = await fetch("src/data/districts.json");
			const data = await response.json();
			setDistricts(data);
		};
		fetchDistricts();
	}, []);

  return { districts };
};