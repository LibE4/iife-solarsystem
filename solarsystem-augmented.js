var SolarSystem = (function(newSolarSystem){
	var closestStars = ["Alpha Centauri"];
	var ageOfSolarSystem = 0;
	var dwarfPlanets = ["pluto"];
	newSolarSystem.setclosestStars = function(newclosestStars){
		closestStars.push(newclosestStars);
	};
	newSolarSystem.getclosestStars = function(){
		return closestStars
	};
	newSolarSystem.setageOfSolarSystem = function(newageOfSolarSystem){
		ageOfSolarSystem = newageOfSolarSystem;
	};
	newSolarSystem.getageOfSolarSystem = function(){
		return ageOfSolarSystem;
	};
	newSolarSystem.setdwarfPlanets = function(newdwarfPlanets){
		dwarfPlanets.push(newdwarfPlanets);
	};
	newSolarSystem.getdwarfPlanets = function(){
		return dwarfPlanets;
	};
	return newSolarSystem;
})(SolarSystem || {});